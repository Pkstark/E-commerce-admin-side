import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function UserDetails() {
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
    navigate(`/admindashboard/${useparams.id}`)
  }




  return (
    <div>
        <nav class="nav-wraper indigo">
            <div className="container">
            <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style' onClick={Back}>Dashboard</button>
            </div>
        </div>
        </nav>
        <ul className="sidenav indigo" id="resposive"><br/><br/>
        <h4 className='center' style={{color : "white"}}>DevShip</h4>
        <div className='style6'>

        </div>
        </ul>
        <div className='container' >
        <h4>Hello , Welcome to the Admin Page &nbsp;&nbsp;&nbsp;{useparams.id}</h4>
                  {userdata.map((datas) => {
                    return(<>
                      <div className='card'>
                        <div className='card-content'>
                          <p>Name :&nbsp;&nbsp;&nbsp;{datas.username}</p>
                          <button className='btn right danger style3' onClick={() => {
                            const ids = {
                              username : datas.username
                            }

                            axios.post("http://localhost:8000/deluser" ,ids).then((data)=>{
                              console.log(data);
                              navigate(`/admindashboard/${useparams.id}`);
                            }).catch((err) => {
                              console.log(err)
                            })
                          }}>Delete</button>
                          <p>Email :&nbsp;&nbsp;&nbsp;{datas.email}</p>
                        </div>
                      </div>
                    </>
                    )
                  })}
                </div>
                
    </div>
  )
}

export default UserDetails