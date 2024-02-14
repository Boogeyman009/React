import React, { useState } from 'react';
import 'C:/Users/bogey/Desktop/DSA/eCommerce/node_modules/bootstrap/dist/css/bootstrap.css'


function Cart() {
  const [quant,setQuant]=useState(1);

  const quantInc=()=>{
    setQuant(preQuan=>preQuan+1)
  }
  const quantDec=()=>{
    if(quant>1)
    setQuant(preQuan=>preQuan-1)
  }

return(
  <>
    <div>
    <button className='circle text-left circle-sm' onClick={quantDec}>-</button>
    <label className="text-left" type="text" value={quant} aria-readonly>{quant} </label>
    <button className='circle text-left circle-sm' onClick={quantInc}>+</button>
    </div>
    <div>
      <button className='button button-primary' style={{marginLeft:'20px',fontSize:'25px'}} >  Add to cart</button>
    </div>
  </>

)
}

export default Cart;