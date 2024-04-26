import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import Landing from "./components/Landing.jsx"

function App() {
  return (
    <Router> {/* Wrap Routes in BrowserRouter */}
      <Routes>
        <Route path='/' element={<Landing />} /> {/* Use self-closing tag for Route element */}
      </Routes>
    </Router>
  );
}

export default App;
