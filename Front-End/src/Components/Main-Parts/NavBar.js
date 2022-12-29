import React, { useState } from 'react'
import logo from '../../Assets/logo-black.png'
import './NavBar.css'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';
const Header = () => {
    const [showNavColor, setShowNavColor] = useState(false);
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const [showNavColorThird, setShowNavColorThird] = useState(false);
    return (
        <MDBNavbar fixed='top' expand='lg' dark bgColor='dark'>
            <MDBContainer fluid className='d-flex align-items-end '>
                <img src={logo} alt={'logo'} className='w-7 rounded' />
                <MDBNavbarToggler
                    type='button'
                    data-target='#navbarColor02'
                    aria-controls='navbarColor02'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
                    <MDBNavbarNav className='me-auto mb-lg-0 position-relative'>
                        <MDBNavbarItem className='active mb-4'>
                            <MDBNavbarLink aria-current='page' href='#' >
                                <MDBIcon fas icon="home" color='success' className='mx-1' />
                                <span>Home</span>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className=' mb-4'>
                            <MDBNavbarLink href='#'>
                                <MDBIcon fas icon="search" color='success' className='mx-1' />
                                <span>Explore</span>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className=' mb-4'>
                            <MDBNavbarLink href='#'>
                                <MDBIcon fas icon="info-circle" color='success' className='mx-1' />
                                <span>About us</span>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <div className='position-absolute bottom-0 end-0 mb-4'>
                            <MDBBtn href='#' tag='a' color='transparent' className='shadow-0'>
                                <MDBIcon far icon="envelope" color='success' />
                            </MDBBtn>
                            <MDBBtn href='#' tag='a' color='transparent' className='shadow-0'>
                                <MDBIcon fas icon="sign-in-alt" color='success' />
                            </MDBBtn>
                        </div>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}
export default Header