
import './App.css';
import {BrowserRouter as Router, Routes, Route} from  "react-router-dom"
import Homepage from './Pages/Homepage';
import Admin from './Pages/StaffDasboard/Admin';
import { ManageStudents } from './components/ManageStudents';
import { useState } from 'react';
import MobileMenu from './components/MobileMenu';
import { DashboardSidebar } from './components/DashboardSidebar';
import StaffSignup from './components/StaffSignup';
import StudentDash from './Pages/StudentDasboard/StudentDash';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path='/staffsignup' element={<StaffSignup/>}/>
        <Route path='/student' element={<StudentDash/>}/>
        <Route path='/managestudents' element={<ManageStudents/>}/>
      </Routes>
       
   
    </Router>
  );
}

export default App;
