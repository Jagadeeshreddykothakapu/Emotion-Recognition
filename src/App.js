// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import TrademarkApplicationForm from './components/TrademarkApplicationForm';
import TrademarkPackages from './components/TrademarkPackages';
import NextStepForm from './components/NextStepForm';
import TrademarkClassForm from './components/TrademarkClassForm';
import SearchOptionsForm from './components/SearchOptionsForm';
import HowItWorksSection from './components/HowItWorksSection';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={
  <div>
    <TrademarkPackages />
    <HowItWorksSection />
    <Footer/>
  </div>
} />
          
        <Route path="/get-started" element= {
          <div>
             <TrademarkApplicationForm/> 
             <Footer/>
          </div>
        }/>
          
          <Route path="/next-step" element={
          <div>
            <NextStepForm />
            <Footer/>
          </div>
          
          } />
          <Route path="/application-form-info" element={
          <div>
             <TrademarkClassForm />
             <Footer/>
             </div>
             } />
          <Route path="/next-step4" element={
           <div>
               <SearchOptionsForm />
               <Footer/>

               </div>
               } />
          

        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
