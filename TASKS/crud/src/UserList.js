import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteuser } from './Reducer';

function UserList() {
    const userData =  useSelector(state=>state.users);
    const dispatch = useDispatch();

    const LoadDelete = (id)=>{
        dispatch(deleteuser({id:id}))
    }
      
      
  return (
    <div className='container'>
        <h1 className='mt-3'>User-Lists</h1>
        <Link  to='/create' className='btn btn-info my-3'>Add-User(+)</Link>
      <table className='table'>
        <thead className='table-dark'>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ACTIONS</th>
            </tr>
        </thead>
        <tbody>
            {
                userData.map((item)=>(
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>
                        <Link to={`/edit/${item.id}`} className='btn btn-success me-3'>EDIT</Link>
                        <button onClick={()=>{LoadDelete(item.id)}} className='btn btn-danger'>DELETE</button>
                    </td>
                </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default UserList

