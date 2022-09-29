const Skills = () => {
  return (
    <div className="skillsContainer">
      <h1 className="skillsHeader">My Skills</h1>
      <h2 className="frontEnd">Front-end</h2>
      <div className="theLine"></div>
      <div className="theFiller frontEndFiller"></div>
      <h2 className="backEnd">Back-end</h2>
      <div className="theLine"></div>
      <div className="theFiller backEndFiller"></div>
      <h2 className="backEnd">React-JS</h2>
      <div className="theLine"></div>
      <div className="theFiller reactJsFiller"></div>
      <h2 className="backEnd">Node-JS</h2>
      <div className="theLine"></div>
      <div className="theFiller nodeJsFiller"></div>
      <section className="proficientBox">
        <h2 className="proficientHeader">Frontend / Backend </h2>
        <div className="mySkills">
          <i class="skillsIcons fa-brands fa-react"></i>ReactJS
          <div className="skillLevel">Advanced</div>
        </div>
        <div className="mySkills">
          <i class="skillsIcons fa-brands fa-js"></i>JavaScript
          <div className="skillLevel">Advanced</div>
        </div>
        <div className="mySkills">
          <i class="skillsIcons fa-brands fa-html5"></i>HTML
          <div className="skillLevel">Advanced</div>
        </div>
        <div className="mySkills">
          <i class="skillsIcons fa-brands fa-css3-alt"></i>CSS
          <div className="skillLevel">Advanced</div>
        </div>
        <div className="mySkills">
          <i class="skillsIcons fa-brands fa-node"></i>NodeJS
          <div className="skillLevel">Advanced</div>
        </div>
        <div className="mySkills">
          <i class="skillsIcons fa-brands fa-node-js"></i>Express
          <div className="skillLevel">Advanced</div>
        </div>
        <div className="mySkills">
          <i class="skillsIcons fa-brands fa-react"></i>Redux
          <div className="skillLevel">Intermediate</div>
        </div>
        <div className="mySkills">
          <i class="skillsIcons fa-solid fa-list-check"></i>Jest
          <div className="skillLevel">Intermediate</div>
        </div>
        <div className="mySkills">
          <i class="skillsIcons fa-solid fa-database"></i>SQL
          <div className="skillLevel">Intermediate</div>
        </div>
        <div className="mySkills">
          <i class="skillsIcons fa-brands fa-node-js"></i>Knex
          <div className="skillLevel">Intermediate</div>
        </div>
        <div className="mySkills">
          <i class="skillsIcons fa-brands fa-python"></i>Python
          <div className="skillLevel">Beginner</div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
