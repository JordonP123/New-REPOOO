import React from 'react'
import photoOfMe from '../../img/pictureOfMe.jpg'

const Home = () => {

const [moving, setMoving] = React.useState(false)
const [homeImageStyle, setHomeImgStyle] = React.useState(false)
const [ homeHeaderStyle, setHomeHeaderStyle] = React.useState(false)
const [ homeHeader2Style, setHomeHeader2Style] = React.useState(false)
const [homeListStyle1, setHomeList1Style] = React.useState(false)
const [homeListStyle2, setHomeList2Style] = React.useState(false)
const [homeListStyle3, setHomeList3Style] = React.useState(false)
const [gHubStyle, setGhubStyle] = React.useState(false)
const [linkedIn, setLinkedIn] = React.useState(false)


if(moving === true || moving === false){
    setTimeout(() => {
        setMoving(!moving)
    }, 400)
}

setTimeout(() => {
    setHomeImgStyle(true)
}, 100)

setTimeout(() => {
    setHomeHeaderStyle(true)
}, 200)

setTimeout(() => {
    setHomeHeader2Style(true)
}, 400)

setTimeout(() => {
    setHomeList1Style(true)
}, 500)

setTimeout(() => {
    setHomeList2Style(true)
}, 600)

setTimeout(() => {
    setHomeList3Style(true)
}, 700)

setTimeout(() => {
    setGhubStyle(true)
}, 800)

setTimeout(() => {
    setLinkedIn(true)
}, 900)

    return(
        <div id='home' className='homeContainer'>
            <div className="photoOfMeBox"></div>
        <img className={homeImageStyle ? 'photoOfMe' : 'photoOfMeMoved'} src={photoOfMe} alt = 'Of user'></img>
        <p className={homeHeaderStyle ? 'homeHeader' : 'homeHeaderMoved'}>Hi, I'm Jordon</p>
        <p className={homeHeader2Style ? 'homeHeader homeHeader2' : 'homeHeaderMoved homeHeader2Moved'}>Full Stack Web Developer</p>
        <ul className='homeListContainer'>
            <li className={homeListStyle1 ? 'homeList' : 'homeListMoved'}>
                <i className='fa-solid fa-mug-hot'/> Yes, I love coffee
            </li>
            <li className={homeListStyle2 ? 'homeList' : 'homeListMoved'}>
                <i className="fa-brands fa-react" /> Passionate about React 
            </li>
            <li className={homeListStyle3 ? 'homeList' : 'homeListMoved'}>
                <i className="fa-solid fa-laptop-code"></i>  Studied at Bloomtech
            </li>
            <li className='homeList'>
            <a href='https://github.com/JordonP123?tab=repositories'>
                <i className={gHubStyle ?"gHubLinkedIn fa-brands fa-github" : "gHubLinkedInMoved fa-brands fa-github"}></i>
            </a>
            < a href='https://www.linkedin.com/in/jordon-pruitt-75a012244/recent-activity/'>
                <i className={linkedIn ? 'gHubLinkedIn fa-brands fa-linkedin' : 'gHubLinkedInMoved fa-brands fa-linkedin'}></i>
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