import React from 'react';
import Cooking from './Cooking';
const Aside = ({ Cook, idx, current }) => {
  const { recipe_id, recipe_name, preparing_time, calories } = Cook
  // const {Cook}=Cook
  // console.log(
  // current
  //   )
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
           
            <tbody>
              {/* <!-- row 1 --> */}
              <tr className="bg-base-200 text-black">
                <th>{idx + 1}</th>
                <td>{recipe_name}</td>
                <td className='text-center'>{preparing_time}min</td>
                <td className=' text-center pl-14 pr-0'>{calories}calories</td>
                <td><button onClick={() => current( Cook)} className='bg-green-400 rounded-3xl btn w-24 font-semibold'> Preparing</button></td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
     
    </div>


  );

};

export default Aside;