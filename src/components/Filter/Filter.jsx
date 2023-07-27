import './Filter.css'
const Filter=({list,setList})=>{
  const handleFilter = async (str) => {
    try{
        const result = await fetch('http://localhost:3000/filter',{
          method: 'POST',
          headers: {
            Accept:'application/json,text/plain',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            priority:str
          })
        }
        
        );
        const res = await result.json();
        console.log(res);
        setList(res)

    }
    catch(err){
      console.log(err);
    }
  }
  
    return(
      <div className="Filter-container">
        <button className="Filter-high" onClick={()=>{

          handleFilter("high")
        }}>high</button>
        <button className="Filter-medium" onClick={()=>{

handleFilter("medium")
}}>medium</button>
        <button className="Filter-low" onClick={()=>{

handleFilter("low")
}}>low</button>
 <button className="Filter-All" onClick={()=>{

handleFilter("all")
}}>All</button>
      </div>
    )
}
export default Filter