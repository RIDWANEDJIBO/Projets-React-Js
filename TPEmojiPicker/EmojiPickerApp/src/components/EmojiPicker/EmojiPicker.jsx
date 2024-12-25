import './emojiPicker.scss';
import {forwardRef, useState, useRef, useEffect} from 'react'
import {data as emojiList} from './data'
import EmojiSearch from './EmojiSearch';
import EmojiButton from './EmojiButton';

export function EmojiPicker(props, inputRef){

const [isOpen, setIsOpen] = useState(false);

const [emojis, setEmojis] = useState(emojiList);


const containerRef = useRef(null);


function handleClickOpen(){
  setIsOpen(!isOpen)
}

useEffect(()=>{
    window.addEventListener('click',(e)=>{
        if(!containerRef.current.contains(e.target)){
            setIsOpen(false);
            setEmojis(emojiList);
        }
    })
},[])


function handleSearch(e) { // Définit une fonction pour gérer la recherche d'emoji.
  e.preventDefault(); // Empêche le comportement par défaut du formulaire.
  const value = e.target.value.toLocaleLowerCase(); // Récupère la valeur de la recherche en minuscules.
  if (!!value) { // Vérifie si une recherche a été effectuée.
    const search = emojiList.filter((emoji) => { // Filtre la liste des emojis en fonction de la recherche.
      return (
        emoji.name.toLowerCase().includes(value) || (Array.isArray(emoji.keywords) && emoji.keywords.some(keyword => keyword.toLowerCase().includes(value)))
      );
    });
    setEmojis(search); // Met à jour la liste des emojis avec les résultats de la recherche.
  } else {
    setEmojis(emojiList); // Réinitialise la liste des emojis si aucune recherche n'est effectuée.
  }
}


function handleEmoji(emoji){
    const cursorPos=inputRef.current.selectionStart;
    const text=inputRef.current.value;
    console.log(text)

    const prev=text.slice(0,cursorPos);
    const next=text.slice(cursorPos);

    inputRef.current.value=prev + emoji.symbol + next;
    inputRef.current.selectionStart = cursorPos + emoji.symbol.length ;
    inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;

    inputRef.current.focus();
}


  return (
    <div  ref={containerRef}>
     <button className='btn-emoji'  type="button" onClick={handleClickOpen}>😀 ...</button>

     {isOpen ? <div>
    <EmojiSearch onSearch={handleSearch} />
    <div className='listEmoji'>
      {emojis.map((emoji) => (
        <EmojiButton key={emoji.name} emoji={emoji} onClick={handleEmoji} />
      ))}
    </div>
  </div> : ""}
    </div>
  )
}

export default forwardRef(EmojiPicker) 
// La fonction forwardRef permet d'exposer la référence inputRef à l'extérieur du composant EmojiPicker, ce qui permet à un parent de contrôler l'élément d'entrée dans lequel les emojis sont insérés.