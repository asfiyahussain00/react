

import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'black',
    color: 'white', 
    border: '2px solid #ccc',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
  };

  const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div>&copy; Shopping-mart. All Rights Reserved</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, repudiandae?</div>
      </div>
    </footer>
  );
};

export default Footer;
