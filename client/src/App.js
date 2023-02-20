
import { Routes, Route, useLocation } from 'react-router-dom';
import { Landing, Home, Detail } from './Views/index';
import AboutUs from "./components/AboutUs/AboutUs"
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { AuthProvider } from './context/authContext';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import ConfigSideBar from './components/ConfigSideBar/ConfigSideBar';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';



function App() {
  const location = useLocation();
  return (

    
    <div className="bg-slate-300 text-black h-screen flex text-white" align = 'center'>
      {/* reemplazé div de clase App con esta clase para trabajar con Tailwind son libres de cambiarlo y ponerle estilo*/}
      
      <AuthProvider>
        <Routes>
           <Route exact path='/' element={<Landing />} /> 
          
          <Route path='/about' element={<AboutUs />} />

          

          <Route path='/home' element={<Home />} />
          
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/> 

          <Route path='/user/:id' element={<Detail/>} />
          
          <Route path='/courses' element={<Courses />} />
          <Route path='/contact' element={<Contact />} />

          <Route path='/user/1' element={
            //  This route works only if we have a user logged, if not, it redirect to Login component
            // info available ONLY FOR USERS 
          <ProtectedRoute>
          <div>
            <h1>ONLY FOR LOGGED USER </h1>
          </div>
          </ProtectedRoute>

           } />


        </Routes>
      </AuthProvider>
      </div>

  
  );
}

export default App;
