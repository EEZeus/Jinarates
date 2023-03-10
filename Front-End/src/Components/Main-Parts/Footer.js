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
  return (<MDBFooter className='position-relative w-100 bg-designed text-white'>
    <MDBContainer >
      <MDBRow>
        <MDBCol lg="6" md="12" className=' mt-mb-0 '>
          <img src={logo} alt={'logo'} className="rounded w-6"/>
        </MDBCol>

        <MDBCol lg="3" md="6" className=' mb-md-0'>

          <ul className='list-unstyled mb-0'>
            <li>
              <MDBBtn color='dark' size='sm' className=" m-1 w-75">Help</MDBBtn>
            </li>
            <li>
              <MDBBtn color='dark' size='sm' className=" m-1 w-75">About us</MDBBtn>

            </li>
            <li>
              <MDBBtn color='dark' size='sm' className=" m-1 w-75">FAQ</MDBBtn>
            </li>
          </ul>
        </MDBCol>

        <MDBCol lg="3" md="6" className=' mb-md-0'>

          <ul className='list-unstyled'>
            <li>
              <MDBBtn color='dark' size='sm' className=" m-1 w-75">Address</MDBBtn>

            </li>
            <li>
              <MDBBtn color='dark' size='sm' className=" m-1 w-75">Phone number</MDBBtn>

            </li>
          </ul>
        </MDBCol>
      </MDBRow>
      <div className="position-absolute bottom-0 end-0">
      <MDBBtn className='bg-gradient m-1' size='sm' tag='a' color='dark' >
        <MDBIcon fab icon='twitter' />
      </MDBBtn>
      <MDBBtn className='bg-gradient m-1' size='sm' tag='b' color='dark' >
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>
    </div>
    </MDBContainer>
  </MDBFooter>
  );
};

export default Footer;
