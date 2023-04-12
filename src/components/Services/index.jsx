import React from 'react'
import Icon1 from '../../Images/svg_4.png'
import Icon2 from '../../Images/svg_5.png'
import Icon3 from '../../Images/svg_6.png'
import { 
    ServicesContainer,
    ServicesWrapper,
    ServicesCard,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesP,
} from './ServicesElements'

function Services() {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduce expences</ServicesH2>
                <ServicesP>we help reduce your fees and increase your overall revenue.</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>virtual offices</ServicesH2>
                <ServicesP>you can access our plateform online anywhere in the world.</ServicesP>
            </ServicesCard>

            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>premium Benefits</ServicesH2>
                <ServicesP> unlock our special membership card that returns 5% cash back.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
        
    
  )
}

export default Services