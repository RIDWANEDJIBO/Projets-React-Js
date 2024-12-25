import { useState,useEffect,useMemo } from "react"

export default function Results({search,items,onResultsNb}){
    // const search=search.toLowerCase();

    const [results, setResults]=useState([]);

    const filterItems = useMemo(() => findMatch(items, search), [items,search]);


    useEffect(()=>{
        onResultsNb(results);
    },[results])

    function findMatch(items, search) {
        const res = items.filter(i => {
          const fullName = `${i.name.first} ${i.name.last}`.toLowerCase();
          const email = i.email.toLowerCase();
          const phone = i.phone.toLowerCase();
          const city = i.location.city.toLowerCase();
          const country = i.location.country.toLowerCase();
    
          return (
            fullName.includes(search) ||
            email.includes(search) ||
            phone.includes(search) ||
            city.includes(search) ||
            country.includes(search)
          );
        });

        
        setResults(res);
        return res;
    }
    console.log();
    
    return(
        <>
            {results.length > 1 ? <p className=".Nbresultats">{results.length} résultats</p> : <p className="Nbresultats">{results.length} résultat</p>}
            <table className='listSearch'>
            <tbody>
                {search !== '' ? (
                filterItems.map((item, index) => (
                    <tr key={index}>
                    <td>{item.name.last}</td>
                    <td>{item.name.first}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.location.country}</td>
                    <td>{item.location.city}</td>
                    </tr>
                ))
                ) : (
                null
                )}
            </tbody>
            </table>
        </>
    )
}