import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserPage = () => {
    const { id } = useParams(); // Extract the user ID from the URL
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/users/${id}`);
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Failed to fetch user data:', error);
            }
        };
        fetchUser();
    }, [id]);

    if (!user) {
        return <div>Loading user data...</div>;
    }

    return (
        <div>
            <h1>{user.nick}</h1>
            <ul>
                {user.posts.map((post) => (
                    <li key={post.id}>{post.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserPage;
