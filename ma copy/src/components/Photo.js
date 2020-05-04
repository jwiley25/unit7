import React from 'react';

//Component that displya the photo using the photo data props. 
const Photo = (props) => {
    return(
        <li>
            <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={`${props.title}`}></img>
        </li>

    );
}

export default Photo;