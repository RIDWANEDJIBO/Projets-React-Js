import Results from './Results';
import { useState} from 'react';


export default function SearchBarApp({items}){

    const [search, setSearch]=useState('');
    const [results,setResults]=useState([]);


    function handleChange(e){
        const value=e.target.value;
        setSearch(value);

    }

    function handleResultats(items){
        setResults(items);
    }


    return(
        <>
        <div className="containerSearch">
            <input type="text" onChange={handleChange}/>
            <Results search={search} items={items} onResultsNb={handleResultats}/>

        </div>
        </>
    )
}