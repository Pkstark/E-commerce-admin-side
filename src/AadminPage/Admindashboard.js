import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';




function Admindashboard() {

  
  const [data, setData] = useState([]);
  

  const navigate = useNavigate();

  const useparams = useParams("id");
  
  const Passed = (e) => {
    e.preventDefault();
    navigate(`/userDetails/${useparams.id}`)
  }

  const navi = (e) => {
    e.preventDefault();
    navigate(`/addusers/${useparams.id}`)
  }

  
  const pass = (e) => {
    e.preventDefault();
    navigate(`/catagroy/${useparams.id}`)
  }

  const Ship =() => {
    var elems = document.querySelectorAll('.modal');
    var trigg = M.Modal.init(elems, {});
  }
  useEffect(() => {
    getData();
  }, [])
  
let getData = () => {
  axios.get('http://localhost:8000/overdataadmin').then((data) => {
      console.log(data);
      setData(data.data);
    }).catch((err) => {
      console.log(err)
    })
}

const handleSubmit =(e) => {
  e.preventDefault();
}
  return (
    <div>
      <nav class="nav-wraper indigo">
        <div className="container">
          <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style' onClick={(e) => Passed(e)}>UserDetails</button>
            <button className='btn indigo right style1' onClick={(e) => navi(e)}>Adduser</button>
            <button className='btn indigo right style6' onClick={(e) => pass(e)}>Catagroy</button>
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
        <div className='center'>
        <h4>Welcome to Devship Admin {useparams.id}</h4>
        <label className='style9'>Our Client Order Details</label>
        </div>
        {data.map((datas) => {
                    return(<>
                    <div className='row'>
                    <div className='card '>
                      <div className='card-content col s4'>
                      <img className='style13' src={datas.photo} style={{height : "200px" , width : "200px"}} alt="..."/>
                      </div>

                      <div className='card-content col s4'>
                          <p>Client Name : &nbsp;&nbsp;{datas.username}</p>
                          <p>Product Name :&nbsp;&nbsp; {datas.name}</p>
                          <p>Product prize : Rs.&nbsp;&nbsp;&nbsp;<span className='style11'>{datas.prize}</span></p>
                          <p>Quantity : No : {datas.quantity}</p>
                          <p>Discount : {datas.discount}%</p>
                          <p>Offer Prize : Rs. {datas.offerprize}</p>
                          <p>TotalPrize : Rs. {datas.totalprize}</p>
                          <p>Address : {datas.flatno},{datas.address1},{datas.address2}</p>
                          <p>State : {datas.state} </p>
                          <p>City : {datas.city} - {datas.pincode}</p>
                          <p>Cantact number : &nbsp;&nbsp;&nbsp;{datas.mobile}</p>
                          <p> Payment Status :&nbsp;&nbsp;<span style={{color : "green"}}>{datas.paid}</span></p>
                      </div>
                      <div className='card-content col s4'>
                          <button className='btn red text-white right style10' onClick={()=>{
                    axios.post(`http://localhost:8000/overdel/${datas._id}`).then((data)=>{
                      console.log(data);
                      // navigate(`/admindashboard/${useparams.id}`)
                      getData();
                    }).catch((err)=>{
                    console.log(err)
                  })}}>Cancel</button>
                  {/* <button className=' btn green text-white right style12 modal-trigger' data-target="change" onClick={() => Ship}>Approve</button> */}
                      </div>
                      <hr/>
                      
                    </div>
                    </div>
                    </>
                    )
            })}
        </div>
      </div>
     

      {/* <div id="change" className="modal">
      <form onSubmit={handleSubmit} encType = "multipart/form-data" >
          <div className="modal-content">
            <h4 className='center'>Add Mobile</h4>
            <div className="row">
              <div className="input-field col s12">
                <input type="text" className="validate" id='ss' name = "name"required />
                <label for="Adminpassword">Delivery Date</label>
              </div>
            </div>
            </div>
          <div className="modal-footer">
            <button type='submit' className='btn center'>Upload</button>
          </div>
        </form>
      </div> */}

    </div>
  )
}

export default Admindashboard;