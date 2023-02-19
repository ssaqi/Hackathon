import React from 'react'
import Slider from './Slider'
import './Main.css'
import Shop from './Shop'
import IMG1 from './assest/beef.jpg'
import IMG2 from './assest/champa.jpg'
import IMG3 from './assest/furits.jpg'
import IMG4 from './assest/rashan.jpg'
import { useState } from 'react'
import Footer from './Footer'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function AdminMain() {
    const history = useNavigate();
    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/Admin");
    }


  const Addpop = () =>{

      alert("your Product is Add in cart")
  }
  return (
    <>
    <div className='container'>
        <br/>
<AccountCircleIcon style={{float: "left", width: "100px", height: "50px"}}/>
<h3>Muhammad Saqib <br /> <span style={{fontSize: "18px"}}>Admin</span></h3>
<Button onClick={userlogout} style={{float:"right", backgroundColor: "green"}}>LogOut</Button>
</div>

   <br/><br/>
   <hr/>
    <div className="container">
      
      <br></br>
      <br></br>
<br></br>
<br></br>
<h3>Products</h3>

<div className="card mb-3" style={{ maxWidth: 1300 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={IMG1} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Beef</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">10.00 PKR - Per kg</small>
        </p>
        <button style={{float:'right' , marginTop: "-10%",
         backgroundColor: "green", border:"none",
         width:"100px",height:"50px",borderRadius:"10px",color: "#fff"}} onClick={Addpop}>+</button>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3" style={{ maxWidth: 1300 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={IMG2} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Mutton</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">8.00 PKR -Per kg</small>
        </p>
        <button style={{float:'right' , marginTop: "-10%",
         backgroundColor: "green", border:"none",
         width:"100px",height:"50px",borderRadius:"10px",color: "#fff"}} onClick={Addpop}>+</button>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3" style={{ maxWidth: 1300 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={IMG3} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Fresh Fruits</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">500 PKR - Per kg</small>
        </p>
        <button style={{float:'right' , marginTop: "-10%",
         backgroundColor: "green", border:"none",
         width:"100px",height:"50px",borderRadius:"10px",color: "#fff"}} onClick={Addpop}>+</button>
      </div>
    </div>
  </div>
</div>


<div className="card mb-3" style={{ maxWidth: 1300 }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={IMG4} className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Grosery (Pakages)</h5>
        <p className="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
        <p className="card-text">
          <small className="text-muted">2500 PKR Per (Bag)</small>
        </p>
        <button style={{float:'right' , marginTop: "-10%",
         backgroundColor: "green", border:"none",
         width:"100px",height:"50px",borderRadius:"10px",color: "#fff"}} onClick={Addpop}>+</button>
      </div>
    </div>
  </div>
</div>
<Footer/>

   </div>
    </>
  )
}

export default AdminMain