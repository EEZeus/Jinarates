import React from 'react'
import styles from "./Footer.module.css";
import logo from '../../Assets/logo-black.png'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (<MDBFooter className='bg-dark bg-gradient text-white'>
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
  </MDBFooter>
  );
};

export default Footer;
