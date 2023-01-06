
import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Selectlogin from './components/Selectlogin/Selectlogin';
import Notfound from './components/Notfound/Notfound';
import Studentlogin from './components/Studentlogin/Studentlogin';
import StudentRegister from './components/StudentRegister/StudentRegister';

function App() {
  return (
    <div className='app'>
      
      

      <Routes>
      
      <Route path='/selectlogin' element={<Selectlogin/>}/>
      <Route path='/studentlogin' element={<Studentlogin/>}/>
      <Route path='/studentregister' element={<StudentRegister/>}/>
      <Route exact path='/' element={<Header/>}/>
      <Route path='*' element={<Notfound/>}/>
      </Routes>

    </div>
  );
}

export default App;
