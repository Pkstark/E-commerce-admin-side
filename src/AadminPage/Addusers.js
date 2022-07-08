import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Addusers() {
    
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    const [confrimPassword, setConfrimPassword] = useState();
    const [isError, setIsError] = useState()

    const navigate  = useNavigate();
    const useparams = useParams("id")

    const passed = (e) => {
        e.preventDefault();
        navigate(`/admindashboard/${useparams.id}`)
    }
    const handlesubmit = (e) => {
        e.preventDefault();

        const Details = {
            username : username,
            email : email,
            password : password
          }

          
    axios.post("http://localhost:8000/adduser", Details).then((data) => {
        console.log(data);
        if (data.data.error){
          alert(data.data.error)
        }else{
          navigate(`/admindashboard/${useparams.id}`);
          alert("registered successfully")
        }
      }).catch((err) => {
        console.log(err)
        alert("something went to wrong")
      })
  
  
      let pk = document.getElementById('username');
      pk.value = "";
      let pk1 = document.getElementById('email');
      pk1.value = "";
      let pk2 = document.getElementById('password');
      pk2.value = "";
      let pk3 = document.getElementById('confpassword');
      pk3.value = "";

    }

    

      

    const checkValidate = (e) => {
        const confPassword = e.target.value;
        setConfrimPassword(confPassword);
        if(password !== confPassword){
          setIsError("Password Should be Match ! So Please Check!!!");
        }else{
          setIsError("");
        }
      }
  return (
    <div>
        <nav class="nav-wraper indigo">
            <div className="container">
            <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style' onClick={passed}>Dashboard</button>
            </div>
        </div>
        </nav>
        <ul className="sidenav indigo" id="resposive"><br/><br/>
        <h4 className='center' style={{color : "white"}}>DevShip</h4>
        <div className='style6'>

        </div>
        </ul>

        <div className='container'>
        <div className='row'>
          <div className='col s8 offset-s1'>
            <div className='card'>
              <form onSubmit={handlesubmit}>
                <h4 className='center'>Add User</h4>
                <div className='card-content'>
                <div className="row">
                  <div className="input-field col s12">
                  <i className='material-icons prefix'>account_circle</i>
                    <input id="username" type="text" className="validate" required name='username' onChange={(e) => setUsername(e.target.value)}/>
                    <label for="username">Username</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                  <i className='material-icons prefix'>email</i>
                    <input id="email" type="text" className="validate" required name='email' onChange={(e) => setEmail(e.target.value)}/>
                    <label for="email">Email</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <i className='material-icons prefix'>visibility</i>
                    <input id="password" type="password" className="validate" required name='password' onChange={(e) => setPassword(e.target.value)} />
                    <label for="password">Password</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <i className='material-icons prefix'>visibility</i>
                    <input id="confpassword" type="password" className="validate" required name='confpassword' onChange={(e) => checkValidate(e)} />
                    <label for="confpassword">ConfrimPassword</label>
                  </div>
                </div>
                  <div className='center' style={{color : "red", fontsize : "20px"}}>{isError}</div>
                </div>
                <div className='card-action center'>
                  <button className='btn' type='submit'>Addusers</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Addusers