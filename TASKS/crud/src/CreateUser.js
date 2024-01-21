import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { adduser } from './Reducer';
import { useDispatch, useSelector } from 'react-redux';

function CreateUser() {

    const [id,changeid] = useState("");
    const [name,changename] = useState("");
    const [email,changeemail] = useState("");
    const dispatch = useDispatch();
    const userData =  useSelector(state=>state.users);
    const navigate = useNavigate();

    const handlesubmit = (e)=>{
        e.preventDefault()
        dispatch(adduser({id:userData[userData.length - 1].id + 1,name,email}))
        navigate('/')

    }



  return (
    <div className='row justify-content-center'>
        <h2 className='my-3'>Add-Users</h2>
      <form className='col-6 border border-3 text-start p-4' onSubmit={handlesubmit}>

            <label className='form-label'>Id : </label>
            <input value={id} onChange={(e)=>{changeid(e.target.value)}} disabled="disabled" type='text' className='form-control'></input>

            <label className='form-label'>Name : </label>
            <input value={name} onChange={(e)=>{changename(e.target.value)}} type='text' className='form-control'></input>

            <label className='form-label'>Email : </label>
            <input value={email} onChange={(e)=>{changeemail(e.target.value)}} type='text' className='form-control'></input>

            <div className='my-3'>
                <button className='btn btn-info me-3'>Save</button>
                <Link to='/' className='btn btn-danger'>Go-Back</Link>
            </div>

      </form>
    </div>
  )
}

export default CreateUser
