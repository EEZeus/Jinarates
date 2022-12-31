import React from 'react'
import logo from '../../Assets/logo-black.png'
import './Footer.css'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (<MDBFooter className='w-100 position-absolute bottom-0 end-0 bg-dark bg-gradient text-white'>
    <MDBContainer className='position-relative'>
      <MDBRow>
        <MDBCol lg="6" md="12" className=' mt-mb-0 '>
          <img src={logo} alt={'logo'} className="rounded w-25"/>
        </MDBCol>

        <MDBCol lg="3" md="6" className=' mb-md-0'>

          <ul className='list-unstyled mb-0'>
            <li>
              <MDBBtn color='secondary' size='sm' className="bg-gradient m-1 w-75">Help</MDBBtn>
            </li>
            <li>
              <MDBBtn color='secondary' size='sm' className="bg-gradient m-1 w-75">About us</MDBBtn>

            </li>
            <li>
              <MDBBtn color='secondary' size='sm' className="bg-gradient m-1 w-75">FAQ</MDBBtn>
            </li>
          </ul>
        </MDBCol>

        <MDBCol lg="3" md="6" className=' mb-md-0'>

          <ul className='list-unstyled'>
            <li>
              <MDBBtn color='secondary' size='sm' className="bg-gradient m-1 w-75">Address</MDBBtn>

            </li>
            <li>
              <MDBBtn color='secondary' size='sm' className="bg-gradient m-1 w-75">Phone number</MDBBtn>

            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <div className="position-absolute bottom-0 end-0">
      <MDBBtn className='bg-gradient m-1' size='sm' tag='a' color='dark' >
        <MDBIcon fab icon='twitter' />
      </MDBBtn>
      <MDBBtn className='bg-gradient m-1' size='sm' tag='b' color='dark' >
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>

    </div>
  </MDBFooter>
  );
};

export default Footer;
