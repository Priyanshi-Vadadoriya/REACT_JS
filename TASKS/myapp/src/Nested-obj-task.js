import React, { useState } from 'react'

function Usestate() {

    const [data,setData] = useState({
        name:"harsh",
        age:21,
        address: {
            city:"Ahmedabad",
            area:"CG",
            pin:380008
        }
    })

    const Update = ()=>{
        setData({
           ...data,
           address:{
            ...data.address,
            pin:123456
           }

        })
    }

  return (
    <div>

        <h3 >
            Name: {data.name}
            
            Age : {data.age}

            City : {data.address.city}

            area : {data.address.area}
            <br/>
           <h2 onClick={Update}> Pin : {data.address.pin}</h2>
        </h3>
      
    </div>
  )
}

export default Usestate