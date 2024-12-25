import {createContext, useContext, useEffect, useState} from 'react';

const AppContext = createContext({
  items: [],
  createItem: (item)=> {},
  getItem: (id)=> {},
  updateItem: (item)=> {},
});


export default function Store({children}){
  
const [Items, setItems] = useState([]);


function createItem(item){
  const temp = [...Items];
  temp.push(item);
  setItems(temp)
  console.log(Items)
}

function getItem(id){
  const item = Items.find(item => item.id === id);
  return item;
}

function updateItem(item){
  const index = Items.findIndex(i => i.id === item.id);
  const temp = [...Items];
  temp[index] = {...item};
}


  return <AppContext.Provider value={{
    items:Items,
    createItem,
    getItem,
    updateItem,
  }}>
    {children}
  </AppContext.Provider>
}


export function useAppContext(){
  return useContext(AppContext)
}