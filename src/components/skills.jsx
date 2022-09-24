

const Skills = () => {
    return (
        <div className='skillsContainer'>
                <h1 className='skillsHeader'>My Skills</h1>
                    <h2 className='frontEnd'>Front-end</h2>
                        <div className='theLine'></div>
                        <div className='theFiller frontEndFiller'></div>
                    <h2 className='backEnd'>Back-end</h2>
                        <div className='theLine'></div>
                        <div className='theFiller backEndFiller'></div>
                    <h2 className='backEnd'>React-JS</h2>
                        <div className='theLine'></div>
                        <div className='theFiller reactJsFiller'></div>
                    <h2 className='backEnd'>Node-JS</h2>
                        <div className='theLine'></div>
                        <div className='theFiller nodeJsFiller'></div>
                <div className='proficientBox'>
                    <h2 className='proficientHeader'>Proficient with : </h2>
                        <h3 className='mySkills'>ReactJS</h3>
                        <h3 className='mySkills'>JavaScript</h3>
                        <h3 className='mySkills'>HTML</h3>
                        <h3 className='mySkills'>CSS</h3>
                        <h3 className='mySkills'>NodeJS</h3>
                        <h3 className='mySkills'>Express</h3>
                </div>

        </div>
    )
}

export default Skills