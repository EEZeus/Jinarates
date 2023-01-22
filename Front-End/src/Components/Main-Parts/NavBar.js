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
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [showNavColor, setShowNavColor] = useState(false);
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const [showNavColorThird, setShowNavColorThird] = useState(false);
    return (
        <MDBNavbar expand='lg' dark className='sticky-top bg-designed bg-dark mt-0'>
            <MDBContainer fluid className='d-flex align-items-end '>
                <img src={logo} alt={'logo'} className='w-3 rounded' />
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
                        <MDBNavbarItem className='active mb-4 '>
                            <MDBNavbarLink>
                                <MDBIcon fas icon="home" color='success' className='mx-1' />
                                <Link className='text-decoration-none' to='/Homepage'>
                                    <span className='text-white'>Home</span>
                                </Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className=' mb-4 '>
                            <MDBNavbarLink >
                                <MDBIcon fas icon="search" color='success' className='mx-1' />
                                <Link className='text-decoration-none' to='/explore'>
                                    <span className='text-white'>Explore</span>
                                </Link>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem className=' mb-4 '>
                            <MDBNavbarLink href='#'>
                                <MDBIcon fas icon="info-circle" color='success' className='mx-1' />
                                <span className='text-white'>About us</span>
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <div className='position-absolute bottom-0 end-0 mb-0'>
                            <MDBBtn href='#' tag='a' color='transparent' className='shadow-0 mb-0'>
                                <div className='position-relative'>
                                    <MDBIcon far icon="envelope" color='success' />
                                    <span class="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
                                </div>
                            </MDBBtn>
                            <Link to= '/'>
                            <MDBBtn tag='a' color='transparent' className='shadow-0 mb-0'>
                                <MDBIcon fas icon="sign-in-alt" color='success' />
                            </MDBBtn>
                            </Link>
                            <Link to= '/profile-p'>
                            <MDBBtn tag='a' color='transparent' className='rounded-circle shadow-0 mb-4'>
                                <img className="rounded-circle w-3 mb-0" alt="avatar" src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" />
                            </MDBBtn>
                            </Link>
                        </div>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}
export default Navbar