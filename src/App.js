import React, { useState } from 'react'
import './App.css';
import './reset.css'
import SideBar from './components/sideBar.jsx'
import Home from './components/Home'

function App() {
  const [sideBar, setSideBar] = useState(false)

  return (
    <div className='app'>
      <div onClick={() => {setSideBar(!sideBar)}} className='dropdownBtn'>
        <i className="fa-solid fa-bars"></i>
      </div>
      <Home/>
      <SideBar sideBar={sideBar}/>
    </div>
  );
}

export default App;
