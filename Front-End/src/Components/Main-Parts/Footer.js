import React from 'react'
import logo from '../../Assets/logo-black.png'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (<MDBFooter className='bg-dark bg-gradient text-white position-relative'>
    <MDBContainer>
      <MDBRow>
        <MDBCol lg="6" md="12" className=' mt-mb-0'>
          <img src={logo} alt={'logo'} className='w-25 h-100' />
        </MDBCol>

        <MDBCol lg="3" md="6" className=' mb-md-0'>

          <ul className='list-unstyled mb-0'>
            <li>
              <MDBBtn color='secondary' className="m-1 w-50">Help</MDBBtn>
            </li>
            <li>
              <MDBBtn color='secondary' className="m-1 w-50">About us</MDBBtn>

            </li>
            <li>
              <MDBBtn color='secondary' className="m-1 w-50">FAQ</MDBBtn>
            </li>
          </ul>
        </MDBCol>

        <MDBCol lg="3" md="6" className=' mb-md-0'>

          <ul className='list-unstyled'>
            <li>
              <MDBBtn color='secondary' className="m-1 w-50">Address</MDBBtn>

            </li>
            <li>
              <MDBBtn color='secondary' className="m-1 w-50">Phone number</MDBBtn>

            </li>
          </ul>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    <div className="position-absolute bottom-0 end-0">
      <MDBBtn className='m-1' tag='a' color='dark' >
        <MDBIcon fab icon='twitter' />
      </MDBBtn>
      <MDBBtn className='m-1' tag='b' color='dark' >
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>

    </div>
  </MDBFooter>
  );
};

export default Footer;
