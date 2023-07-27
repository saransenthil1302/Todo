import { useEffect, useState } from 'react';
import './NewItem.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const NewItem=({list,setList,editState})=>{
    const[item,setItem]=useState('')
    const[Priority,setPriority]=useState('')
   
 
    
    
    const handleSave=async()=>{
      const new_obj={
        title:item,
        priority:Priority
      };
     try{
      const result= await fetch('http://localhost:3000/list',{
        method: 'POST',
        headers: {
          Accept:'application/json,text/plain',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title:item,
          priority:Priority
        })
      });
    
      
     
      const data =await result.json();
      new_obj.id=data.id;
      const new_list=[...list,new_obj];
      setList(new_list);
      toast(`${item} added successfully`);
      setItem("")
      setPriority("")
      
    }catch(err){
      console.log(err.message);
    }
      
    }
    const handleclear=()=>{
       setItem("")
       setPriority("")
       toast(`cleared Succesfully`);
    }
  
    return(
        <div className='new-items-card-container'>
        <div className="new-items-card">
         <div className="checkbox"/>
          <div className='form'>
            <input className='input' placeholder='New Item' value={item} onChange={(e)=>{setItem(e.target.value)}}/>
          </div>
          </div>
          {item &&(
          <div className='btn-con'>
            <button className='Priority-high' onClick={()=>setPriority("high")}>high</button>
            <button className='Priority-medium' onClick={()=>setPriority("medium")}>medium</button>
            <button className='Priority-low' onClick={()=>setPriority("low")}>low</button>
          </div>)}{(
          <div className='btn-container'>
            <button className='primary'onClick={()=>handleSave()}>save</button>
            <ToastContainer/>
            <button className='secondary'onClick={()=>handleclear()} >clear</button>
          </div>)}
         
         
          </div>
    )
}
export default NewItem;