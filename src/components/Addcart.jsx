import { AddShoppingCart, Clear } from '@mui/icons-material'
import { Button } from '@mui/material'
import React from 'react'
import './Card.css'
import CardItem from './cardItem'
const Addcart = ({setcart}) => {
  return (
    <div className='card-main'>
      <div className="opacity-layer"></div>
      <div className="cart-main">
        <div className="header">
          <span className="heading">Shopping Cart</span>
          <span className="closed-btn" onClick={()=>setcart(false)}>
            <Clear style={{fontSize:'30px',border:' 2px solid' , padding:'3px'}}/>
            <span className="closed-text">Closed</span>
          </span>
        </div>
        {/* <div className="empty-card">
          <AddShoppingCart style={{fontSize:'120px',opacity:'0.4',color:'#990011FF'}}/>
          <span className="empt-span">no product in the cart..</span>
          <Button id="button-empt" >RETURN TO SHOP</Button>
        </div> */}
        <>
        <div style={{height:'75vh',width: '100%',overflow:' auto',padding: '5px 0px'}}>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        <CardItem/>
        </div>
        <center>
        <div>
        <div className='line'></div>
        <br/>
        <input type="text" placeholder='name' style={{width:"300px"}}/>
            <input type="text" placeholder='Email' style={{width:"300px"}}/>
            <input type="text" placeholder='Contact no' style={{width:"300px"}}/>
            <input type="text" placeholder='Order Address' style={{width:"300px"}}/>
        </div>
        </center>
    
        </>
      </div>
    </div>
  )
}

export default Addcart