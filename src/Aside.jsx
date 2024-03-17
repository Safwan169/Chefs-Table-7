import React from 'react';

const Aside = ({Cook,idx}) => {
  const {recipe_id,recipe_name,preparing_time,calories}=Cook
  // const {Cook}=Cook
  console.log(
   idx+1
    )
    return (
        <div>
            <div>
            <div class="overflow-x-auto">
  <table class="table">
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
    <tbody>
      {/* <!-- row 1 --> */}
      <tr class="bg-base-200 text-black">
        <th>{idx+1}</th>
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <td><button className='bg-green-400 rounded-3xl btn w-24 font-semibold'> Preparing</button></td>
      </tr>
     
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Aside;