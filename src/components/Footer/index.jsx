import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { 
    FooterContainer,
    FooterLinksWrapper,
    FooterLinksContainer,
    FooterWrap,
    FooterLinksItem,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialLogo,
    SocialMediaWrap,
    SocialIconLink,
    SocialIcons,
    WebsiteRight
 } from './FooterElements'
import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaLinkedin
} from 'react-icons/fa'

function Footer() {

     //scroll to top
   const toggleHome = () =>{
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinksTitle> About Us</FooterLinksTitle>
                        <FooterLink to="/">How It works</FooterLink>
                        <FooterLink to="/">Testimonials</FooterLink>
                        <FooterLink to="/">Careers</FooterLink>
                        <FooterLink to="/">Investors</FooterLink>
                        <FooterLink to="/">Terms of Services</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinksTitle> Contact Us </FooterLinksTitle>
                        <FooterLink to="/">Contact</FooterLink>
                        <FooterLink to="/">Support</FooterLink>
                        <FooterLink to="/">Destinations</FooterLink>
                        <FooterLink to="/">Sponserships</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinksItem>
                        <FooterLinksTitle> Videos</FooterLinksTitle>
                        <FooterLink to="/">Submit videos</FooterLink>
                        <FooterLink to="/">Ambassadors</FooterLink>
                        <FooterLink to="/">Agencys</FooterLink>
                        <FooterLink to="/">Influencers</FooterLink>
                    </FooterLinksItem>
                    <FooterLinksItem>
                        <FooterLinksTitle> Social Media</FooterLinksTitle>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Youtube</FooterLink>
                        <FooterLink to="/">Twitter</FooterLink>
                    </FooterLinksItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'  onClick={toggleHome}> abebe </SocialLogo>
                    <WebsiteRight>abebe &copy {new Date().getFullYear()} All rights reserved.</WebsiteRight>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blanck" aria-label="Facebook"><FaFacebook /></SocialIconLink>
                        <SocialIconLink href="/" target="_blanck" aria-label="Instagram"><FaInstagram /></SocialIconLink>
                        <SocialIconLink href="/" target="_blanck" aria-label="Youtube"><FaYoutube /></SocialIconLink>
                        <SocialIconLink href="/" target="_blanck" aria-label="Twitter"><FaTwitter /></SocialIconLink>
                        <SocialIconLink href="/" target="_blanck" aria-label="Linkedin"><FaLinkedin /></SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia> 
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer