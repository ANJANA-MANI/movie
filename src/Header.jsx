
import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit'
function Header() {
  return (
   
<>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
           
            <img
              src='YUM3.gif'
              height='65'
              width='95'
              alt=''
              loading='lazy'
            /> <h4 style={{fontFamily:'Mystery Quest',fontSize:"40px",color:'#BA4A00'}}>Filmy</h4>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>


    
  )
}

export default Header