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
      photo : "",
      availability: ""
    })

    const [name, setName] = useState({name : ""});
    const [prize, setPrize] = useState({prize : ""});
    const [offerprize, setOfferPrize] = useState({offerprize : ""});
    const [availability, setAvailability] = useState({ availability: "" });

    const onChangeEventUpdate = (e) => {
      e.preventDefault();

      const kk = {
        availability : availability
      }

      axios.put(`http://localhost:8000/shoeup/${prod}`,kk).then((data) => {
          console.log(data);
          alert("success")
          // navigate(`/catagroy/${useparams.id}`)
          getData()
        }).catch((err) => {
          console.log(err)
        })

      let pk = document.getElementById('dd');
      pk.value = "";
      let pk1 = document.getElementById('hh');
      pk1.value = "";
    }

    const onChangeEvent = (e) => {
      e.preventDefault();
  
      const pp = {
        name : name,
        prize : prize,
        offerprize:offerprize,
        availability : availability
      }
      console.log(pp)
  
      {userdata.map((datas) => {
        axios.put(`http://localhost:8000/shoeup/${datas._id}`,pp).then((data) => {
          console.log(data);
          // alert("success")
          // navigate(`/catagroy/${useparams.id}`)
          getData()
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
      let pk3 = document.getElementById('hr');
      pk3.value = "";
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
    formData.append('availability', productUpload.availability);
    
    console.log(productUpload.photo);

    axios.post("http://localhost:8000/shoe", formData)
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
    let pk4 = document.getElementById('f');
    pk4.value = "";
    let pk5 = document.getElementById('fd');
    pk5.value = "";
  }


  useEffect(() => {
    
    getData()
  }, [])


const getData = () => {
  axios.get("http://localhost:8000/shdata").then((data) => {
      setuserData(data.data);
    }).catch((err) => {
      console.log(err)
    })
}

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

  const prod = localStorage.getItem('id2')
  console.log(prod)
  
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
                          <p>Shoe name  :&nbsp;&nbsp;&nbsp;{datas.name}</p>
                          
                          <p>Shoe prize : Rs.&nbsp;&nbsp;&nbsp;<span className='style11'>{datas.prize}</span></p>
                          <p>Offer Prize : Rs. {datas.offerprize}</p><br/><hr/>
                          <div className='row'>
                            <div className='col s6'>
                            {datas.availability === true ? (<div style={{color : "green" , fontSize : "20px"}}>{datas.stock1}</div>) : (<div style={{color : "red" , fontSize : "20px"}}>{datas.stock2}</div>)}
                            </div>
                            <div className='col s6'>
                            <button className='btn left modal-trigger' data-target="change2" onClick={(e) => {
                              localStorage.setItem('id2',datas._id);
                              geter(e);
                            }}>change</button>
                            </div>
                          </div><hr/>
                        </div>
                        <div className='card-action center'>
                          <button className='btn ' onClick={()=>{
                    axios.post(`http://localhost:8000/shoedel/${datas._id}`).then((data)=>{
                      console.log(data);
                      // navigate(`/catagroy/${useparams.id}`)
                      getData()
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
            <h4 className='center'>Add Shoes</h4>
            <div className="row">
              <div className="input-field col s12">
                <input type="text" className="validate" id='ss' name = "name" value={productUpload.name}   onChange={handleChange} required />
                <label for="Adminpassword">Shoe Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input  type="text" className="validate" id='ww' name="prize" value={productUpload.prize}  onChange={handleChange}  required />
                <label>Shoe Prize</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input  type="text" className="validate" id='f' name="offerprize" value={productUpload.offerprize}  onChange={handleChange}  required />
                <label>offer Prize</label>
              </div>
            </div>

            <div className="row">
              <div className='col s6'>
              <p>
                <label>
                  <input type="checkbox" value={true} name="availability" onChange={handleChange} />
                  <span>Instock</span>
                </label>
              </p>
              </div>
              <div className='col s6'>
              <p>
                <label>
                  <input type="checkbox" value={false} name="availability" onChange={handleChange} />
                  <span>Outofstock</span>
                </label>
              </p>
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
                <h4 className='center'>Update Shoe</h4>
                <div className="row">
                  <div className="input-field col s12">
                    <input type="text" className="validate" id='dd' name = "name" onChange={(e) => setName(e.target.value)} required />
                    <label for="Adminpassword">Shoe Name</label>
                  </div>
                </div>
    
                <div className="row">
                  <div className="input-field col s12">
                    <input  type="text" className="validate" id='hh' name="prize"   onChange={(e) => setPrize(e.target.value)}  required />
                    <label>Shoe Prize</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input  type="text" className="validate" id='h' name="offerprize"   onChange={(e) => setOfferPrize(e.target.value)}  required />
                    <label>offer Prize</label>
                  </div>
                </div>

                <div className="row">
              <div className='col s6'>
              <p>
                <label>
                  <input type="checkbox" value={true} name="availability" onChange={(e) => setAvailability(e.target.value)} />
                  <span>Instock</span>
                </label>
              </p>
              </div>
              <div className='col s6'>
              <p>
                <label>
                  <input type="checkbox" value={false} name="availability" onChange={(e) => setAvailability(e.target.value)} />
                  <span>Outofstock</span>
                </label>
              </p>
              </div>
            </div>

                  {/* <input type='file' name = 'photo' id='bb' accept = ".png, .jpeg, .jpg" onChange={onClickevent}/> */}
                </div>
              <div className="modal-footer">
                <button type='submit' className='btn center'>Upload</button>
              </div>
            </form>
      </div>


      <div id="change2" className="modal">
              <form onSubmit={onChangeEventUpdate} encType = "multipart/form-data" >
              <div className="modal-content">
                <h4 className='center'>Update Shoe</h4>         
                <div className="row">
              <div className='col s6'>
              <p>
                <label>
                  <input type="checkbox" id = "dd" value={true} name="availability" onChange={(e) => setAvailability(e.target.value)} />
                  <span>Instock</span>
                </label>
              </p>
              </div>
              <div className='col s6'>
              <p>
                <label>
                  <input type="checkbox" id="hh" value={false} name="availability" onChange={(e) => setAvailability(e.target.value)} />
                  <span>Outofstock</span>
                </label>
              </p>
              </div>
            </div>
                  {/* <input type='file' name = 'photo' id='bb' accept = ".png, .jpeg, .jpg" onChange={onClickevent}/> */}
                </div>
              <div className="modal-footer">
                <button type='submit' className='btn center'>Update</button>
              </div>
            </form>
      </div>


    </div>
  )
}

export default Catagroy