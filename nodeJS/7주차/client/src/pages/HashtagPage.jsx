import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HashtagPage = () => {
    const { tag } = useParams(); // Extract the hashtag from the URL
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`/api/hashtags/${tag}`);
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Failed to fetch posts for hashtag:', error);
            }
        };
        fetchPosts();
    }, [tag]);

    return (
        <div>
            <h1>#{tag}</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.content}</li>
                ))}
            </ul>
        </div>
    );
};

export default HashtagPage;
