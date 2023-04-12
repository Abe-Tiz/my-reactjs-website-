import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarRout,
    SideBtnWrap,
    SidebarMenu
} from './SidebarElement'

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} >
         <Icon onClick={toggle}>
            <CloseIcon />
         </Icon>

         <SidebarWrapper>
            <SidebarMenu>
               
              <SidebarLink to="about" onClick={toggle} > About </SidebarLink>
              <SidebarLink to="discover"onClick={toggle} > Discover  </SidebarLink>
              <SidebarLink to="services" onClick={toggle} > Services </SidebarLink>
              <SidebarLink to="signup" onClick={toggle} > Sign Up </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
              <SidebarRout to="/signin">Sign In</SidebarRout>
            </SideBtnWrap>
         </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar