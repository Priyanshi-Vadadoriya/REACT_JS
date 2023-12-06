import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EmpEdit() {
  const [id,changeid] = useState("");
  const [name,changename] = useState("");
  const [email,changeemail] = useState("");
  const [phone,changephone] = useState("");
  const [active,changeactive] = useState(false);

  const navigate = useNavigate();
  const {empId} = useParams();
  useEffect(()=>{
    fetch(("http://localhost:8000/employee/"+empId))
    .then((res)=>{return res.json()})
    .then((data)=>{
      changeid(data.id)
      changename(data.name)
      changeemail(data.email)
      changephone(data.phone)
      // changeactive(data.active)
    })
    .catch((err)=>{console.log(err.message)})
   },[])


  const finaldata = {id,name,email,phone,active}
  const handlesubmit = (e)=>{
      e.preventDefault()

      fetch("http://localhost:8000/employee/"+empId,{
          method:"post",
          headers:{"content-type":"application/json"},
          body:JSON.stringify(finaldata)
      })
      .then((res)=>{
          if(res)
          {
              alert("saved successfully...")
              navigate('/')
          }
      })
     
  }
  return (
    <div>
        <h2 className='my-3'>Add-Employee</h2>
      <form className='col-6 border border-3 m-auto text-start p-4' onSubmit={handlesubmit}>
        <label className='form-label'>Id:</label>
        <input value={id} onChange={(e)=>{changeid(e.target.value)}} className='form-control' disabled="disabled"></input>

        <label className='form-label'>Name:</label>
        <input value={name} onChange={(e)=>{changename(e.target.value)}} className='form-control'></input>
        
        <label className='form-label'>Email:</label>
        <input value={email} onChange={(e)=>{changeemail(e.target.value)}} className='form-control'></input>

        <label className='form-label'>Phone:</label>
        <input value={phone} onChange={(e)=>{changephone(e.target.value)}} className='form-control'></input>

        <input value={active} onChange={(e)=>{changeactive(e.target.checked)}} type='checkbox' className='form-check-input'></input>{" "}
        <label className='form-label'>Is Active:</label>

        <div className='my-3' >
        <button type='submit' className='btn btn-info me-4'>Save</button>
        <button onClick={()=>{navigate('/')}} className='btn btn-danger'>Go Back</button>
        </div>
      </form>
    </div>
  )
}

export default EmpEdit
