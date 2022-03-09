import React from 'react'

import arrow from '../images/icon-arrow.svg';
import productive from '../images/illustration-stay-productive.png';

function Productive() {
  return (
    <div className='productive container'>
        <div className='productive__image'>
          <img src={productive} alt="Stay productive" />
        </div>

        <div className='productive__text'>
            <h4>Stay productive, wherever you are</h4>
            <div className='productive__text-p'>
              <p>Never let location be an issue when accessing your files. Fylo has you <br className='hide-for-mobile'/> covered for all of your file 
              storage needs.</p>
              <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email 
              attachments required.</p>
            </div>
            <div className='bruh'>
              <a href='/'>See how Fylo works <img src={arrow} alt='Arrow' /></a>
            </div>
        </div>
    </div>
  )
}

export default Productive