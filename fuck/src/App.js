import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './home';
import Alert from './routes/alerts'
import Registration from './routes/registration';

function App() {
  return (
    //Routes for website
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/alerts" element={<Alert />} />
        <Route exact path="/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
}

export default App;
