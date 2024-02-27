import React from "react";
import { Link } from "react-router-dom";
import {NavbarSection,Logo,LogoText,List,ListItem,Anchor} from './style.js' 
const Navbar = () => {
 
  return (
    <NavbarSection>
            
    <div className="container">
        
        <Logo>
            <LogoText>Ultra Profile</LogoText>
        </Logo>
        
        <List>
            <ListItem><Link className="anchor" to="/">Home</Link></ListItem>
            <ListItem><Anchor>Work</Anchor></ListItem>
            <ListItem><Anchor>Portfolio</Anchor></ListItem>
            <ListItem><Anchor>Resume</Anchor></ListItem>
            <ListItem><Anchor>About</Anchor></ListItem>
            <ListItem><Link className="anchor" to="/Contact">Contact</Link></ListItem>
        </List>
        
    </div>
    
</NavbarSection>
  )
 
}

export default Navbar;