import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function AdminLogin() {

    const [adminname, setadminName] = useState();
    const [adminPassword, setadminPassword] = useState();

    const navigate = useNavigate();

    const Adminhandle = (e) => {
        e.preventDefault();

        const AdminData = {
            username : adminname,
            password : adminPassword
        }
        console.log(AdminData)


        axios.post("http://localhost:8000/Adminlog" , AdminData).then((data) => {
            console.log(data);
            if(data.data.username === adminname && data.data.password === adminPassword){
                alert("login success!!!");
                navigate(`/admindashboard/${data.data.username}`)
            }else{
                alert("Your Credentials not matched ! Please Check !!!")
            }
        })

        let pk = document.getElementById("Adminusername");
        pk.value = "";
        let pk1 = document.getElementById("Adminpassword");
        pk1.value = "";
    }


  return (
    <div>
        <div className='container'>
        <div className='row'>
          <div className='col s8 offset-s1'>
            <div className='card'>
              <form onSubmit={Adminhandle}>
                <h4 className='center'>Admin Login</h4><br/>
                <div className='card-content'>
                <div className="row">
                  <div className="input-field col s12">
                  <i className='material-icons prefix'>account_circle</i>
                    <input id="Adminusername" type="text" className="validate" name='username' onChange={(e) => setadminName (e.target.value)} required/>
                    <label for="Adminusername">Admin name</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                  <i className='material-icons prefix'>visibility</i>
                    <input id="Adminpassword" type="password" className="validate" name='password' onChange={(e) => setadminPassword (e.target.value)} required/>
                    <label for="Adminpassword">Admin Password</label>
                  </div>
                </div>
                </div>
                <div className='card-action center'><br/>
                  <button className='btn' type='submit'>Admin Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminLogin