import React from 'react';
import './App.css';
import CoursePage from './Components/CoursePage';
import ProfessorProfilePage from './Components/ProfessorProfilePage';
import HomePage from './Components/HomePage'
import StudentProfilePage from './Components/StudentProfilePage'
import UniversityProfilePage from './Components/UniversityProfilePage'
import SearchPage from './Components/SearchPage'
import SignUpPage from './Components/Authorization/SignUpPage';
function App() {
  return <React.Fragment>
    <SignUpPage/>
  </React.Fragment>
}

export default App;
