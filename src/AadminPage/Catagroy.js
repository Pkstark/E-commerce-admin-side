import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Img from '../AadminPage/Asserts/Mobilles.jpg';
import Img1 from '../AadminPage/Asserts/Shirts.jpg';
import Img2 from '../AadminPage/Asserts/shoes.jpg';

function Catagroy() {
    const navigate = useNavigate();

    const useparams = useParams("id");


    
  const pass = (e) => {
    e.preventDefault();
    navigate(`/admindashboard/${useparams.id}`)
  }

  const dd = (e) => {
    e.preventDefault();
    navigate(`/mobile/${useparams.id}`)
  }
  
  const ee = (e) => {
    e.preventDefault();
    navigate(`/shoes/${useparams.id}`)
  }
  
  const ff = (e) => {
    e.preventDefault();
    navigate(`/Shirts/${useparams.id}`)
  }
  
  return (
    <div>
         <nav class="nav-wraper indigo">
        <div className="container">
          <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style1' onClick={(e) => pass(e)}>DashBoard</button>
          </div>
        </div>
      </nav>
      <ul className="sidenav indigo" id="resposive"><br /><br />
        <h4 className='center' style={{ color: "white" }}>DevShip</h4>
        <div className='style6'>
        </div>
      </ul>

      <div class="row container">
    <div class="col s4 ">
      <div class="card">
        <div class="card-image">
          <img src={Img}/>
        </div>
        <div class="card-content center">
            <h5>New Mobiles here</h5>
        </div>
        <div class="card-action center">
          <button className='btn' onClick={dd}>View</button>
        </div>
      </div>
    </div>

    <div class="col s4 ">
      <div class="card">
        <div class="card-image">
          <img src={Img2} style = {{height : "340px"}}/>
        </div>
        <div class="card-content center">
            <h5>New Shoes here</h5>
        </div>
        <div class="card-action center">
          <button className='btn' onClick={ee}>View</button>
        </div>
      </div>
    </div>

    <div class="col s4 ">
      <div class="card">
        <div class="card-image">
          <img src={Img1} style = {{height : "340px"}}/>
        </div>
        <div class="card-content center">
            <h5>New Shirts here</h5>
        </div>
        <div class="card-action center">
          <button className='btn' onClick={ff}>View</button>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Catagroy