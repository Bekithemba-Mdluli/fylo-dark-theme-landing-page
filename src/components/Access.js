import React from 'react'

function Access() {
  return (
    <div className='access container'>
        <div className='access__card'>
            <h1>Get early access today</h1>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any 
            questions, our support team would be happy to help you.</p>
            <div className='access__card-body'>
                <div className='access__card-body-input'>
                    <input type='text' placeholder='email@example.com' />
                </div>
                <div className='access__card-body-btn'>
                    <button>Get Started For Free</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Access