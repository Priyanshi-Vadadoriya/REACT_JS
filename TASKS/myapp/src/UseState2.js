import React, { useState } from 'react';

function ColorChange() {
  // const [btnColor, setBtnColor] = useState('blue'); 
  const [text,setText] = useState("Enter abc...");
  const change = (event)=>{
    setText(event.target.value)
  }

  const update = ()=>{
    let nexttext = text.toUpperCase();
    setText(nexttext)
  }
  // const ButtonClick = () => {
  //   const newColor = btnColor === 'blue' ? 'red' : 'blue';
  //   setBtnColxor(newColor);
  // };

  return (
    <div>
      {/* <button
        style={{ backgroundColor: btnColor }}
        onClick={ButtonClick}
      >
        Change Color
      </button> */}
      <textarea value={text} onChange={change}></textarea><br></br>
      <button onClick={update}>click</button>
    </div>
  );
}

export default ColorChange;

