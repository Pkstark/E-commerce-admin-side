import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';


function Catagroy() {
    const navigate = useNavigate();

    const useparams = useParams("id");

    const [userdata, setuserData] = useState([])
    
    const [productUpload, setProductUpload] = useState({
      name : "",
      prize : "",
      offerprize : "",
      photo : ""
    })

    const [name, setName] = useState({name : ""});
    const [prize, setPrize] = useState({prize : ""});
    const [offerprize, setOfferPrize] = useState({offerprize : ""});

    const onChangeEvent = (e) => {
      e.preventDefault();
  
      const pp = {
        name : name,
        prize : prize,
        offerprize : offerprize
      }
      console.log(pp)
  
      {userdata.map((datas) => {
        axios.put(`http://localhost:8000/shirtup/${datas._id}`,pp).then((data) => {
          console.log(data);
          alert("success")
          // navigate(`/catagroy/${useparams.id}`)
          getData();
        }).catch((err) => {
          console.log(err)
        })
      })}
  
      let pk = document.getElementById('dd');
      pk.value = "";
      let pk1 = document.getElementById('hh');
      pk1.value = "";
      let pk2 = document.getElementById('h');
      pk2.value = "";
    }
  
  


  const handleChange = (e) => {
    setProductUpload({...productUpload, [e.target.name] : e.target.value});
  }

  const handlePhoto = (e) => {
    setProductUpload({...productUpload, photo : e.target.files[0]});
    console.log(productUpload.photo)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name' , productUpload.name);
    formData.append('prize' , productUpload.prize);
    formData.append('offerprize' , productUpload.offerprize);
    formData.append('photo' , productUpload.photo);

    console.log(productUpload.photo);

    axios.post("http://localhost:8000/Shirts", formData)
    .then(res =>{
      console.log(res)
      alert("product added!!!")
      navigate(`/catagroy/${useparams.id}`)
    }).catch(err => {
      console.log(err);
    })

    let pk = document.getElementById('ss');
    pk.value = "";
    let pk1 = document.getElementById('ww');
    pk1.value = "";
    let pk3 = document.getElementById('ff');
    pk3.value = "";
    let pk4 = document.getElementById('w');
    pk4.value = "";
  }
  


  useEffect(() => {
    
getData();
  }, [])

const getData = () => {
  axios.get("http://localhost:8000/sdata").then((data) => {
    setuserData(data.data);
  }).catch((err) => {
    console.log(err)
  })
}
  console.log(userdata)


  const pp = (e) => {
    e.preventDefault();
    navigate(`/catagroy/${useparams.id}`)
  }

    
  const pass = (e) => {
    e.preventDefault();
    navigate(`/admindashboard/${useparams.id}`)
  }

  
  const geter = () => {
    var elems = document.querySelectorAll('.modal');
    var trigg = M.Modal.init(elems, {});
  }
  
  return (
    <div>
         <nav class="nav-wraper indigo">
        <div className="container">
          <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style1' onClick={(e) => pp(e)}>Catagroy</button>
            <button className='btn indigo right style5 modal-trigger' data-target="change" onClick={(e) => geter(e)}>CreateProduct</button>
            <button className='btn indigo right style1' onClick={(e) => pass(e)}>DashBoard</button>
          </div>
        </div>
      </nav>
      <ul className="sidenav indigo" id="resposive"><br /><br />
        <h4 className='center' style={{ color: "white" }}>DevShip</h4>
        <div className='style6'>
        </div>
      </ul>

      <div className='container'>
        <div className='row s12'>
        {userdata.map((datas) => {
          console.log(datas.photo)
                    return(<>
                    <div className='col s3'>
                      <div className='card'>
                        <div className='card-content'>
                          <img src={`http://localhost:8000/${datas.photo}`} style={{height : "200px" , width : "200px"}} alt="..."/>
                          <p>Shirt name  :&nbsp;&nbsp;&nbsp;{datas.name}</p>
                          
                          <p>Shirt prize : Rs.&nbsp;&nbsp;&nbsp;<span className='style11'>{datas.prize}</span></p>
                          <p>Offer Prize : Rs. {datas.offerprize}</p>
                        </div>
                        <div className='card-action center'>
                          <button className='btn'  onClick={()=>{
                    axios.post(`http://localhost:8000/shirtdel/${datas._id}`).then((data)=>{
                      console.log(data);
                      // navigate(`/catagroy/${useparams.id}`)
                      getData();
                    }).catch((err)=>{
                    console.log(err)
                  })}}>Remove</button>&nbsp;
                  <button className='btn modal-trigger' data-target="change1" onClick={(e) => geter(e)}>Update</button>
                        </div>
                      </div>
                      </div>
                    </>
                    )
            })}
        </div>
      </div>



      <div id="change" className="modal">
      <form onSubmit={handleSubmit} encType = "multipart/form-data" >
          <div className="modal-content">
            <h4 className='center'>Add Shirt</h4>
            <div className="row">
              <div className="input-field col s12">
                <input type="text" className="validate" id='ss' name = "name" value={productUpload.name}   onChange={handleChange} required />
                <label for="Adminpassword">Shirt Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input  type="text" className="validate" id='ww' name="prize" value={productUpload.prize}  onChange={handleChange}  required />
                <label>Shirt Prize</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input  type="text" className="validate" id='w' name="offerprize" value={productUpload.offerprize}  onChange={handleChange}  required />
                <label>Mobile offer Prize</label>
              </div>
            </div>
              <input type='file' name = 'photo' id='ff' onChange={handlePhoto} accept = ".png, .jpeg, .jpg"/>
            </div>
          <div className="modal-footer">
            <button type='submit' className='btn center'>Upload</button>
          </div>
        </form>
      </div>

          {/* product Update */}

          <div id="change1" className="modal">
              <form onSubmit={onChangeEvent} encType = "multipart/form-data" >
              <div className="modal-content">
                <h4 className='center'>Update Shirts</h4>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="text" className="validate" id='dd' name = "name" onChange={(e) => setName(e.target.value)} required />
                    <label for="Adminpassword">Shirt Name</label>
                  </div>
                </div>
    
                <div className="row">
                  <div className="input-field col s12">
                    <input  type="text" className="validate" id='hh' name="prize"   onChange={(e) => setPrize(e.target.value)}  required />
                    <label>Shirt Prize</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input  type="text" className="validate" id='h' name="offerprize"   onChange={(e) => setOfferPrize(e.target.value)}  required />
                    <label>offer Prize</label>
                  </div>
                </div>
                  {/* <input type='file' name = 'photo' id='bb' accept = ".png, .jpeg, .jpg" onChange={onClickevent}/> */}
                </div>
              <div className="modal-footer">
                <button type='submit' className='btn center'>Upload</button>
              </div>
            </form>
      </div>

    </div>
  )
}

export default Catagroy