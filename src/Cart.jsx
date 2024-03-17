import React from 'react';
import Rectangle from './Rectangle 1.png'
import { list } from 'postcss';
import { CiAlarmOn } from "react-icons/ci";
import { BsFire } from "react-icons/bs";

const Cart = ({cartDataa,wantBtn1 }) => {
    const {recipe_image,recipe_name,short_description,ingredients,preparing_time,calories,recipe_id}=cartDataa
    return (
        // console.log(Cart)
   <div className='flex flex-col justify-between shadow-2xl  mr-5 p-5 mb-6 '>
         <div className='flex flex-col gap-4  '>
            <img className='w-[300px] bg-cover rounded-xl h-[200px]' src={recipe_image} alt="" />
            <p className='text-3xl font-bold'>{recipe_name}</p>
            <p className='w-[280px] text-gray-400'>{short_description}</p>
            <p className='text-xl font-semibold'>Ingredients: {ingredients.length} </p>
            <p className='text-gray-400'>
                {
                    ingredients.map((indata,idx)=><li>{indata}</li>)
                }
                </p>
        </div>
      <div className='mt-4'>
      <p className='text-gray-500 font-normal flex gap-9 '><span className='flex items-center gap-2'><CiAlarmOn className=' text-black' />{preparing_time}</span> <span className='flex items-center gap-2'><BsFire />{calories}</span></p>

<button onClick={()=>wantBtn1(cartDataa)} className='btn w-[170px] bg-green-400 text-[18px] font-bold p-2 mt-5 rounded-3xl'>Want to cook</button>

      </div>
   </div>
    );
};

export default Cart;