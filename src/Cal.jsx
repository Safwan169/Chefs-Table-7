import React from 'react';
import Min from './Min';
// import Min from './Min';


        const Cal = ({Cooking1}) => {


    return (
        <div>
            {/* <table className='table'> */}
                 {/* <!-- head --> */}
            {/* <thead>
              <tr className='border border-gray-600'>
               
                <th>Time</th>
                <th> Calories</th>
                <th></th>
              </tr>
            </thead>
            </table> */}
            <table className='table'>
            <thead>
            <tr className='flex  '>
                    <th className=''></th>
                    <td className=' lg:mr-4 ml-[100px] lg:ml-[130px] '>Total Time =<br />
                        {
                           (Cooking1.map((Cooking1)=><Min sf={Cooking1}></Min>))
                        } minutes</td>
                    <th className=' lg:w-[10px]'>Total Calories =<br />
                        1050 calories</th>
                </tr>
            </thead>
            </table>
        </div>
    );
};

export default Cal;