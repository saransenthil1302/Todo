
import { useEffect, useState } from 'react';
import './App.css'
import NewItem from './components/NewItem.jsx/NewItem';
import {nanoid}from'nanoid';
import TodoList from './components/TodoList/TodoList';
import Filter from './components/Filter/Filter';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const DEF=[
]


const App=()=> {
  
    const[list,setList]=useState(DEF)
  const [editState,setEditState]=useState({})

    const deleteItem=async(id)=>{
      try{
        await fetch('http://localhost:3000/list',{
          method: 'DELETE',
          headers: {
            Accept:'application/json,text/plain',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            id:parseInt(id)
          })
        });
        
     const filterList=list.filter((item)=>item.id!==id)
     setList([...filterList])
     toast(`${item} added successfully`);
    }catch(err){
      console.log(err.message);
    }
  }
  const triggerEdit = (item)=>{
    setEditState(item)
  }
  const editItem = (updateditem) =>{
    const id = updateditem._id
    console.log(updateditem)
  }
    useEffect(()=>{
      const fetchData = async () => {
        try{
            const result = await fetch('http://localhost:3000/list');
            const res = await result.json();
            setList(res);
        }
        catch(err){
          console.log(err);
        }
      }
      fetchData();
      
    },[])
   
  return(
    
  <div className='app'>
  <h1 className='title'>Todo List</h1>
  
  <NewItem list={list} setList={setList} editState={editState} editItem={editItem}/>
  <Filter list={list} setList={setList}/>
  <TodoList list={list} deleteItem={deleteItem} triggerEdit={triggerEdit} />
  </div>
  );
}

export default App
