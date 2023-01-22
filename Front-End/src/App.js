import React,{Component} from 'react';
import './App.css';
import CoursePage from './Components/CoursePage';
import ProfessorProfilePage from './Components/ProfessorProfilePage';
import HomePage from './Components/HomePage'
import StudentProfilePage from './Components/StudentProfilePage'
import UniversityProfilePage from './Components/UniversityProfilePage'
import SearchPage from './Components/SearchPage'
import SignUpPage from './Components/Authorization/SignUpPage';
import SignInPage from './Components/Authorization/SignInPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App(props) {

  return <React.Fragment>
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/explore" element={<SearchPage />} />
        <Route path="/course-page" element={<CoursePage />} />
        <Route path="/profile-p" element={<ProfessorProfilePage />} />
        <Route path="/profile-s" element={<StudentProfilePage />} />
        <Route path="/profile-u" element={<UniversityProfilePage />} />
      </Routes>
    </Router>
  </React.Fragment>
}

export default App;
