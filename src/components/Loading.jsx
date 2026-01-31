import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex items-center justify-center min-h-[calc(100vh-299px)]'>
            <ScaleLoader size={100} color='blue'></ScaleLoader>
            
        </div>
    );
};

export default Loading;