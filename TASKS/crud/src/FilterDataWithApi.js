import React, { useEffect, useState } from 'react'

function FilterDataWithApi() {
    const [user,setuser] = useState([]);
  
    const [filterText, setFilterText] = useState('');
  
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{return res.json()})
        .then((data)=>{setuser(data)})
        .catch((err)=>{console.log(err.message)})
    },[])

    const filteredData = user.filter((item) =>
    item.name.toLowerCase().startsWith(filterText)
  );

  return (
    <div>
        <input
        type="text"
        placeholder="Filter by user name"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />


        <table className='table'>
            <thead className='table-dark'>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                </tr>

            </thead>
            <tbody>
                {
                    filteredData && filteredData.map((item)=>(
                       <tr>
                            <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                       </tr>
                    ))
                }
                
            </tbody>
        </table>
    </div>
  )
}

export default FilterDataWithApi;

