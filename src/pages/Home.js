import React,{useState}from 'react'
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne,homeObjTwo,homeObjThree } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar'
import Services from '../components/Services';
import Sidebar from '../components/SideBar'

function Home() {
    const [isOpen,setIsOpen]=useState(false);
   
    //toggle the side bar navigation
    const toggle = () =>{
        setIsOpen(!isOpen);
    }


  return (
    <div>
        
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar isOpen={isOpen} toggle={toggle} />
        <HeroSection />
        <InfoSection  {...homeObjOne}/>
        <InfoSection  {...homeObjTwo}/>
        <Services />
        <InfoSection  {...homeObjThree}/>
        <Footer />
    </div>
  )
}

export default Home
