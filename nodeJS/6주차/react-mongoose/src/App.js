import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:9000/users');
      setUsers(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/users', { name, age });
      setUsers([...users, response.data]);
      setName('');
      setAge('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/users/${id}`);
      setUsers(users.filter((user) => user._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
      <div>
        <h1>User Management!</h1>
        <form onSubmit={handleAddUser}>
          <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
          />
          <button type="submit">Add User</button>
        </form>
        <ul>
          {users.map((user) => (
              <li key={user._id}>
                {user.name} ({user.age})
                <button onClick={() => handleDeleteUser(user._id)}>Delete</button>
              </li>
          ))}
        </ul>
      </div>
  );
};

export default App;
