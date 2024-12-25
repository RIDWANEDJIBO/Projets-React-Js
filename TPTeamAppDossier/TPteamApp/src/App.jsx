import {useEffect,useState} from 'react'
import SearchBarApp from './Components/SearchBarApp';
import axios from 'axios';
import './App.css'

function App() {

  const [useData, setUseDdata]=useState([]);
  const [currentOption, setCurrentOption]=useState('All');
  const [count,setCount]=useState(0);

  useEffect(()=>{
    async function FetchUseData() {
      try{
        const response=await axios.get('https://randomuser.me/api/?results=50');
        setUseDdata(response.data.results)
      }
      catch(error){
        console.error('Erreur lors de la recuperation des donneées: '+error)
      }
    }

    FetchUseData();
  },[])


  function handleClick(e){
    const option = e.target.name;
    setCurrentOption(option);

    let res=[];
    
    
    switch(option){

      case'All':
        setUseDdata([...useData]);
        break;
      case 'Name':
        setUseDdata([...useData.sort((a,b)=>a.name.last.localeCompare(b.name.last))]);
        break;
      case 'Country':
        setUseDdata([...useData.sort((a,b)=>a.location.country.localeCompare(b.location.country))]);
        break;
      case 'City':
        setUseDdata([...useData.sort((a,b)=>a.location.city.localeCompare(b.location.city))]);
        break;
      default:
        console.log('pas de user');
    }
  }

  function onCount(){
    setCount(count+1);
    
  }


  return (
    <>
    
    <SearchBarApp items={useData}/>
    
    <div className="Btns">
      <button onClick={handleClick} name='All'>All</button>
      <button onClick={handleClick} name='Name'>Name</button>
      <button onClick={handleClick} name='Country'>Country</button>
      <button onClick={handleClick} name='City'>City</button>
      <button onClick={onCount}>+1</button>
      <span className='counter'>{count}</span>
    </div>

    
    <table className='userTable'>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>FirstName</th>
            <th>Mail</th>
            <th>Phone</th>
            <th>Country</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {useData.map((user, index) => (
            <tr key={index}>
              <td><img src={user.picture.thumbnail} width="50px" alt="" /></td>
              <td>{user.name.last}</td>
              <td>{user.name.first}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.location.country}</td>
              <td>{user.location.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </>
  );
}

export default App
