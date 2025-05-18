import { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/vijay.jpg'
import user2 from '../../assets/angela.jpg'
import user3 from '../../assets/sagar.png'



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
                    <h3>Vijay Kadam, Operations Manager</h3>
                    <span>Tradedge Consistent Services, Thane</span>
                  </div>
                </div>
                <p>&quot; We at Tradedge Consistent Services are extremely grateful for the outstanding support and expertise that the team from Kratoos Corp has brought to our team. His deep knowledge and skill in the quantitative finance industry have made a significant impact on our projects.  </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user2} alt=""/>
                  <div>
                    <h3>Angela Chouinard</h3>
                    <span>TechPrecision Ltd, USA</span>
                  </div>
                </div>
                <p>&quot; Working with Kratoos has been a fantastic experience! As a business based in the USA, I needed content that resonates with a diverse audience, and Kratoos truly understood my requirements. They took the time to recognize the cultural nuances and preferences specific to my target market, delivering content that feels authentic and impactful. </p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user3} alt=""/>
                  <div>
                    <h3>Sagar Gupta </h3>
                    <span>Mumbai</span>
                  </div>
                </div>
                <p>&quot; Working with Priyanka was a game-changer. Their strategy, creativity, and consistency helped me grow my online presence and connect with the right audience. Truly grateful for their support! </p>
              </div>
            </li>
            {/* <li>
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
            </li> */}
          </ul>
        </div>
      </div>
    </div>
      
  )
}
import './Testimonials.css'

export default Testimonials
