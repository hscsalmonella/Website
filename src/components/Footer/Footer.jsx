import React from 'react'
import styled from 'styled-components'
import {faFacebook, faMailchimp, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
const Container = styled.div`
text-align: center;
position: relative;
height: 205px;
background-color: rgb(25, 27, 27);
color: white;   
`

const FooterItems = styled.div`
    color: white;
    text-decoration: none;
    font-size: 150%;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 2rem;
`
const A = styled.a`
color: white;
padding-left: 1rem;
padding-right: 1rem;
padding-bottom: 1rem;
font-size: 150%;
&:hover{
    color: rgb(158, 47, 147);
}
`

function Footer() {
  return (
    <Container>
        <div className='vertical-center'>
          <FooterItems>
          <A href="https://www.facebook.com/hsc.salmonella.gent/?fref=ts" target="_blank" rel="noreferrer" >
                <FontAwesomeIcon icon={faFacebook}/>
          </A>
          <A href="mailto:hsc.salmonella@gmail.com" target="_blank" rel="noreferrer" >
                <FontAwesomeIcon icon={faPaperPlane} />
          </A>
          <A href="https://www.instagram.com/hsc_salmonella/" target="_blank" rel="noreferrer" >
                <FontAwesomeIcon icon={faInstagram}/>  
          </A>
          </FooterItems>
          <div className='footer-items'>
            Overpoortstraat 74<br/> 9000 Gent
          </div>
          <div className='footer-items'>
            © HSC Salmonella. All rights Reserved
          </div>
        </div>
      </Container>
  )
}

export default Footer