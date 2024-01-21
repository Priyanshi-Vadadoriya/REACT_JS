import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { edituser } from './Reducer';
import { useDispatch, useSelector } from 'react-redux';

function EditUser() {
    
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {userid} = useParams();

    const userData =  useSelector(state=>state.users);
    //console.log(userData)

    const existinguser = userData.filter((user)=>
        user.id == userid
    )
    //console.log(existinguser[0])
    const {name,email} = existinguser[0];
    const [id,changeid] = useState(userid);
    const [uname,changeuname] = useState(name);
    const [uemail,changeuemail] = useState(email);

    const handlesubmit = (e)=>{
        e.preventDefault()
        dispatch(edituser({id:userid,name:uname,email:uemail}))
        navigate('/')

    }

  return (
    <div className='row justify-content-center'>
    <h2 className='my-3'>Edit-Users</h2>
  <form className='col-6 border border-3 text-start p-4' onSubmit={handlesubmit}>

        <label className='form-label'>Id : </label>
        <input value={id} onChange={(e)=>{changeid(e.target.value)}} disabled="disabled" type='text' className='form-control'></input>

        <label className='form-label'>Name : </label>
        <input value={uname} onChange={(e)=>{changeuname(e.target.value)}}  type='text' className='form-control'></input>

        <label className='form-label'>Email : </label>
        <input value={uemail} onChange={(e)=>{changeuemail(e.target.value)}}  type='text' className='form-control'></input>

        <div className='my-3'>
            <button className='btn btn-info me-3'>Save</button>
            <Link to='/' className='btn btn-danger'>Go-Back</Link>
        </div>

  </form>
</div>
  )
}

export default EditUser
