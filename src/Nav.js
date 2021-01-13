import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {

    const navStyle = {
        color: 'black'
    };

    return (
        <div className='nav'>
            <h1>Chore App</h1>
            <ul className='nav-list'>
                <li><Link style={navStyle} to='/about'>About</Link></li>
                <li><Link style={navStyle} to='/item'>Chore List</Link></li>
                <li><Link style={navStyle} to='/add'>Add Chores</Link></li>
            </ul>
        </div>
    );
};

