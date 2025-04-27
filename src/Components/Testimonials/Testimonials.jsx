import { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'


const Testimonials = () => {

  const slider = useRef();
  let tx = 0;
  
const slideForward = ()=>{
  if(tx > -50){
    tx -= 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
}
const slideBackward = ()=>{
  if(tx < 0){
    tx += 25;
  }
  slider.current.style.transform = `translateX(${tx}%)`
}

  return (
    <div className="testimonials container">
      <div className='testimonials-box'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt=""/>
                  <div>
                    <h3>Anil Sharma, Operations Manager</h3>
                    <span>TechPrecision Ltd, Berlin</span>
                  </div>
                </div>
                <p>&quot;Working with Kratoos corporation has been a game-changer for our operations. Their mechanical instruments are unmatched in quality, and their attention to our specific needs made the entire purchasing process effortless. </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt=""/>
                  <div>
                    <h3>Anil Sharma, Operations Manager</h3>
                    <span>TechPrecision Ltd, Berlin</span>
                  </div>
                </div>
                <p>&quot;Working with Kratoos corporation has been a game-changer for our operations. Their mechanical instruments are unmatched in quality, and their attention to our specific needs made the entire purchasing process effortless. </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt=""/>
                  <div>
                    <h3>Anil Sharma, Operations Manager</h3>
                    <span>TechPrecision Ltd, Berlin</span>
                  </div>
                </div>
                <p>&quot;Working with Kratoos corporation has been a game-changer for our operations. Their mechanical instruments are unmatched in quality, and their attention to our specific needs made the entire purchasing process effortless. </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user1} alt=""/>
                  <div>
                    <h3>Anil Sharma, Operations Manager</h3>
                    <span>TechPrecision Ltd, Berlin</span>
                  </div>
                </div>
                <p>&quot;Working with Kratoos corporation has been a game-changer for our operations. Their mechanical instruments are unmatched in quality, and their attention to our specific needs made the entire purchasing process effortless. </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
      
  )
}
import './Testimonials.css'

export default Testimonials
