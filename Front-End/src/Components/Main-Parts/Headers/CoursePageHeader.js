import React from 'react'
import './CoursePageHeader.css'
const checked = 's'
const Header = () => {
    return (
        <div class="container-md d-flex flex bg-gradient bg-success mw-100 mx-0 px-0">
            <div class="container text-left mx-0 px-0 text-white">
                <div class="row">

                    <div class=" col-2">
                        <img className="rounded-circle w-100 h-100 " alt="avatar" src="https://i0.wp.com/newspacephoto.org/wp-content/uploads/2019/11/Short-Online-Photography-Courses.png?resize=650%2C331&ssl=1" />
                    </div>

                    <div class="col-3 mt-4 pl-0">
                        <h5 className=' ml-0 pl-0'>Subject: <span className='fs-6 text-dark'>Something</span></h5>
                        <h5 className='mt-4 ml-0 pl-0'>Description: <span className='fs-6 text-dark'>Something</span></h5>
                        <h5 className="progress mt-4 ml-0 pl-0 w-50 ">
                            <div class="progress-bar w-50 bg-warning bg-gradient" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <span className='p-5  text-dark'>2.5</span>
                            </div>
                            
                        </h5>
                    </div>

                    <div class="col-3  mt-4 pl-0">
                        <h5 className=' ml-0 pl-0'>Attend: <span className='fs-6 text-dark'>Something</span></h5>
                        <h5 className='mt-4 ml-0 pl-0'>Tutor: <span className='fs-6 text-dark'>Something</span></h5>

                    </div>

                    <div class="col-1  mt-4 ml-0 pl-0">
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;