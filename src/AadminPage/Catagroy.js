import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Img from '../AadminPage/Asserts/Mobilles.jpg';
import Img1 from '../AadminPage/Asserts/Shirts.jpg';
import Img2 from '../AadminPage/Asserts/shoes.jpg';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';

function Catagroy() {
    const navigate = useNavigate();

    const useparams = useParams("id");

    // const [productUpload, setProductUpload] = useState({
    //   name : "",
    //   prize : "",
    //   photo : ""
    // })
    


    
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

  
  const gets = () => {
    var elems = document.querySelectorAll('.modal');
    var trigg = M.Modal.init(elems, {});
  }

  // const handleChange = (e) => {
  //   setProductUpload({...productUpload, [e.target.name] : e.target.value});
  // }

  // const handlePhoto = (e) => {
  //   setProductUpload({...productUpload, photo : e.target.files[0]});
  //   console.log(productUpload.photo)
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();

  //   formData.append('name' , productUpload.name);
  //   formData.append('prize' , productUpload.prize);
  //   formData.append('photo' , productUpload.photo);

  //   console.log(productUpload.photo);

  //   axios.post("http://localhost:8000/productupload", formData)
  //   .then(res =>{
  //     console.log(res)
  //     alert("product added!!!")
  //   }).catch(err => {
  //     console.log(err);
  //   })

  //   let pk = document.getElementById('ss');
  //   pk.value = "";
  //   let pk1 = document.getElementById('ww');
  //   pk1.value = "";
  //   let pk3 = document.getElementById('ff');
  //   pk3.value = "";
  // }
  
  
  return (
    <div>
         <nav class="nav-wraper indigo">
        <div className="container">
          <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style1' onClick={(e) => pass(e)}>DashBoard</button>
            {/* <button className='btn indigo right style1 modal-trigger' data-target="change" onClick={(e) => gets(e)}>Create</button> */}
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

  {/* <div id="change" className="modal">
        <form onSubmit={handleSubmit} encType = "multipart/form-data" >
          <div className="modal-content">
            <h4 className='center'>Add Product</h4>
            <div className="row">
              <div className="input-field col s12">
                <input type="text" className="validate" id='ss' name = "name" value={productUpload.name}   onChange={handleChange} required />
                <label for="Adminpassword">Product Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input  type="text" className="validate" id='ww' name="prize" value={productUpload.prize}  onChange={handleChange}  required />
                <label>Product Prize</label>
              </div>
            </div>
              <input type='file' name = 'photo' id='ff' onChange={handlePhoto} accept = ".png, .jpeg, .jpg"/>
            </div>
          <div className="modal-footer">
            <button type='submit' className='btn center'>Upload</button>
          </div>
        </form>
      </div> */}
    </div>
  )
}

export default Catagroy