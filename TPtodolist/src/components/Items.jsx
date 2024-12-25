import { FaUserEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import './todostyle.scss';
export default function Items({item,onDelete,onUpdate}){

    const [isEdit, setIsEdit]=useState(false);


    const [newvalue,setNewvalue]=useState(item.title);

    function handleChange(even){
        even.preventDefault();
        const value=even.target.value;
        setNewvalue(value);
    }

    function handleClickUpdate(e){
        e.preventDefault();
        onUpdate(item.id,newvalue);
        setIsEdit(false);
    }
    

    return(
        <>
        <div className="todo">
            {
                isEdit?
                <li className="cardTodo">
                    <form onSubmit={handleClickUpdate}>
                        <input type="text" onChange={handleChange} value={newvalue}/>
                        <button onSubmit={handleClickUpdate}>Modifier</button>
                    </form>
                </li>
                :
                <li className="cardtodo">
                    <div className="title" key={item.id}>{item.title}</div>
                    <div className="settings">
                        <button onClick={()=>setIsEdit(true)}><FaUserEdit /></button>
                        <button onClick={()=>onDelete(item.id)}><FaTrash /></button>
                    </div>
                </li>
            }
        </div>
        </>
    )
}