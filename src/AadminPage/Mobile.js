import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import M from 'materialize-css/dist/js/materialize.min.js';


function Catagroy() {
    const navigate = useNavigate();

    const useparams = useParams("id");

    const [userdata, setuserData] = useState([])
    const [productname, setproductname] = useState(null);
  const [productprize, setproductprize] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();

    const Details = {
      mobilename : productname,
      mobileprize : productprize
    }
    console.log(Details);

    //axios

    axios.post("http://localhost:8000/mobile", Details).then((data) => {
      console.log(data);
      if (data.data.error){
        alert(data.data.error)
      }else{
        navigate(`/catagroy/${useparams.id}`)
      }
    }).catch((err) => {
      console.log(err)
      alert("something went to wrong")
    })


    let pk = document.getElementById('aa');
    pk.value = "";
    let pk1 = document.getElementById('bb');
    pk1.value = "";

  }




  useEffect(() => {
    
    axios.get("http://localhost:8000/mobdata").then((data) => {
      setuserData(data.data.data);
    }).catch((err) => {
      console.log(err)
    })
  }, [])


  console.log(userdata)




    
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
                    return(<>
                    <div className='col s3'>
                      <div className='card'>
                        <div className='card-content'>
                          <p>Product name  :&nbsp;&nbsp;&nbsp;{datas.mobilename}</p>
                          
                          <p>product prize :&nbsp;&nbsp;&nbsp;{datas.mobileprize}</p>
                        </div>
                      </div>
                      </div>
                    </>
                    )
            })}
        </div>
      </div>


      <div id="change" className="modal">
        <form onSubmit={handleSubmit}>
          <div className="modal-content">
            <h4 className='center'>Add Product</h4>
            <div className="row">
              <div className="input-field col s12">
                <input type="text" className="validate" name = "productName" id='aa' onChange={(e) => setproductname (e.target.value)} required />
                <label for="Adminpassword">Product Name</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input  type="text" className="validate" name="productPrize" id='bb' onChange={(e) => setproductprize (e.target.value)}  required />
                <label for="Adminpassword">Product Prize</label>
              </div>
            </div>
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