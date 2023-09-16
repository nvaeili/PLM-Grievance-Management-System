import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './adminpages/AdminDashboard/Dashboard';
import MainPage from './adminpages/AdminLogin/MainPage';
import { AuthContextProvider } from './components/context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import MainPageRouter from './components/MainPageRouter';


function App() {
  return (
    <Router>
     <AuthContextProvider>
     <Routes>
      <Route path ='/dashboard/*' element = {<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
      <Route path ='/login' element = {<MainPage/>}/>
      <Route path ="*" element={<MainPageRouter/>}/>
     </Routes>
     </AuthContextProvider>
      
     
    </Router>
  );
}

export default App;
