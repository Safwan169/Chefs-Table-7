import React from 'react';
import Cal from './Cal';


const Cooking = ({ l, idx }) => {
    // console.log(l)
    const { recipe_id, recipe_name, preparing_time, calories } = l
    // console.log(calories)

    return (
        <div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
             
              <tbody>
                {/* <!-- row 1 --> */}
                <tr className="bg-base-200  text-black">
                  <th>{idx + 1}</th>
                  <td className='  p-0 text-center w-[100px]'>{recipe_name}</td>
                  <td className=' w-[200px] text-center'>{preparing_time}min</td>
                  <td className=''>{calories}calories</td>
                  <td><button className=' w-20 '> </button></td>
                </tr>
  
              </tbody>
            </table>
          </div>
        </div>

       
      </div>

    );
};

export default Cooking;