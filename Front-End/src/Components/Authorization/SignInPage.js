import React, { useState } from 'react'
import { Link} from 'react-router-dom';
import './SignInPage.css'
import Navbar from '../Main-Parts/NavBar'
import Footer from '../Main-Parts/Footer'
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
const SignInPage = (props) => {
    return <React.Fragment>
        <Navbar />
        <div className='container bg-designed-signup mx-auto m-4 '>
            <form class="row w-25 align-right-custom needs-validation h-100 pt-0" >
                <div class="d-flex flex-column mt-custom">
                    <h1 className='mx-auto'>Sign In</h1>
                    <div class="p-0">
                        <label for="username" class="form-label">Username</label>
                        <div class="input-group">
                            <span class="input-group-text bg-username-design" id="inputGroupPrepend2">@</span>
                            <input type="text" class="form-control bg-form-design" id="username" described="inputGroupPrepend2" required />
                        </div>
                    </div>

                    <div class="p-0">
                        <label for="user-password" class="form-label">Password</label>
                        <input type="password" class="form-control bg-form-design" id="user-password" required />
                    </div>
                    <div class="mt-2 w-100">
                        <button class="btn btn-success w-100" type="submit">
                            Sign In
                        </button>
                </div>
                <div class="mt-2 w-100 text-center">
                    <nav>
                      <Link to='/sign-up' class="text-dark text-decoration-none">
                        are you new ? sign up !
                    </Link>      
                    </nav>
                </div>
        </div>
    </form>
        </div >
    <Footer />
    </React.Fragment >
}

export default SignInPage;