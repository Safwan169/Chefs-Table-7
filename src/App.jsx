import { useEffect, useState } from 'react'
import Cartdis from './Cartdis'
import Cart from './Cart'

import './App.css'
import Header from './Header'
import Aside from './Aside'
import Cook from './Cook'

// import { data } from 'autoprefixer'



function App() {
  const [cartData, setCart] = useState([])
  useEffect(() => {
    fetch('All.json')
      .then(res => res.json())
      .then(data => setCart(data))
  }, [])

  const [Cooks, setCooks] = useState([])
  console.log(Cooks)
// Cooks.includes
  const wantBtn = (cartDataa) => {


if(Cooks.includes(cartDataa)===false){
  const newcook = [...Cooks, cartDataa]
  setCooks(newcook)
}
//  if (Cooks.filter(recipe_id)!==recipe_id) {
//   const newcook = [...Cooks, recipe_id]
//       setCooks(newcook)
//   console.log('654654')
//  }

    // if (!Cooks.find(recipe_id) ){
     
      
    //   console.log('sdughfudgf')
    // }
    // else{
    //   console.log('sdughfudgf')
    
    // }

    else{
      alert("jhyuihuij")
    }
    // console.log(Cook)
    // return ("aisa")
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
            Cooks.map((Cook,idx)=><Aside Cook={Cook} idx={idx} ></Aside>)
          }
         </div>
        </div>
      </div>
    </div>

  )
}

export default App
