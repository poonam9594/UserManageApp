import './App.css';
import ContactForm from './component/ContactForm';
import Navbar from './component/Navbar';
import UserDetail from './component/UserDetail';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import UserState from './context/UserState';

function App() {
  return (
    // <UserState>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/detail" element={<UserDetail />}/>
    <Route path="/contact" element={<ContactForm/>}/>

     
    </Routes>
  </BrowserRouter>
  // </UserState>
);
  
}

export default App;
