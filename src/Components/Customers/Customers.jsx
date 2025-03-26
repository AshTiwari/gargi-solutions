// import React from 'react'
import './Customers.css'
import customers_img from '../../assets/customersnew.png'


const Customers = () => {
  return (
    <div className='customers container'>
      <div className='customers-box'>
        <div className="customers-left">
        <h3>Customers Lab Instrumentss</h3>
          <h2>Your Trusted Partner in Precision Engineering</h2>
          <p>At Lab Instrumentss, we are honored to serve a diverse group of esteemed customers who trust us for their mechanical instrument needs. This page showcases some of the valued clients we have had the privilege of partnering with across various industries. We take pride in contributing to their success and look forward to continuing our journey together.</p>
        </div>

        <div className="customers-right">
        <img src={customers_img} alt="" className='customers-img'/>
        <div className="caption">
            <button className='btn'>Our Valued Customers
            </button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Customers
