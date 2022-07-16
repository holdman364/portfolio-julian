import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Julian Almada</h1>
            <p>Desings for you!</p>
        </div>
        <div className='footer-contact'>
            <h3>Contact me</h3>
            <p>And let´s get down to work.</p>
        </div>
        <div className='footer-sns'>
            <div className='desing-by'>
            Desing By Julian Alamada. ®
        </div>
        <div className='sns-links'>
            <a href='#' target='_blank'>
                <i className='fab fa-linkedin linkedin'></i>
            </a>
            <a href='#' target='_blank'>
                <i className='fab fa-facebook facebook'></i>
            </a>
            <a href='#' target='_blank'>
                <i className='fab fa-github github'></i>
            </a>
        </div>
        </div>
    </footer>
  )
}

export default Footer