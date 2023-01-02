import React from 'react';
import './App.css';
import Navbar from './Components/Main-Parts/NavBar'
import Footer from './Components/Main-Parts/Footer'
import CoursePageHeader from './Components/Main-Parts/Headers/CoursePageHeader'
import ProfessorPageHeader from './Components/Main-Parts/Headers/ProfessorProfilePageHeader';
import StudentPageHeader from './Components/Main-Parts/Headers/StudentProfilePageHeader';
function App() {
  return <React.Fragment>
    <Navbar></Navbar>
    <StudentPageHeader></StudentPageHeader>
    <Footer></Footer>
  </React.Fragment>
}

export default App;
