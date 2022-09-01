import React from 'react'
import photoOfMe from '../img/pictureOfMe.jpg'

const Home = () => {
    return(
        <div className='homeContainer'>
        <img className='photoOfMe' src={photoOfMe} alt = 'Of user'></img>
        <p className='homeHeader'>Hi, I'm Jordon</p>
        <p className='homeHeader homeHeader2'>I like to build websites</p>
        <ul>
            <li className='homeList'>
                Passionate about React 
            </li>
            <li className='homeList'>
                Passionate about React 
            </li>
            <li className='homeList'>
                Passionate about React 
            </li>
            <li className='homeList'>
                Passionate about React 
            </li>
        </ul>
        </div>
    )
}

export default Home