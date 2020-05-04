import React from 'react';

//Component that display a message when the new query photos does not have response from the API. 
const NoPhotos = () => {
    return(
        <li className="not-found">
            <h3>No Results Found</h3>
            <p>You search did not return any results. Please try again.</p>
          </li>
    );
}

export default NoPhotos;