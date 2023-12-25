import React, { useRef } from 'react'



 function UseRefHook() {
    const test1 = useRef();
    const refbtn = useRef();
    
const test123 = ()=>
{
    console.log(test1) 
    console.log(test1.current) 
    
    console.log(refbtn)
    console.log(refbtn.current)
}



  return (
    <div>
      <button ref={refbtn} onClick={test123}>Add</button>
      <input ref={test1} />
      {console.log(refbtn)}
      {console.log(refbtn.current)}
      {console.log(test1)}
      {console.log(test1.current)}
    </div>
  )
}

export default UseRefHook;