import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';



function Admindashboard() {

  const [userdata, setuserData] = useState([])

  const useparams = useParams("id");
  console.log(useparams);
  const navigate  = useNavigate();


  useEffect(() => {
    
    axios.get("http://localhost:8000/getdata").then((data) => {
      setuserData(data.data.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])


  console.log(userdata)

  const Back = (e) => {
    e.preventDefault();
    navigate("/")
  }

  return (
    <div>
        <div className='container'>
          <button className='btn right' onClick={Back}>Back</button>
        <h4>Hello , Welcome to the Admin Page &nbsp;&nbsp;&nbsp;{useparams.id}</h4>
                  {userdata.map((datas) => {
                    return(<>
                      <div className='card'>
                        <div className='card-content'>
                          <p>Name :&nbsp;&nbsp;&nbsp;{datas.username}</p>
                          <p>Email :&nbsp;&nbsp;&nbsp;{datas.email}</p>
                          <p>Password :&nbsp;&nbsp;&nbsp;{datas.password}</p>
                        </div>
                      </div>
                    </>
                    )
                  })}
                </div>
    </div>
  )
}

export default Admindashboard;