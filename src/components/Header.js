import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => {
  const { firstName, lastName, jobTitle, mobile, email } = props.details;

  return (
    <div className='Header'>
      <h1 className='first-name'>{firstName}</h1>
      <h1 className='last-name'>{lastName}</h1>
      <h1 className='job-title'>{jobTitle}</h1>
      <div className='contact'>
        <FontAwesomeIcon icon='mobile' className='phone-svg icon' />
        <h5 className='mobile'>{mobile}</h5>
        <FontAwesomeIcon icon='envelope-open' className='mail-svg icon' />
        <h5 className='email'>{email}</h5>
      </div>
    </div>
  );
};

export default Header;
