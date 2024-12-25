import './Contenu.css';
import { useContext } from 'react';
import { Context } from '../Context/langContext';
import data from '../data/data'
import cocaImg from '../assets/coca-01.png'

export default function Contenu(){

    const {lang} = useContext(Context);



    return(
        <div className='global'>
            <div className="item-left">
                <h1 className='title'>{data[lang].title}</h1>
                <p className="subtitle">
                    {data[lang].txt}
                </p>
                <p className="text">
                    {data[lang].ctn}
                </p>
                <button className='btn' >
                    {data[lang].btn}
                </button>

                
            </div>
            <div className="item-right">
                <img src={cocaImg} alt="" />
            </div>

        </div>
    )
}