import React, { useState } from 'react'

const initial = [
    {id:1,title:"mango"},
    {id:2,title:"banana"},
    {id:3,title:"apple"},
];
function Todo1() {

    const [todo,setTodo] = useState(initial);
    const [add,setAdd] = useState("");
    const[isEditing,setisEditing]=useState("");
    const[editText,seteditText]=useState("");

    const addtodo = ()=>{
        if(add=="")
        {
            alert("please enter something...");
        }
        else{
            setTodo([...todo,{id:todo.length+1,title:add}])
        setAdd("");
        }
    }

    const deletetodo = (id)=>{
        const updatetodo = todo.filter((v)=>(
            v.id !== id 
        ))
        setTodo(updatetodo);
    }

    const editStart = (id,text)=>{
        setisEditing(id);
        seteditText(text)
    }


    const saveTodo = (id) => {
      const save = todo.map((v)=>
      v.id==id ? {...v,title:editText} : v);
      setTodo(save);
      setisEditing(null);
    }
      

  return (
    <div className='color'>
      <input type="text" value={add} onChange={(e)=>setAdd(e.target.value)}/>
      <button onClick={addtodo}
      >Add</button>
    {
        todo.map((v)=>(
            <ul>
                <li key={v.id}>
                   {
                   isEditing== v.id ?
                    (<> 
                      <input type="text" value={editText} onChange={(e)=>seteditText(e.target.value)} />
                      <button onClick={()=>saveTodo(v.id)}> 
                        Save
                      </button>
                   </>) : (
                    <>
                    {v.title}
                    <button onClick={()=>editStart(v.id,v.title)}>
                        Edit
                    </button>
                    <button onClick={()=>deletetodo(v.id)}>
                    Delete
                    </button>

                    </>
                   )
    }
                </li>
            </ul>
        ))
     }
    </div>
  )
}
export default Todo1;


 