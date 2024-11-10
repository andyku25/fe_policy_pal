import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/header';
import Dashboard from './pages/dashboard/dashboard';
import Home from './pages/landing/Home';
import AuthForm from './pages/auth/auth-user';


function App() {
  return (
    <BrowserRouter>
      
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/signup" element={<AuthForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
