import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import './App.css';
import LandingPage from './pages/LandingPage';
import WorkflowCreation from './pages/WorkflowCreation';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
          </header>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/workflow" element={<WorkflowCreation />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
