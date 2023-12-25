import React, { useState } from 'react'

function Todo() {
  const initialtodo = [
    {id:1,title:"HTML"},
    {id:2,title:"CSS"},
    {id:3,title:"JS"},
  ]

  const [todo,settodo] = useState(initialtodo);
  const [add,setadd] = useState("");
  const [isEditing,setediting] = useState("");
  const [Edittext,seteditText] = useState("");

  const handleadd = ()=>{
    if(add=="") 
    {
      alert("Plz enter something....")
    }
    else
    {
      settodo([...todo,{id:todo.length+1,title:add}])
      setadd("")
    }
  }

  const handleEdit = (id,title)=>{
    setediting(id)
    seteditText(title)
  }

  const handleSave = (id)=>{
    const save = todo.map((v)=>
    v.id == id ? {...v,title:Edittext} : v
    )
    settodo(save)
    setediting(null)
  }

  const handleDelete = (id)=>{
    const deleted = todo.filter((v)=>
    v.id !== id
    )
    settodo(deleted)
  }

  return (
    <div>
     <input type='text' value={add} onChange={(e)=>{setadd(e.target.value)}}></input>
     <button onClick={handleadd}>Add</button>
     {
        todo.map((v)=>(
          <ul>
            <li>
              {
                isEditing == v.id ? 
                (<>
                    <input type='text' value={Edittext} onChange={(e)=>{seteditText(e.target.value)}}></input>
                    <button onClick={()=>{handleSave(v.id)}}>Save</button>
                </>):
                (<>
                    {v.title}
                    <button onClick={()=>{handleEdit(v.id,v.title)}}>Edit</button>
                    <button onClick={()=>{handleDelete(v.id)}}>delete</button>
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
