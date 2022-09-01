import React from 'react' 
import gHubImg from '../img/githubLogo.png'
import linkedInImg from '../img/linkedIn.jpg'
import { Link , Routes, Route } from 'react-router-dom'

const SideBar = (props) => {
    return(
       <div className={props.sideBar ? 'sidebarContainerX' : 'sidebarContainer'}> 
            <div className='sidebarLinksContainer'>
            <Link className='sidebarLinks' to = '/'>Home</Link>
            <Link className='sidebarLinks' to = '/projects'>Projects</Link>
            <Link className='sidebarLinks' to = '/aboutMe'>About Me</Link>
            <Link className='sidebarLinks' to = '/contact'>Contact Me</Link>
            </div>
            <a className = 'sidebarHref' href='https://github.com/JordonP123?tab=repositories'>
                <img className='sidebarImg' src={gHubImg} alt='githubLogo'></img>
            </a>
            < a className = 'sidebarHref' href='https://www.linkedin.com/in/jordon-pruitt-75a012244/recent-activity/'>
            <img className='sidebarImg' src={linkedInImg} alt='githubLogo'></img>
            </a>
        </div>
    )
}

export default SideBar