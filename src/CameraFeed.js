import React, { Fragment, useState } from 'react';
import Camera from 'react-html5-camera-photo';

const CameraFeed = () => {

    const [isCameraOpen, setIsCameraOpen] = useState(false);

    return (
        <Fragment>
        <div>
            <button onClick={() => setIsCameraOpen(true)}>Open Camera</button>
            <button
                onClick={() => {
                setIsCameraOpen(false);
                }}
            >Close Camera</button>
        </div>
        
        {isCameraOpen && (
            <Camera />
        )}
        
        </Fragment>
    )
}

export default CameraFeed
