import { Link } from 'react-router-dom';
import React from 'react';

const Greeting = ({ currentUser, logout}) => {

    const links = () => {
        
        return (
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/signup">Sign up!</Link>
            </nav>
        );
    };

    const greeting = () => {

        return (
            <div>
                <h1>Welcome to Bench BnB {currentUser.username}</h1>
                <button onClick={logout}>Logout</button>
            </div>
        );
    }

    return currentUser ? greeting() : links()
};

export default Greeting;