import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Addcart from './Addcart'
import { Add } from '@mui/icons-material'

const Header = () => {
    
    
  const [cart , setcart] = useState(false)
    return (
        <>
            <Navbar bg="white" variant="dark" style={{height: "60px",position:"sticky"}} >
                <Container>
                    <NavLink to="/" className="text-decoration-none text-dark mx-4" style={{fontWeight: "700",color:"lightgreen",fontSize: "17px"}}>SAYLANI WELFARE <br/><span style={{fontSize: "13px", color:"blue"}}>DISCOUNT STORE </span></NavLink>
                    {/* <Nav className="ms-auto">
                        <NavLink to="/" className="text-decoration-none text-dark mx-3">Home</NavLink>
                        <NavLink to="/" className="text-decoration-none text-dark">About us</NavLink>
                        <NavLink to="/" className="text-decoration-none text-dark mx-3">Grosery</NavLink>
                        <NavLink to="/" className="text-decoration-none text-dark">Meals</NavLink>
                        <NavLink to="/" className="text-decoration-none text-dark mx-3">Contact us</NavLink>
                    
                    </Nav> */}
                </Container>
              <ShoppingCartIcon onClick={()=> setcart(true)} style={{color:"Green", marginRight:"2%"}}/>
                
            </Navbar>
          {cart && <Addcart setcart={setcart} />}
        </>
    )
}

export default Header