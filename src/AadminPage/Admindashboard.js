import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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


  useEffect(() => {
    getData();
  }, [])
  
let getData = () => {
  axios.get('http://localhost:8000/adminclientdata').then((data) => {
      console.log(data);
      setData(data.data);
    }).catch((err) => {
      console.log(err)
    })
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
                      <img src={datas.photo} style={{height : "200px" , width : "200px"}} alt="..."/>
                      </div>

                      <div className='card-content col s4'>
                          <h5>Client Name : &nbsp;&nbsp;{datas.username}</h5>
                          <h5>Product Name :&nbsp;&nbsp; {datas.name}</h5>
                          <h5>Product prize : Rs.&nbsp;&nbsp;&nbsp;<span className='style11'>{datas.prize}</span></h5>
                          <h5>Offer Prize : Rs. {datas.offerprize}</h5>
                          <h5>TotalPrize : Rs. {datas.totalprize}</h5>
                          <h5> Payment Status :&nbsp;&nbsp;<span style={{color : "green"}}>{datas.paid}</span></h5>
                      </div>
                      <div className='card-content col s4'>
                          <button className='btn red text-white right style10' onClick={()=>{
                    axios.post(`http://localhost:8000/adminordercancel/${datas._id}`).then((data)=>{
                      console.log(data);
                      // navigate(`/admindashboard/${useparams.id}`)
                      getData();
                    }).catch((err)=>{
                    console.log(err)
                  })}}>Cancel</button>
                      </div>
                      <hr/>
                      
                    </div>
                    </div>
                    </>
                    )
            })}
        </div>
      </div>
     
    </div>
  )
}

export default Admindashboard;