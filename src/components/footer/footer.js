import React from 'react';
import './footer.scss';

const currentDate = new Date();
const Footer = () => (
  <footer className='region'>
    <div>&copy;{ currentDate.getFullYear() } Stackline</div>
    <div>Icons made by <a href='https://www.flaticon.com/authors/freepik'>Freepik</a> from <a href='https://www.flaticon.com/'>www.flaticon.com</a></div>
  </footer>
);

export default Footer;
