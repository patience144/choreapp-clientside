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
            <Link style={navStyle} to='/about'>
                <li>About</li> 
            </Link>
            <Link style={navStyle} to='/item'>
                <li>Chore List</li>
            </Link>
            <Link style={navStyle} to='/add'>
                <li>Add Chores</li>
            </Link>
            </ul>
        </div>
    )
}
