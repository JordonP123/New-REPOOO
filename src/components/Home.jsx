import React from 'react'
import photoOfMe from '../img/pictureOfMe.jpg'

const Home = () => {
    return(
        <div className='homeContainer'>
        <img className='photoOfMe' src={photoOfMe} alt = 'Of user'></img>
        <p className='homeHeader'>Hi, I'm Jordon</p>
        <p className='homeHeader homeHeader2'>Full Stack Web Developer</p>
        <ul>
            <li className='homeList'>
                <i className='fa-solid fa-mug-hot'/> Yes, I love coffee
            </li>
            <li className='homeList'>
                <i className="fa-brands fa-react" /> Passionate about React 
            </li>
            <li className='homeList'>
                
            </li>
            <li className='homeList'>
                <i className="fa-solid fa-laptop-code"></i>  Studied at Bloomtech
            </li>
            <li className='homeList'>
            <a href='https://github.com/JordonP123?tab=repositories'>
                <i className="homePageGhubLinkedIn fa-brands fa-github"></i>
            </a>
            < a href='https://www.linkedin.com/in/jordon-pruitt-75a012244/recent-activity/'>
                <i className="homePageGhubLinkedIn fa-brands fa-linkedin"></i>
            </a>
            </li>
        </ul>
        </div>
    )
}

export default Home