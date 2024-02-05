import './App.css';
import { useState } from 'react';

function App() {

  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked
    });
  };
  return (
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
  );
}

export default App;
