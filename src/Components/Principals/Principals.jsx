// import React from 'react'
import './Principals.css'
import principals_img from '../../assets/principalsnew.png'
import { useNavigate } from 'react-router-dom';


const Principals = () => {
  const navigate = useNavigate();

  return (
    <div className="principals container">
      
      <div className='principals-box'>

        <div className="principals-left" onClick={() => navigate("/ourPrinciples")}>
          <img src={principals_img} alt="" className='principals-img'/>
          <div className="caption">
            <button className='btn' >Our Esteemed Principals
            </button>
          </div>
        </div>

        <div className="principals-right">
          <h3>Kratoos Corporation</h3>
          <h2>Your Trusted Partner in Innovation</h2>
          <p>Our core principles drive us: we value integrity, always strive for excellence, celebrate bold ideas, create opportunities, and make innovation a way of life. </p>
        </div>

      </div>

    </div>
  )
}

export default Principals
