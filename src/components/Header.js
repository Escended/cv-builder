import React, { useState } from 'react';
import InlineEditText from './InlineEditText';

const Header = () => {
  const [name, setName] = useState('First Name');
  const [lastName, setLastName] = useState('Last Name');
  const [job, setJob] = useState('Software Engineer');
  const [phone, setPhone] = useState('00000000000');
  const [email, setEmail] = useState('email@mail.co.uk');
  const [location, setLocation] = useState('London, UK');

  return (
    <div className='header section  '>
      <div className='personal-info'>
        <h1>
          <InlineEditText
            placeholder={name}
            text={name}
            onSetText={(name) => setName(name)}
          />
        </h1>
        <h1>
          <InlineEditText
            text={lastName}
            onSetText={(lastName) => setLastName(lastName)}
          />
        </h1>
        <h3>
          <InlineEditText text={job} onSetText={(job) => setJob(job)} />
        </h3>
      </div>
      <div className='contact-info'>
        <div className='shift'>
          <div>
            <InlineEditText
              text={phone}
              onSetText={(phone) => setPhone(phone)}
            />
          </div>
          <div>
            <InlineEditText
              text={email}
              onSetText={(email) => setEmail(email)}
            />
          </div>
          <div>
            <InlineEditText
              text={location}
              onSetText={(location) => setLocation(location)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
