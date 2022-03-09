import React from 'react'

import avatar1 from '../images/profile-1.jpg'
import avatar2 from '../images/profile-2.jpg'
import avatar3 from '../images/profile-3.jpg'
// import colon from '../images'

function Users() {
  return (
    <div className='users container'>
        {/* <div>
            <img src={} alt='quote' />
        </div> */}
        <div className='users__card c'>
            <div className='users__card-text'>
                <p>  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                become a well-oiled collaboration machine.</p>
            </div>
            
            <div className='users__card-body'>
                <div className='users__card-body-img'>
                    <img src={avatar1} alt='Statish Patel' />
                </div>

                <div className='users__card-body-desc'>
                    <p>Statish Patel</p>
                    <p>Founder &amp; CEO, Huddle</p>
                </div>
            </div>
        </div>

        <div className='users__card'>
            <div className='users__card-text'>
                <p>  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                become a well-oiled collaboration machine.</p>
            </div>
            
            <div className='users__card-body'>
                <div className='users__card-body-img'>
                    <img src={avatar2} alt='Statish Patel' />
                </div>

                <div className='users__card-body-desc'>
                    <p>Statish Patel</p>
                    <p>Founder &amp; CEO, Huddle</p>
                </div>
            </div>
        </div>

        <div className='users__card'>
            <div className='users__card-text'>
                <p>  Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has 
                become a well-oiled collaboration machine.</p>
            </div>
            
            <div className='users__card-body'>
                <div className='users__card-body-img'>
                    <img src={avatar3} alt='Statish Patel' />
                </div>

                <div className='users__card-body-desc'>
                    <p>Statish Patel</p>
                    <p>Founder &amp; CEO, Huddle</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users