import React from 'react'
import { useState } from 'react'

function Todo() {
  const initialtodo = [
    {id:1,title:"HTML"},
    {id:2,title:"CSS"},
    {id:3,title:"JS"}
  ]
  const [todo,setTodo] = useState(initialtodo);
  const [add,setAdd] = useState("");
  const [isEditing,setEditing] = useState("");
  const [Edittext,setEdittext] = useState("");


  const handleAdd = ()=>{
    if(add=="")
    {
      alert("Please enter something...!")
    }
    else
    {
      setTodo([...todo,{id:todo.length+1,title:add}])
      setAdd("")
    }
  }

const handleEdit = (id,title)=>{
  setEditing(id)
  setEdittext(title)
}

const handleSave = (id)=>{
 const save = todo.map((v)=>(
    v.id == id ? {...v,title:Edittext} : v 
  ))
  setTodo(save)
  setEditing(null)
}

const handleDELETE = (id)=>{
  const deleted = todo.filter((v)=>
  v.id !== id
  )
  setTodo(deleted)
}

  return (
    <div>
      <input type='text' value={add} onChange={(e)=>{setAdd(e.target.value)}}></input>
      <button onClick={handleAdd}>Add</button>
      {
        todo.map((v)=>(
          <ul>
            <li key={v. id}>
              {
                isEditing == v.id ?
                (<>
                    <input type='text' value={Edittext} onChange={(e)=>{setEdittext(e.target.value)}}></input>
                    <button onClick={()=>{handleSave(v.id)}}>Save</button>
                </>) :
                (<>
                  {v.title}
                  <button onClick={()=>{handleEdit(v.id,v.title)}}>EDIT</button>
                  <button onClick={()=>{handleDELETE(v.id)}}>DELETE</button>
                </>)
              }
              
            </li>
          </ul>
        ))
      }
    </div>
  )
}

export default Todo
