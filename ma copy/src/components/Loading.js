import React from 'react';
import gif from '../Loading.gif';

//Loading image when we are waiting for a API response. 
const Loading = () => {
    return(
        <li className="not-found">
            <h3>Loading</h3>
            <img src={gif} alt="loading..." />
        </li>
    );
}

export default Loading;
