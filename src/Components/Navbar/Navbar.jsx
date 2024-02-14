import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './Navbar.css'
import Cart from './Cart';


const Navbar = () => {
  let hoody='https://www.redwolf.in/image/cache/catalog/hoodies/dbz-warrior-kanji-hoodie-india-600x800.jpg?m=1703660824';
  let hoody2="https://www.redwolf.in/image/cache/catalog/hoodies/dbz-warrior-kanji-hoodie-india-back-600x800.jpg?m=1694694278";
  let price="Rs. 1099"

  const[menu,setMenu]=useState('')
  // const[Color,setColor]=useState({
  //   xS: 'lightblue',
  //   S: 'lightblue',
  //   M: 'lightblue',
  //   L: 'lightblue',
  //   XL: 'lightblue',
  //   XXL: 'lightblue',
  // });
  const [color,setColor]=useState(null);
  const [testDisplay,setTextDisplay]=useState('')

  const toggleColor=(size,txt)=>{
    if(color===size){
      setColor(null)
      setTextDisplay('')
    }
    else{
    setColor(size)
    setTextDisplay(txt)
    }
  }
  
  // const darkColor = (size) => {
  //   const currColor = Color[size];
  //   const updateColor = currColor === 'lightblue' ? 'darkblue' : 'lightblue';
  //   const updatedColors = { ...Color, [size]: updateColor };
  //   setColor(updatedColors);
  // };

  
  return (
    <>
    <div className='container container-fluid col'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand bold" href="#">SHOPP_ME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" onClick={()=>setMenu("shop")}>Shop{menu==="shop" ?<hr/>:<></>}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  onClick={()=>setMenu("men")}>Men{menu==="men" ?<hr/>:<></>}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"onClick={()=>setMenu("women")}>Women{menu==="women" ?<hr/>:<></>}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"onClick={()=>setMenu("kids")}>Kids{menu==="kids" ?<hr/>:<></>}</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<div class="container" >
  <hr className='bold'></hr>
    <div class='row'>
      <h2 className='text-left bold'>WARRIOR KANJI - HOODIE</h2>
    </div>
    <div className='row'>
      <div className='col-3'>
          <img src={hoody} className='img-fluid'></img>
      </div>
      <div className='col-3'>
      <img src={hoody2} className='img-fluid' ></img>
      </div>
      <div className='col'>
        <p className='text-left bold-text bold-12'>REDWOLF PREMIUM HOODIE</p>
        <p>The artwork will be screen printed to perfection on a premium Redwolf branded brushed fleece hoodie featuring kangaroo pockets, drawstrings and a hood.</p>
        <p className='text '>This product is eligible for return under our easy 15 day return policy. No questions asked.</p>
        <p className='link text-left'>View More Detail</p>
        <p><hr /></p>
        <p className='bold-text bold-12 text-left price mb'>{price}</p>
        <p className='text-left m'>(Incl of GST)</p>
        {testDisplay && <p className='text-left'>Click to Select Size: {testDisplay}</p>}
        <p className='text-left'>
        <button className='square' style={{ backgroundColor: color==='xS'?'Cyan' : 'lightblue' }} onClick={()=>toggleColor('xS','ExtraSmall')}>xS</button>
        <button className='square' style={{ backgroundColor: color==='S'?'Cyan' : 'lightblue' }} onClick={()=>toggleColor('S','Small')}>S</button>
        <button className='square' style={{ backgroundColor: color==='M'?'Cyan' : 'lightblue' }} onClick={()=>toggleColor('M','Medium')}>M</button>
        <button className='square' style={{ backgroundColor: color==='L'?'Cyan' : 'lightblue' }} onClick={()=>toggleColor('L','Large')}>L</button>
        <button className='square' style={{ backgroundColor: color==='XL'?'Cyan' : 'lightblue' }} onClick={()=>toggleColor('XL','Xtra large')}>XL</button>
        <button className='square' style={{ backgroundColor: color==='XXL'?'Cyan' : 'lightblue' }} onClick={()=>toggleColor('XXL','Xtra xtra large')}>XXL</button>
        </p>
        <p className='text-left count'><Cart/></p>
        
      </div>
    </div>
</div>
</div>
</>
    
  )
}

export default Navbar






///<button className='square' style={{ backgroundColor: Color.xS }} onClick={()=>darkColor('xS')}>xS</button>
