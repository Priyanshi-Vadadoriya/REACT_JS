

        import React, { useState } from 'react';

        const userData = [
          { username: 'Alice', email: 'alice@example.com' },
          { username: 'Bob', email: 'bob@example.com' },
          { username: 'Charlie', email: 'charlie@example.com' },
          { username: 'John', email: 'sweety@example.com' },
            { username: 'Alice', email: 'alice@example.com' },
            { username: 'Priyanshi', email: 'riddhi@example.com' },
            { username: 'Riddhi', email: 'priyanshi@example.com' },
            { username: 'Manali', email: 'jensi@example.com' },
            { username: 'Jensi', email: 'manali@example.com' },
            { username: 'Sweety', email: 'john@example.com' },
          // Add more user data here
        ];
        
        function App() {
          const [searchTerm, setSearchTerm] = useState('');
          const filteredUsers = userData.filter((user) =>
            user.username.toLowerCase().startsWith(searchTerm.toLowerCase())
          );
        
          return (
            <div className="App">
              <input
                type="text"
                placeholder="Search by first letter"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <table>
                <thead>
                  <tr>
                    <th>Username</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map((user, index) => (
                    <tr key={index}>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        
        export default App;
        