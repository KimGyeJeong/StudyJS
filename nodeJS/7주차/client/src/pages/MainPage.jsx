import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MainPage = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const userRes = await axios.get('/api/user');
            const postsRes = await axios.get('/api/posts');
            setUser(userRes.data);
            setPosts(postsRes.data);
        };
        fetchData();
    }, []);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>{user.nick}</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default MainPage;
