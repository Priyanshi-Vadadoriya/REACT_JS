import React, { useState } from 'react';

function Form() {
  const [inputValue, setInputValue] = useState('');

  const handleResetInput = () => {
    setInputValue('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleResetInput}>Reset Input</button>
    </div>
  );
}

export default Form;
