import { useEffect, useState } from 'react'
import Cartdis from './Cartdis'
import Cart from './Cart'

import './App.css'
import Header from './Header'
import Aside from './Aside'
import Cook from './Cook'
import Cooking from './Cooking'
import Currenly from './Currenly'
import Cal from './Cal'


// import { data } from 'autoprefixer'



function App() {
  const [cartData, setCart] = useState([])
  useEffect(() => {
    fetch('All.json')
      .then(res => res.json())
      .then(data => setCart(data))
  }, [])

  const [Cooks, setCooks] = useState([])
  // console.log(Cooks)



// Cooks.includes
  const wantBtn = (cartDataa) => {


if(Cooks.includes(cartDataa)===false){
  const newcook = [...Cooks, cartDataa]
  setCooks(newcook)
}


    else{
      alert("jhyuihuij")
    }
   
  }
  let [Cooking1,setCooking1]=useState([])

  const current=(Cook)=>{

// console.log(Cook)
const newCook=Cooks.filter((c)=>c!==Cook)
setCooks(newCook);
const lol=[...Cooking1,Cook]
setCooking1(lol)

  }

  
  return (
    <div className='lg:w-[1150px] mx-auto'>
      <Header></Header>
      <Cartdis></Cartdis>
      <div className="flex mt-16">
        <div className=' grid grid-cols-2 mb-4 border border-red-500 '>
          {
            cartData.map((cartDataa) => (<Cart cartDataa={cartDataa} wantBtn1={wantBtn} ></Cart>))
          }
        </div>
        <div className='border border-gray-950'>
          <div className='w-[500px]'>
          <Cook  cooks={Cooks} ></Cook>

          </div>
         <div className=''>
         {
            Cooks.map((Cook,idx)=><Aside Cook={Cook}  current={current} idx={idx} ></Aside>)
          }
          <div>
            <Currenly Cooking11={Cooking1}></Currenly>
          </div>
          <div>
          {
            Cooking1.map((l,idx)=><Cooking idx={idx} l={l}></Cooking>)
          }
          </div>
          <div>
            <Cal Cooking1={Cooking1}></Cal>
          </div>
         </div>
        </div>
      </div>
    </div>

  )
}

export default App
