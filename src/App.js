import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navebar'; // Corrected component name
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Updated import

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? '#042743' : 'white';
    showAlert(`${newMode === 'dark' ? 'Dark' : 'Light'} Mode has been Enabled`, 'success');
  };

  return (
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text to Analyze" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
