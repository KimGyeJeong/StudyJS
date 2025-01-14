import React, { useEffect, useState } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:9000/api/users');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <ul>
            {users.map((user) => (
                <li key={user._id}>
                    {user.name} ({user.email}) - {user.age} years old
                </li>
            ))}
        </ul>
    );
};

export default UserList;
