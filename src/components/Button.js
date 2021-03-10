import React, { useState } from 'react';

const Button = ({ text, onClick, color }) => {
  const styles = {
    backgroundColor: color,
  };

  return (
    <button style={styles} onClick={onClick} className='btn'>
      {text}
    </button>
  );
};

export default Button;
