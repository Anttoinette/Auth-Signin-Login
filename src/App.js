import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Welcome from './scenes/Welcome';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Content from './scenes/Content';



function App() {
  const [user, setUser] = useState();
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
       <Routes>
       <Route path="/secret" element={(user) ? <Content /> : <Welcome />} />
       <Route path="/login" element={<Login />} />
       <Route path="/signup" element={<Signup />} />
       <Route path="/" element={<Welcome />} />
       </Routes>
      </header>
    </div>
  ;</BrowserRouter>
  )
}

export default App;
