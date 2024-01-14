import React from 'react';

import hero from '../../public/assets/images/hero.png';
import EmailSubscription from '../email-subscription/EmailSubscription';
import { Section } from '../layout/Section';
import { HeroOneButton } from './HeroOneButton';

const HeroHeader = () => {
  const divStyle = {
    backgroundImage: `url(${hero.src})`,
    // backgroundImage: `url(''../../public/assets/images/hero.png'')`,
    // backgroundImage: `url('https://scontent.oculuscdn.com/v/t64.5771-25/38974923_1112340630215535_8989108301212563810_n.png?_nc_cat=100&ccb=1-7&_nc_sid=93acac&_nc_ohc=U9EAUH8ETbgAX-ytKF2&_nc_ht=scontent.oculuscdn.com&oh=00_AfDTaNNqx9rVjv-MrUq9v_W2avLG1Cx_recHrTj2-OSDKw&oe=65A75A32&')`,
    // backgroundColor: 'blue',
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '100%', // Set the width of the div
    height: '450px', // Set the height of the div
  };

  const text = `Cross Safely, Learn Joyfully`;
  return (
    <div style={divStyle}>
      <Section>
        <HeroOneButton
          title={text}
          description="Where Virtual Reality Meets Street Smarts!"
          button={<EmailSubscription />}
        />
      </Section>
    </div>
  );
};

export default HeroHeader;
