import React, { useEffect, useState } from 'react';
import './App.css'
const Table = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setDetails(data))
  }, []);

  return (
    <div>
      <h1 className='text-center'>Fetch data in table form</h1>
      <table className='table text-center'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          
          </tr>
        </thead>
        <tbody>
          {details.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
