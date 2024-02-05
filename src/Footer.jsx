import React, { useState } from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBRipple
  } from 'mdb-react-ui-kit';
import { click } from '@testing-library/user-event/dist/click';

function Footer({pass}) {

  const click=(param)=>{
    
    console.log(('param',param));
    pass(param);
  }
  return (
    <div style={{marginTop:'180px'}}>

<MDBFooter className='text-center text-white' style={{height:"300px", backgroundImage:'url(/reel.jpg)',backgroundPosition:"center",backgroundRepeat:"repeat",backgroundSize:"contain" }}>
      <MDBContainer className='p-4'>
        <section className=''>
          <MDBRow style={{paddingTop:"86px"}}>
            <MDBCol lg='2' md='12' className=' mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://m.media-amazon.com/images/M/MV5BNGViM2M4NmUtMmNkNy00MTQ5LTk5MDYtNmNhODAzODkwOTJlXkEyXkFqcGdeQXVyMTY1NDY4NTIw._V1_SX300.jpg' className=''style={{height:"80px",width:"160px"}} />
                <a href='#!'onClick={()=>{click('animal')}} >
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://m.media-amazon.com/images/M/MV5BOTJlY2U2ZmYtMzU3Ny00ZDI3LWEwMDYtOWIxNzdhZDI5ZWRkXkEyXkFqcGdeQXVyMTY3ODkyNDkz._V1_SX300.jpg' className=''style={{height:"80px",width:"160px"}} />
                <a href='#!'onClick={()=>{click('12th fail')}}>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://m.media-amazon.com/images/M/MV5BMmU4ZTM0MTctZTQ3Ny00YjZmLWFhNzEtOGYzMDk0ZjcyNmYzXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_SX300.jpg' className=''style={{height:"80px",width:"160px"}} />
                <a href='#!' onClick={()=>{click('Salaar')}}>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://m.media-amazon.com/images/M/MV5BYTU1MTNkZjUtMGI1Zi00OGUxLWE0Y2YtYjcyYWNlZDU4M2MwXkEyXkFqcGdeQXVyMTQ3Mzk2MDg4._V1_SX300.jpg' className=''style={{height:"80px",width:"160px"}} />
                <a href='#!'onClick={()=>{click('Ozler')}}>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://m.media-amazon.com/images/M/MV5BMTNjODdkNzUtZWEzOC00MWJjLWJmYzMtYjM3NjQyM2M4NzI5XkEyXkFqcGdeQXVyNTI0NzYwMTI@._V1_SX300.jpg' className=''style={{height:"80px",width:"160px"}} />
                <a href='#!'onClick={()=>{click('Neru')}}>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
              <MDBRipple
                rippleColor='light'
                className='bg-image hover-overlay shadow-1-strong rounded'
              >
                <img src='https://m.media-amazon.com/images/M/MV5BMjZkNTdhOTMtYzg0Yy00YjA4LTljOTQtZWRkNTZkMTY3Y2Y3XkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_SX300.jpg' className='' style={{height:"80px",width:"160px"}}/>
                <a href='#!'onClick={()=>{click('Hi Nanna')}}>
                  <div
                    className='mask'
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  ></div>
                </a>
              </MDBRipple>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2024 Copyright:
        <a className='text-light' href='https://mdbootstrap.com/'>
          Filmy.com
        </a>
      </div>
    </MDBFooter>
    </div>
    
  )
}

export default Footer