import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  max-height: 80px;
  min-height: 80px;
  @media only screen and (max-width: 768px) {
    width: 100%;
  }
  background-color: rgba(159, 43, 104, 0.08);
  border-bottom: 1px solid black;
  background-color: #222222;
`;

const Section = styled.div`
  width: 90%;
  max-height: 80px;
  max-height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 100%;
  justify-content: center;
`;


const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 50px;
  list-style: none;
  height: 100%;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  display: flex;
  &:hover {
    color: purple;
  }
  height: 100%;
  align-items: center;
  text-align: center;
`;

const ListItemPopup = styled.li`
  cursor: pointer;
  background-color:  gray;
  &:hover {
    color: purple;
  }
  padding-top: 20px;
  padding-bottom: 10px; 
  
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => (props.active ? 'purple' : 'white')};
  &:hover {
    color: purple;
  }
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  vertical-align: center;
`;

const NavLinkDrop = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: purple;
  }
  display: block;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  justify-content: center;
  vertical-align: center;
  padding-left: 10px;
  padding-right: 10px;
`

const NavLinkLogo = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: purple;
  }
  display: flex;
  font-size: 20px;
  font-weight: bold;
  height: 100%;
  text-align: center;
  align-items: center;
`

const NavbarLogoLinks = styled.h1`
  color: #6B047F;
  font-size:  40px;
`

const NavbarLogoRechts = styled.h1`
  color: #366636;
  font-size:  40px;
  padding-left: 10px;
`

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color:  gray;
  border: 3px solid black;
  z-index:1;
  padding-bottom: 10px;
  top: 4px;
  
`

const DropDownLi = styled.div`
  height: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-top: 30px;
  &:hover {
    background-color:  #222222;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`

const DropDownbtn = styled.div`
  text-decoration: none;
  color: white;
  &:hover {
    color: purple;
  }
  display: flex;
  font-size: 20px;
  height: 100%;
  font-weight: bold;
  padding-top: 2px;
`

function Navbar() {
  return (
    <Container>
      <Section>
        <NavLinkLogo to={'/'}>
          <NavbarLogoLinks>HSC </NavbarLogoLinks>
          <NavbarLogoRechts> Salmonella</NavbarLogoRechts>
        </NavLinkLogo>

        <Links>
          <List>
            <ListItem>
              <NavLink to={'/'} activeClassName="active">Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={'/Info'} activeClassName="active">Info</NavLink>
            </ListItem>
            <DropDownLi>
              <DropDownbtn>
                Praesidium
              </DropDownbtn>
              <DropDownContent>
                {" "}
                <ListItemPopup>
                  <NavLinkDrop to={'/Praesidium'} activeClassName="active">Praesidium</NavLinkDrop>
                </ListItemPopup>
                <ListItemPopup>
                  <NavLinkDrop to={'/Pro-Praesidia'} activeClassName="active">Pro-Praesidia</NavLinkDrop>
                </ListItemPopup>
              </DropDownContent>
            </DropDownLi>
            <ListItem>
              <NavLink to={'/Kalender'} activeClassName="active">Kalender</NavLink>
            </ListItem>
            {/*<ListItem>
              <NavLink to={'/Vacatures'} activeClassName="active">Vacatures</NavLink>
  </ListItem>*/}
            <ListItem>
              <NavLink to={'/Sponsors'} activeClassName="active">Sponsors</NavLink>
            </ListItem>
            
          </List>
        </Links>
      </Section>
    </Container>
  )
}

export default Navbar;
