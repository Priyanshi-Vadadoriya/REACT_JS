import React, { useState, useContext } from 'react';


const CheckboxContext = React.createContext();

function App() {
  
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };

  return (
    
    <CheckboxContext.Provider value={{ checkedItems, handleChange }}>
      <div className="App">
        <label>
          <input
            type="checkbox"
            name="option1"
            checked={checkedItems.option1 || false}
            onChange={handleChange}
          />
          Option 1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="option2"
            checked={checkedItems.option2 || false}
            onChange={handleChange}
          />
          Option 2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="option3"
            checked={checkedItems.option3 || false}
            onChange={handleChange}
          />
          Option 3
        </label>
        <br />

        <div>
          Selected Options:
          {Object.keys(checkedItems).map((key) => (
            checkedItems[key] && <p key={key}>{key}</p>
          ))}
        </div>
      </div>
    </CheckboxContext.Provider>
  );
}


export const useCheckboxContext = () => {
  return useContext(CheckboxContext);
};

export default App;
