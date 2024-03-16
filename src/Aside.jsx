import React from 'react';

const Aside = () => {
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
      <tr class="bg-base-200">
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
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