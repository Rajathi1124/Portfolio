import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './pages/About';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Project from './pages/Project';
import Contact from './pages/Contact'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home/>
    <About/>
    <Skills/>
    <Project/>
    <Contact/>
  </React.StrictMode>
);

//If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

