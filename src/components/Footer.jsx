import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer_section">
          <ul className="footer_ul">
              <li>+44 7462046189</li>
              <hr />
              <li>favourekengwu@gmail.com</li>
          </ul>
        </div>
        <div className='text-center p-3'>
          © 2023 Copyright: 
          <a className='text-white text-decoration-none' href='https://FavourEkengwu.com/'> Favour Ekengwu</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;