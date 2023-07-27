import TodoListItem from "./TodoListItem/TodoListItem"
import { useState } from "react"
const TodoList=({list,deleteItem,triggerEdit})=>{
    
    return(
    <>
    {list.length>0?(
      list.map((item,index)=>(<TodoListItem 
        title={item.title} 
        priority={item.priority} 
        index={index}
        key={index} 
        onDelete={deleteItem}
        id={item.id}
        onEdit={triggerEdit}/>))
    ) :(<h2 style={{textAlign:"center"}}>No iteams to display</h2>)
    }
    </>
       
    )
}
export default TodoList