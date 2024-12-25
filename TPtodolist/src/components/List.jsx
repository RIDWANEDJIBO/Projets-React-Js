import { useState } from "react"
import './todostyle.scss'
import Items from './Items'


const todoApp = () =>{

    const [itemTodo, setItemTodo]=useState('');
    const [list, setList]=useState([]);

    function handleChange(even){
        const value=even.target.value;
        setItemTodo(value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const newValue={
            id:crypto.randomUUID(),
            title:itemTodo,
            completed:false
        }
        setList([...list, newValue]);
        setItemTodo('');
    }

    function handleUpdate(id, value){
        const temp=[...list];
        const item=temp.find(item=>item.id===id);
        item.title=value;
        setList(temp);

    }

    function handleDelete(id){
        const temp=list.filter(item=>item.id!==id);
        setList(temp);
    }





    return(
        <div className="todoContainer">
      <form
        onSubmit={handleSubmit}
      >

        <input 
          type="text" 
          onChange={handleChange}
          value={itemTodo} />

        <button 
          onClick={handleSubmit} 
          type="submit">
            Créer une tache
        </button>

      </form>

    <div className="todoContainer">
      <ul className="listTodo">
      {
        list.map(item => (
           <Items 
            key={item.id} 
            item={item} 
            onUpdate={handleUpdate}
            onDelete={handleDelete}
            />
        ))
      }
      </ul>
    </div>

    </div>
    )
}

export default todoApp;