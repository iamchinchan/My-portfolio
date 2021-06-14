import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Hi, I am Jatin Goyal.<br />I constantly thrive to add to my skills and make a difference.
        </SectionText>
        <Button onClick={()=> window.open("https://frozen-wave-51342.herokuapp.com/about","_blank")}>Learn More</Button>
        {/* props.handleClick */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;