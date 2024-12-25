import FrenchFlag from '../assets/france.svg'
import EnglishFlag from '../assets/united-kingdom.svg'
import SpanishFlag from '../assets/spain.svg'
import './ToggleLangs.css'
import { useContext } from 'react'
import {Context} from '../Context/langContext'

export default function ToggleLangs(){

    const {toggleLang}=useContext(Context)

    return(
       <div className="box-langs">
        <img src={FrenchFlag} onClick={()=>toggleLang('FR')} />
        <img src={EnglishFlag} onClick={()=>toggleLang('EN')} />
        <img src={SpanishFlag} onClick={()=>toggleLang('ES')} />
       </div>
    )
}