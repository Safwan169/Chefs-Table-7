import React from 'react';
import { MdOutlinePeople } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Rectangle from './Rectangle 1.png'
function Header(props) {
    return (
        <div>
            <div className="mt-5 navbar bg-base-100">
                <div className=" navbar-start">
                    <div className="dropdown">
                        <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabindex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li>
                                <a>Recipes</a>

                            </li>
                            <li><a>About</a></li>
                            <li><a>Search</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Recipe Calories</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li>

                            <summary>Recipes</summary>


                        </li>
                        <li><a>About</a></li>
                        <li><a>Search</a></li>
                    </ul>
                </div>
                <div className="navbar-end  ">
                    <div className="mx-2 flex items-center">
                        <span className=' '>      <FaSearch className='relative left-6 right-6' /></span>

                        <input type="text" placeholder=" Search" className="input pl-6 w-24 h-6 md:w-auto" />
                    </div>
                    <div tabIndex={0} role="button" className="btn  btn-ghost btn-circle avatar">
                        <div className="   bg-green-500 rounded-full">
                            <MdOutlinePeople className='w-10 h-6 mt-2 ' />
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div className='absolute my-5 top-[250px] text-white left-1/2 -translate-x-1/2'>
                    <div className='text-center font-bold text-4xl w-[897px] mb-5'>
                        Discover an exceptional cooking <br /> class tailored for you!
                    </div>
                    <div className='text-xs w-[933px] leading-6 font-extralight text-center'>
                        Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ <br /> coding problems to become an exceptionally well world-class Programmer.
                    </div>
                    <div className='flex items-center gap-6 mt-6 justify-center '>
                        <button className='bg-green-500 p-2 hover:bg-green-600 text-white  btn rounded-3xl'>
                            Explore Now
                        </button >
                        <button className='rounded-3xl btn bg-transparent text-white hover:bg-transparent border p-2 bg-none border-white'>
                            Our Feedback
                        </button>
                    </div>
                </div>

                <img src={Rectangle} alt="" />
            </div>
        </div>
    );
}

export default Header;