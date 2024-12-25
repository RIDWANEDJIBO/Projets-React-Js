import  './form.scss'
import EmojiPickerInput from './../EmojiPicker/EmojiPickerInput'

export default function Form(){


    function handleSubmit(e){
        e.preventDefault();
        
        
    }


    return(
    <>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name"/>
            <label htmlFor="firstName">FirstName</label>
            <input type="text" id="firstName"/>
            <EmojiPickerInput/>
            <button type='submit' className='btn'>Envoyer</button>
        </form>
    </>
    )
}