import { useState } from "react";

import "./TodoListItem.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const TodoListItem=({title,priority,onDelete,id,onEdit})=>
{       
        const[isChecked,setChecked]=useState(false)
return(
    
    <div className={`item-card ${priority}`}>
        {isChecked ? (
       <span class="material-symbols-outlined select" onClick={()=>setChecked(false)}>
       select_check_box
       </span>
            ):(
        <span className="checkbox" onClick={()=>setChecked(true)} ></span>)}
        <div className={`card-title ${isChecked ?'strike':null }`}>{title}</div>
        <div className={`badge ${priority}`}>{priority.toUpperCase()}</div>
        
        <span className="material-symbols-outlined delete" onClick={()=>{onDelete(id)}}>
            delete
        </span>
        <span className="material-symbols-outlined delete" onClick={()=>{onEdit(item)}}>
           edit
        </span>
        
    </div>
     
    
)

}
export default  TodoListItem