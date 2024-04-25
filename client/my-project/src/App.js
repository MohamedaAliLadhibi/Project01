import './App.css';
import Landing from "./components/Landing.jsx"
import {   Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Landing/>}></Route>  


    </Routes>


  );
}

export default App;
