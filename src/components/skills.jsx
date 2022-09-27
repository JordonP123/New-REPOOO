

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
                    <div className="proficientContainer">
                        <h2 className='proficientHeader'>Proficient with : </h2>
                            <div className='mySkills mySkills2'>ReactJS</div>
                            <div className='mySkills mySkills2'>JavaScript</div>
                            <div className='mySkills mySkills2'>HTML</div>
                            <div className='mySkills mySkills2'>CSS</div>
                            <div className='mySkills mySkills2'>NodeJS</div>
                            <div className='mySkills mySkills2'>Express</div>
                    </div>
                    <div className="proficientContainer proficientContainer2">
                    <h2 className='proficientHeader'>Imporving, but understand : </h2>
                        <div className='mySkills mySkillsImproving'>Redux</div>
                        <div className='mySkills mySkillsImproving'>Python</div>
                        <div className='mySkills mySkillsImproving'>SQL</div>
                        <div className='mySkills mySkillsImproving'>MongoDB</div>
                    </div>
                </div>

        </div>
    )
}

export default Skills