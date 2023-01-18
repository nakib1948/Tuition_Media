
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Selectlogin from './components/Selectlogin/Selectlogin';
import Notfound from './components/Notfound/Notfound';
import Studentlogin from './components/Studentlogin/Studentlogin';
import StudentRegister from './components/StudentRegister/StudentRegister';
import StudentPage from './components/StudentPage/StudentPage';
import StudentProfile from './components/StudentProfile/StudentProfile';
import { createContext, useState } from 'react';
import StudentHistory from './components/StudentHistory/StudentHistory';
import TeacherloginPage from './components/Teacher/TeacherloginPage/TeacherloginPage';
import TeacherSignup from './components/Teacher/TeacherloginPage/TeacherSignup/TeacherSignup';
import TeacherHomePage from './components/Teacher/TeacherHomePage/TeacherHomePage';
import TeacherApplyTuition from './components/Teacher/TeacherApplyTuition/TeacherApplyTuition';
import StudentseeResponse from './components/StudentseeResponse/StudentseeResponse';
import Response from './components/Response/Response';
import TeacherProfile from './components/Teacher/TeacherProfile/TeacherProfile';
import StudentHome from './components/StudentHome/StudentHome';
import TeacherHome from './components/Teacher/TeacherHome/TeacherHome';


export const userContext=createContext();

function App() {
  const [loggedinUser,setloggedinUser]=useState({});
  return (
    <userContext.Provider value={[loggedinUser,setloggedinUser]}>
      {/* <h3>email:{loggedinUser.email}</h3> */}

      <Routes>
      
      <Route path='/selectlogin' element={<Selectlogin/>}/>
      <Route path='/studentlogin' element={<Studentlogin/>}/>
      <Route path='/studentregister' element={<StudentRegister/>}/>
      <Route path='/studentpage' element={<StudentPage/>}/>
      <Route path='/studentprofile' element={<StudentProfile/>}/>
      <Route path='/studenthistory' element={<StudentHistory/>}/>
      <Route path='/studentseeresponse' element={<StudentseeResponse/>}/>
      <Route path='/response/:key' element={<Response/>}/>



      <Route path='/teacherloginpage' element={<TeacherloginPage/>}/>
      <Route path='/teachersignup' element={<TeacherSignup/>}/>
      <Route path='/teacherhomepage' element={<TeacherHomePage/>}/>
      <Route path='/teacherapplytuition' element={<TeacherApplyTuition/>}/>
      <Route path='/teacherprofile' element={<TeacherProfile/>}/>
      <Route path='/studenthome' element={<StudentHome/>}/>
      <Route path='/teacherhome' element={<TeacherHome/>}/>




      <Route exact path='/' element={<Header/>}/>
      <Route path='*' element={<Notfound/>}/>
      </Routes>

    </userContext.Provider>
  );
}

export default App;
