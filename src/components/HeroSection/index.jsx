import React,{useState} from 'react';
import video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroBtnWrapper,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight
 } from './HerosElement';

function HeroSection() {
  const [hover,setHover]=useState(false);

  const onHover = ()=>{
    setHover(!hover);
  }

  return (
    <HeroContainer >
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} 
               type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy </HeroH1>
          <HeroP>
            Sign up for a new account today and reciev $250 in 
            credit towards your next payment.
          </HeroP>
          <HeroBtnWrapper id="home">
            <Button 
              to='signup'
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary='true' 
              dark='true'
              smooth={true}
              duration={500}
              spy={true}
              exact='true'
              offset={-80}
            >
              Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
       
    </HeroContainer>
  )
}

export default HeroSection