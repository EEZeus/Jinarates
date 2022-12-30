import React from 'react';
import './App.css';
import Navbar from './Components/Main-Parts/NavBar'
import Footer from './Components/Main-Parts/Footer'
import CoursePageHeader from './Components/Main-Parts/Headers/CoursePageHeader'
function App() {
  return <React.Fragment>
    <Navbar></Navbar>
    <CoursePageHeader></CoursePageHeader>
    <Footer></Footer>
  </React.Fragment>
}

export default App;
