import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'; 
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import {Routes,Route} from "react-router-dom"
import Setting from './Setting';
import Admin from './components/Admin';
import AdminMain from './components/AdminMain';

function App() {
  return (
  <>
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='/setting' element={<Setting/>} />
      <Route path='/Admin' element={<Admin/>} />
      <Route path='/AdminMain' element={<AdminMain/>} />
      <Route path='*' element={<Errror />} />
    </Routes>
  </>
  );
}

export default App;
