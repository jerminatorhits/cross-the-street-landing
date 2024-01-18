import React from 'react';

import hero from '../../public/assets/images/hero.png';
import EmailSubscription from '../email-subscription/EmailSubscription';
import { HeroOneButton } from './HeroOneButton';

const HeroHeader = () => {
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    backgroundImage: `url(${hero.src})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%', // Set the width of the div
    height: '600px', // Set the height of the div
  } as React.CSSProperties;

  const text = `Cross Safely, Learn Joyfully`;
  return (
    <div style={divStyle}>
      <HeroOneButton
        title={text}
        description="Where Virtual Reality Meets Street Smarts!"
        button={<EmailSubscription />}
      />
    </div>
  );
};

export default HeroHeader;
