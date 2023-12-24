import React from 'react'
// import Todo from './Todo'
// import Todo1 from './Todo1'
import "./App.css"
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './Action'

function App() {

  const count = useSelector(state=>state.count)
  const dispatch = useDispatch();
  return (
    <div className='App'>
      {/* <Todo/> */}
      {/* <Todo1/> */}
      <button onClick={()=>{dispatch(increment())}}>+</button>
        {count}
      <button onClick={()=>{dispatch((decrement()))}}>-</button>
      
    </div>
  )
}

export default App
