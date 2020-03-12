import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div id='nav'>
            <Link className='navLink' to='/'>Go To Home</Link>
            <Link className='navLink' to='/Evelyn'>Go To Evelyn</Link>
            <Link className='navLink' to='/Aranka'>Go To Aranka</Link>
        </div>
    )
};

export default Navigation;