import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="text-center footer_section">
          <div className="footer_text">Greenwich, London   |   ( +44 )  7462 046 189   |   <a className='text-white text-decoration-none' href="mailto:favourekengwu@gmail.com?subject=my email address" whileHover={{scale: 1.3, textShadow: "0px 0px 20px rgb(221, 195, 239)"}}>favourekengwu@gmail.com</a></div>
        </div>
        <div className='text-center p-2'>
          © 2023 Copyright: 
          <a className='text-white text-decoration-none' href="mailto:favourekengwu@gmail.com?subject=my email address" whileHover={{scale: 1.3, textShadow: "0px 0px 20px rgb(221, 195, 239)"}}> Favour Ekengwu</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;