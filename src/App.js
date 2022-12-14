import React, { useState } from 'react'
import './reset.css'
import './App.css';
import './components/Home/Home.css'
import './components/aboutMe/aboutMe.css'
import './components/Projects/Projects.css'
import './components/skills/skills.css'
import './components/globalNavBar/globalNavBar.css'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import GlobalNavBar from './components/globalNavBar/globalNavBar'
import AboutMe from './components/aboutMe/aboutMe'
import Skills from './components/skills/skills'

function App() {

  return (
    <div className='container'>
      <div className='email'>jordonaren@gmail.com</div>
      <div className='linkedInGitHub linkedIn'>< a href='https://www.linkedin.com/in/jordon-pruitt-75a012244/recent-activity/'>
                <i className="homePageGhubLinkedIn fa-brands fa-linkedin"></i>
            </a></div>
            <div className='linkedInGitHub gitHub'><a href='https://github.com/JordonP123?tab=repositories'>
                <i className="homePageGhubLinkedIn fa-brands fa-github"></i>
            </a></div>
      <div className='line'></div>
      <div className='line line2'></div>
      <GlobalNavBar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Projects/>
</div>
  );
}

export default App;
