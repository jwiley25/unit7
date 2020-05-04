import React from 'react';
import Photo from './Photo';
import NoPhotos from './NoPhotos';

//Component that create the photo Gallery. We use it in every kind of route. 
const Gallery = (props) => {

    const results = props.data;
    let photos;

    if(results.length>0){
        photos= results.map(photo => <Photo farm={photo.farm} server={photo.server} id={photo.id} secret={photo.secret} title={photo.title} key={photo.id}/>);
    } else {
        //When the response API has note data, we display the NoPhotos message.
        photos= <NoPhotos />
    }

    return(
        <div className="photo-container">
            <ul>
                {photos}
            </ul>
        </div>
    );
}

export default Gallery;