import React, { useState } from 'react';

function ColorChange() {
  const [btnColor, setBtnColor] = useState('blue'); 

  const ButtonClick = () => {
    const newColor = btnColor === 'blue' ? 'red' : 'blue';
    setBtnColor(newColor);
  };

  return (
    <div>
      <button
        style={{ backgroundColor: btnColor }}
        onClick={ButtonClick}
      >
        Change Color
      </button>
    </div>
  );
}

export default ColorChange;

