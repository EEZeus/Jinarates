import React, { useEffect, useRef, useState } from 'react'
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
import { Link } from 'react-router-dom';

const SignUpPage = () => {

    const [postError, setPostError] = useState(false)
    let data = {}

    const usernameInput = useRef('')
    const emailInput = useRef('')
    const universityInput = useRef('')
    const passwordInput = useRef('')
    const rpasswordInput = useRef('')
    const uniRoleInput = useRef(false)
    const profRoleInput = useRef(false)
    const stuRoleInput = useRef(false)
    const cvInput = useRef('')

    async function sendDataHandler(url, data1, data2) {
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify(data1)
            })

            return response.json()
        } catch (e) {
            setPostError(true)
        }
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application.json'
                },
                body: JSON.stringify(data2)
            })

            return response.json()
        } catch (e) {
            setPostError(true)
        }
    }
    return <React.Fragment>
        <Navbar />
        <div className='container bg-designed-signup mx-auto m-4'>
            <div className='container w-25 align-right-custom'>
                <form class="row needs-validation " onSubmit={(e) => {
                    e.preventDefault();
                    let formData = new FormData()
                    formData.append('file', cvInput.current.files[0])
                    const data1 = {
                        username: usernameInput.current.value,
                        email: emailInput.current.value,
                        password: passwordInput.current.value,
                    }
                    const data2 = {
                        university: universityInput.current.value,
                        rpassword: rpasswordInput.current.value,
                        uniRole: uniRoleInput.current.checked,
                        profRole: profRoleInput.current.checked,
                        stuRole: stuRoleInput.current.checked,
                        cv: formData
                    };
                    sendDataHandler('https://jinarates-default-rtdb.firebaseio.com/', data1, data2);
                }}>
                    <div class="d-flex flex-column mb-2">
                        <h1 className='mx-auto'>Sign Up</h1>
                        <div class="p-0">
                            <label for="username" class="form-label">Username</label>
                            <div class="input-group">
                                <span class="input-group-text bg-username-design" id="inputGroupPrepend2">@</span>
                                <input type="text" value={usernameInput.current.value} ref={usernameInput} class="form-control bg-form-design" id="username" described="inputGroupPrepend2" required />
                            </div>
                        </div>
                        <div class="p-0">
                            <label for="user-email" class="form-label">Email</label>
                            <input type="text" ref={emailInput} class="form-control bg-form-design" id="user-email" placeholder="example@gmail.com" required />
                        </div>
                        <div class="p-0">
                            <label for="user-University" class="form-label">University</label>
                            <input type="text" ref={universityInput} class="form-control bg-form-design" id="user-University" required />
                        </div>
                        <div class="p-0">
                            <label for="user-password" class="form-label">Password</label>
                            <input type="password" ref={passwordInput} class="form-control bg-form-design" id="user-password" required />
                        </div>
                        <div class="p-0">
                            <label for="user-rpassword" class="form-label">Repeat Password</label>
                            <input type="password" ref={rpasswordInput} class="form-control bg-form-design" id="user-rpassword" required />
                        </div>
                        <div class="form p-0">
                            <label class="form-label">Role:</label>
                            <div class="form-check form-check m-1">
                                <label class="form-check-label" for="role-university">University</label>
                                <input ref={uniRoleInput} class="form-check-input bg-form-design" name='role' type="radio" id="role-university" value="option1" required />
                            </div>
                            <div class="form-check form-check m-1">
                                <input ref={profRoleInput} class="form-check-input bg-form-design" name='role' type="radio" id="role-professor" value="option2" />
                                <label class="form-check-label" for="role-professor">Professor</label>
                            </div>
                            <div class="form-check form-check m-1">
                                <input ref={stuRoleInput} class="form-check-input bg-form-design" name='role' type="radio" id="role-student" value="option3" />
                                <label class="form-check-label" for="role-student">Student</label>
                            </div>
                        </div>
                        <div class="p-0">
                            <label for="user-cv" class="form-label">Upload CV</label>
                            <input type="file" ref={cvInput} class="form-control bg-form-design" id="user-cv" described="user-cv" aria-label="Upload" />
                        </div>
                        <div class="mt-2 w-100">
                            <nav>
                                <Link to='/'>
                                    <button class="btn btn-success w-100" type="submit">
                                        Sign Up

                                    </button>
                                </Link>
                            </nav>
                            {postError && <h6 className='text-danger'> data could not be sent ! try again.</h6>}
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Footer />
    </React.Fragment>
}

export default SignUpPage;