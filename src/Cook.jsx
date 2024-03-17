import React from 'react';

const Cook = ({cooks}) => {
    // console.log(cood)
    return (
        <div className='text-center  mb-5  text-2xl font-semibold'>
            Want to cook: {cooks.length}
            <hr className='border-dashed border-gray-300 mt-4' />
            <table className='table'>
                 {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Time</th>
                <th> Calories</th>
                <th></th>
              </tr>
            </thead>
            </table>
        </div>
    );
};

export default Cook;