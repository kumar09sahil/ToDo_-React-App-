import React from 'react';

export const Footer = () => {
  const mystyle = {
    color: 'white',
    background: '#4f4747',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    padding: '10px',
    height: '50px',
    zIndex: '10',
  };

  return (
    <div className="footer text-center" style={mystyle}>
      copyright &copy; owned by sahil kumar
    </div>
  );
};
