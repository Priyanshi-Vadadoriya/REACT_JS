import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function EmpView() {
  const {} = useParams();
  useEffect(()=>{
    fetch(("http://localhost:8000/employee"))
    .then((res)=>{return res.json()})
    .then((data)=>{console.log(data)})
    .catch((err)=>{console.log(err.message)})
  })
  return (
    <div>
      view
    </div>
  )
}

export default EmpView
