import {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

function ScrollTotop() {

    const{pathaname} = useLocation();
    
    useEffect(
        () =>{
        window.scrollTo(0,0);
    },
    [pathaname]);


  return null
}

export default ScrollTotop