import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layouts/header';
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
