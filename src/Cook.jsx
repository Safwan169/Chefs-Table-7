import React from 'react';

const Cook = ({cooks}) => {
    // console.log(cood)
    return (
        <div className='text-center mb-5 text-2xl font-semibold'>
            Want to cook: {cooks.length}
        </div>
    );
};

export default Cook;