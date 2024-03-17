import React from 'react';

const Currenly = ({Cooking11}) => {
    // console.log(Cooking11.length)
    return (
        <div className='text-center  mb-5  text-2xl font-semibold'>
        Currently cooking: {Cooking11.length}
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

export default Currenly;