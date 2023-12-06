import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Emplisting() {

   const [empdata,setEmpdata] = useState("");
   const navigate = useNavigate();

   useEffect(()=>{
    fetch(("http://localhost:8000/employee"))
    .then((res)=>{return res.json()})
    .then((data)=>{setEmpdata(data)})
    .catch((err)=>{console.log(err.message)})
   })

   const loadview = (id)=>{
    navigate('/employee/view/'+id)
   }

   const loadEdit = (id)=>{
    navigate('/employee/edit/'+id)
   }
   
   const loadDelete = (id)=>{
    
    if(window.confirm("are you sure.....!"))
    {
      fetch("http://localhost:8000/employee/"+id,{
          method:"DELETE",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(empdata)
      })
      .then((res)=>{
          if(res)
          {
              alert("delete successfully...")
              navigate('/')
          }
      })
      window.location.reload()
    }
   }

   
  return (
    <div>
        <h1 className='mt-3'>Emplooyee list</h1>
        <button className='btn btn-lg btn-info my-4' onClick={()=>{navigate('/create')}}>Add-Employee(+)</button>
      <div className='container'>
      <table className='table '>
        <thead className='table table-dark'>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>PHONE</th>
                <th>ACTION</th>
            </tr>
        </thead>
        <tbody>
           {
            empdata && empdata.map((item)=>(
                <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                    <button className='btn btn-danger me-3' onClick={()=>{loadEdit(item.id)}}>Edit</button>
                    <button className='btn btn-success me-3' onClick={()=>{loadDelete(item.id)}}>Delete</button>
                    <button className='btn btn-warning me-3' onClick={()=>{loadview(item.id)}}>View</button>
                </td>
            </tr>
            )   )
           }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Emplisting
