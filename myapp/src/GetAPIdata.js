import React from "react";

export default function GetAPIdata()
{
   const x = ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{return res.json()})
    .then((data)=>{
       let html = "<h1>----API DATA---</h1>"
        data.map((val)=>{
        html = html + `
        <li>${val.id + " " + "<br/>" + val.name}</li>`
            
        })
        document.getElementById('data').innerHTML = html;
    })
   }
    return(
        <>

        <button onClick={x}>Getdata</button>
        <div id="data" style={{color:"blue"}}>GetAPIdata</div>
        <img src="https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg" height="200px"/>
        </>
    )
}