
import { useNavigate, useParams } from 'react-router-dom';




function Admindashboard() {
  const navigate  = useNavigate();

  const useparams = useParams("id");

  const Passed = (e) => {
    e.preventDefault();
    navigate(`/userDetails/${useparams.id}`)
  }

  const navi = (e) => {
    e.preventDefault();
    navigate(`/addusers/${useparams.id}`)
  }

  return (
    <div>
      <nav class="nav-wraper indigo">
            <div className="container">
            <div>
            <a href="/rr" className="brand-logo left">Devship</a>
            <button className='btn indigo right style' onClick={(e) => Passed (e)}>UserDetails</button>
            <button className='btn indigo right style1' onClick={(e) => navi (e)}>Adduser</button>
            </div>
        </div>
        </nav>
        <ul className="sidenav indigo" id="resposive"><br/><br/>
        <h4 className='center' style={{color : "white"}}>DevShip</h4>
        <div className='style6'>

        </div>
        </ul>
        <div className='container'>
          <div className='card'>
            <div className='card-content'>
            <h5 className='center'>Welcome to the admin page ,{useparams.id}</h5>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Admindashboard;