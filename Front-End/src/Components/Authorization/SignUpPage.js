import React from 'react'
import './SignUpPage.css'
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

const SignUpPage = () => {
    return <React.Fragment>
        <Navbar />
        
        <div className='container bg-designed-signup mx-auto m-4'>
        <div className='container w-25 align-right-custom'>
        <form class="row needs-validation " novalidate>
            <div class="d-flex flex-column mb-2">
            <h1 className='mx-auto'>Sign Up</h1>
                <div class="p-0">
                    <label for="username" class="form-label">Username</label>
                    <div class="input-group">
                        <span class="input-group-text bg-username-design" id="inputGroupPrepend2">@</span>
                        <input type="text" class="form-control bg-form-design" id="username" aria-describedby="inputGroupPrepend2" required />
                    </div>
                </div>
                <div class="p-0">
                    <label for="user-email" class="form-label">Email</label>
                    <input type="text" class="form-control bg-form-design" id="user-email" placeholder="example@gmail.com" required />
                </div>
                <div class="p-0">
                    <label for="user-University" class="form-label">University</label>
                    <input type="text" class="form-control bg-form-design" id="user-University" required />
                </div>
                <div class="p-0">
                    <label for="user-password" class="form-label">Password</label>
                    <input type="password" class="form-control bg-form-design" id="user-password" required />
                </div>
                <div class="p-0">
                    <label for="user-rpassword" class="form-label">Repeat Password</label>
                    <input type="password" class="form-control bg-form-design" id="user-rpassword" required />
                </div>
                <div class="form p-0">
                <label class="form-label">Role:</label>
                    <div class="form-check form-check m-1">
                            <label class="form-check-label" for="role-university">University</label>
                        <input class="form-check-input bg-form-design" name='role' type="radio" id="role-university" value="option1"/>
                    </div>
                    <div class="form-check form-check m-1">
                        <input class="form-check-input bg-form-design" name='role' type="radio" id="role-professor" value="option2"/>
                            <label class="form-check-label" for="role-professor">Professor</label>
                    </div>
                    <div class="form-check form-check m-1">
                        <input class="form-check-input bg-form-design" name='role' type="radio" id="role-student" value="option3" />
                            <label class="form-check-label" for="role-student">Student</label>
                    </div>
                </div>
                <div class="p-0">
                    <label for="user-cv" class="form-label">Upload CV</label>
                    <input type="file" class="form-control bg-form-design" id="user-cv" aria-describedby="user-cv" aria-label="Upload"/>
                </div>
                <div class="mt-2 w-100">
                <button class="btn btn-success w-100" type="submit">
                    Sign Up
                </button>
                </div>
            </div>
            </form>
        </div>
        </div>
        <Footer />
    </React.Fragment>
}

export default SignUpPage;