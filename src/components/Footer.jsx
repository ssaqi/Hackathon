import React from 'react'
import './Footer.css'
import HouseIcon from '@mui/icons-material/House';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import Setting from '../Setting';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <>
    <br/><br/>
    <div className='footer'>
    <div> 
      <HouseIcon style={{marginLeft:"20%",color:"green"}}/>
    <p style={{fontSize: "13px", fontWeight:"700"}}>HOME</p>
    </div>
    <div> <ShoppingCartIcon style={{marginLeft:"20%"}}/>
    <p style={{fontSize: "13px", fontWeight:"700"}}><Link to="#" style={{textDecoration:"none",color:"#000"}}>Cart</Link></p>
    </div>
    
    <div><PersonIcon style={{marginLeft:"20%"}}/>
    <p style={{fontSize: "13px", fontWeight:"700"}}><Link to="/setting" style={{textDecoration:"none",color:"#000"}}>Account</Link></p>
    </div>

    </div>

    </>
  )
}

export default Footer