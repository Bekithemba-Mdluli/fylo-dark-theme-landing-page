import React from 'react'

import phone from '../images/icon-access-anywhere.svg';
import shield from '../images/icon-security.svg';
import check from '../images/icon-collaboration.svg';
import anytype from '../images/icon-any-file.svg'

function Features() {
  return (
    <div className='feature container'>
        <div className='feature__card'>
            <div className='feature__card-header'>
                <img src={phone} alt='Mobile devices' />
            </div>
            <div className='feature__card-body'>
                <h3>Access your files, anywhere</h3>
                <p>The ability to use your smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
        </div>

        <div className='feature__card'>
            <div className='feature__card-header'>
                <img src={shield} alt='security' />
            </div>
            <div className='feature__card-body'>
                <h3>Security you can trust</h3>
                <p>2-factor authentication and user-controlled encryption are just a couple of the security 
                features we allow to help secure your files.</p>
            </div>
        </div>

        <div className='feature__card'>
            <div className='feature__card-header'>
                <img src={check} alt='Collaboration' />
            </div>
            <div className='feature__card-body'>
                <h3>Real-time collaboration</h3>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. 
                No email attachments required.</p>
            </div>
        </div>

        <div className='feature__card'>
            <div className='feature__card-header'>
                <img src={anytype} alt='Store any file' />
            </div>
            <div className='feature__card-body'>
                <h3>Store any type of file</h3>
                <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all 
                file types to be securely stored and shared.</p>
            </div>
        </div>
    </div>
  )
}

export default Features