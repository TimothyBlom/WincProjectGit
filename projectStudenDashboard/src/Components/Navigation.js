import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div id='nav'>
            <Link className='navLink' id='homeButton' to='/'>Home Page</Link>
            <p>Students:</p>
            <Link className='navLink' to='/Aranka'>Aranka</Link>
            <Link className='navLink' to='/Evelyn'>Evelyn</Link>
            <Link className='navLink' to='/Floris'>Floris</Link>
            <Link className='navLink' to='/Hector'>Hector</Link>
            <Link className='navLink' to='/Martina'>Martina</Link>
            <Link className='navLink' to='/Maurits'>Maurits</Link>
            <Link className='navLink' to='/Rahima'>Rahima</Link>
            <Link className='navLink' to='/Sandra'>Sandra</Link>
            <Link className='navLink' to='/Storm'>Storm</Link>
            <Link className='navLink' to='/Wietske'>Wietske</Link>
        </div>
    )
};

export default Navigation;