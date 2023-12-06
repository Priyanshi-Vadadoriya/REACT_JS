import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EmpView() {
  const [empdata,setEmpdata] = useState("");
  const {empId} = useParams();
  const navigate = useNavigate();

  console.log(empId);
  useEffect(()=>{ 
    fetch(("http://localhost:8000/employee/"+empId))
    .then((res)=>{return res.json()})
    .then((data)=>{
      //console.log(data)
      setEmpdata(data)

    })
    .catch((err)=>{console.log(err.message)})
  })
  return (
    <div>
      <h3>Id:{empdata.id}</h3>
      <h3>Name:{empdata.name}</h3>
      <h3>Email:{empdata.email}</h3>
      <h3>Phone:{empdata.phone}</h3>
      <h3>Active:{(empdata.active) ? "Yes" : "No"}</h3>

      <div>
        <button onClick={()=>{navigate('/')}} className='btn btn-info'>Go Back</button>
      </div>
    </div>
  )
}

export default EmpView
