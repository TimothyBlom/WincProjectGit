import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Link to='/'>Go To The Playlist</Link>
            <br />
            <Link to='/AboutMe'>Go To AboutMe</Link>
        </div>
    )
};

export default Navigation;