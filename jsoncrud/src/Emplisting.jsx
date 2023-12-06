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
                    <button className='btn btn-danger me-3'>Edit</button>
                    <button className='btn btn-success me-3'>Delete</button>
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
