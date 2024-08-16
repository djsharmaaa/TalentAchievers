import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import './SessionStatusbtn.css';

const SessionStatusbtn = ({ type }) => {
  const buttonConfig = {
    recorded: {
      label: 'Recorded',
      className: 'recorded-button',
    },
    live: {
      label: 'Live Class',
      className: 'live-button',
    },
    offline: {
      label: 'Offline',
      className: 'offline-button',
    },
    oneOnOne: {
      label: 'One-on-one',
      className: 'one-on-one-button',
    },
  };

  const config = buttonConfig[type];

  if (!config) return null;

  return (
    <button className={`custom-button ${config.className}`}>
     <FontAwesomeIcon icon={faCircle} style={{ fontSize: '0.5em', marginRight: '0.3rem' }}  />{config.label}
    </button>
  );
};

export default SessionStatusbtn;
