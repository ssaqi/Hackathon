import React from 'react'
import './CardItem.css'
import blutoot from './assest/champa.jpg'
import { Close } from '@mui/icons-material'
const CardItem = () => {
  
const [count, setCount]=useState(0)

const Add = () =>{
     setCount(count +1)

}

const Min = () =>{
    setCount(count - 1)

}
  return (
    <>
    <div className='CardItem-main'>
        <div className="card-items">
            <div className="img-container-card"><img src={blutoot} className='img-container'/></div>
            <div className="card-detailed">
                <span className="product-card">Product name</span>
                <Close id="cloed-icon"/>
                   <div className='Av'> 
                <button className='btn' onClick={Add}>+</button>
                <h6 style={{margin:"5px"}}>{count}</h6>
                <button className='btn' onClick={Min}>-</button>
                </div> 
            </div>
        </div>   
    </div>
      
            </>
    
  )
}

export default CardItem
