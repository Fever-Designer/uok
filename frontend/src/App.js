import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://uok-7ha2.onrender.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(Array.isArray(data) ? data : data.users || []))
      .catch((err) => console.error('Error fetching users:', err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Management</h1>
        {Array.isArray(users) && users.length > 0 ? (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading users or no users found...</p>
        )}
      </header>
    </div>
  );
}

export default App;
