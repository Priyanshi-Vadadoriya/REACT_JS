import React, { useState } from "react";

const initial = [
  {id:1,title:"HTML"},
  {id:2,title:"CSS"},
  {id:3,title:"JS"}
];

function Todo() {

  const [todo,setTodo] = useState(initial);
  const [add,setAdd] = useState("");
  const [isEditing,setEditing] = useState("");
  const [editText,setEdittext] = useState("");

const saveTodo = ()=>{
  if(add == "")
  {
    alert("Plz enter something...")
  }
  else{
    setTodo([...todo,{id:todo.length+1,title:add}])
    setAdd("")
  }
}

const editTodo = (id,title)=>{
  setEditing(id)
  setEdittext(title)
}

const handleSave = (id)=>{
  const save = todo.map((v)=>
  v.id == id ? {...v,title:editText} : v
  )
  setTodo(save)
  setEditing(null)
}

const deletetodo = (id)=>{
  const deleted = todo.filter((v)=>
  v.id !== id)
  setTodo(deleted)
}

  return(
    <div>
      <input type="text" value={add} onChange={(e)=>setAdd(e.target.value)}></input>
      <button onClick={saveTodo}>Add</button>
      {
        todo.map((v)=>(
          <ul>
            <li key={v.id}>
              {
                isEditing == v.id ?
                (<>
                <input type="text" value={editText} onChange={(e)=>setEdittext(e.target.value)}></input>
                <button onClick={()=>{handleSave(v.id)}}>Save</button>
                </>) : 
                
                (<>
                {v.title}
                <button onClick={()=>{editTodo(v.id,v.title)}}>Edit</button>
                <button onClick={()=>{deletetodo(v.id)}}>Delete</button>
                </>)
              }
            </li>
          </ul>
        ))
      }
    </div>
  )
}

export default Todo;