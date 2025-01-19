import React, { useState } from 'react';

const JoinPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nick, setNick] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/auth/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, nick }),
            });
            if (response.ok) {
                alert('Join successful!');
            } else {
                alert('Join failed. Please try again.');
            }
        } catch (error) {
            console.error(error);
            alert('An error occurred.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <input
                type="text"
                value={nick}
                onChange={(e) => setNick(e.target.value)}
                placeholder="Nickname"
            />
            <button type="submit">Join</button>
        </form>
    );
};

export default JoinPage;
