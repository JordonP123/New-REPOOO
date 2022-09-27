import React from 'react'
import photoOfMe from '../img/pictureOfMe.jpg'

const Home = () => {

const [moving, setMoving] = React.useState(false)

if(moving === true || moving === false){
    setTimeout(() => {
        setMoving(!moving)
    }, 400)
}

    return(
        <div id='home' className='homeContainer'>
            <div className="photoOfMeBox"></div>
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
            <a href='#aboutMe' className='showMore' alt = 'show more'>Show more<br></br>
                <i className={moving ? "fa-solid fa-chevron-down" : 'fa-solid fa-chevron-down moving'}></i>
            </a>

        </div>
    )
}


export default Home