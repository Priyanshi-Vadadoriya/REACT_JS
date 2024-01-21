import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      if (inputValue.length > 0) {
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then(response => response.json())
          .then(data => {
            // Filter suggestions based on the first letter of the name
            const filteredSuggestions = data.filter(user =>
              user.name.toLowerCase().startsWith(inputValue.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
          })
          .catch(error => console.error('Error fetching data:', error));
      } else {
        setSuggestions([]);
        setUserData(null);
      }
    };

    fetchData();
  }, [inputValue]);

  const handleSelect = (user) => {
    setInputValue(user.name);
    setSuggestions(suggestions.filter(u => u.id !== user.id));
    setSelectedUser(user);
  };

  const handleSearch = () => {
    if (selectedUser) {
      fetch(`https://jsonplaceholder.typicode.com/users/${selectedUser.id}`)
        .then(response => response.json())
        .then(data => setUserData(data))
        .catch(error => console.error('Error fetching user data:', error));
    }
  };

  return (
    <div className="search-container">
      <div className='search'>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type to search..."
        />
        <button disabled={!selectedUser} onClick={handleSearch}>Search</button>

        <div>
          {suggestions.map(user => (
            <div key={user.id} onClick={() => handleSelect(user)}>
              {user.name}
            </div>
          ))}
        </div>

        {selectedUser && (
          <div>
            <p>Selected User: {selectedUser.name}</p>
          </div>
        )}

        {userData && (
          <div>
            <p className='text-light'>Username: {userData.username}</p>
            <p className='text-light'>Email: {userData.email}</p>
            <p className='text-light'>Phone: {userData.phone}</p>
            <p className='text-light mb-5'>Address: {userData.address.street}, {userData.address.city}</p>
            <Link to='/' className='bg-light py-3 px-4 rounded'>Back</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
