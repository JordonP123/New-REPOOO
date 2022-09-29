import React from "react";
import ProjectNasaPhoto from "../../img/nasaPhoto.png";
import marsPhoto from "../../img/mars.png";

const Projects = () => {
  const [photoChanger, setPhotoChanger] = React.useState(false);
  const [showDescProj1, setshowDescProj1] = React.useState(false);

  if (photoChanger === false || photoChanger === true) {
    setTimeout(() => {
      setPhotoChanger(!photoChanger);
    }, 5000);
  }

  return (
    <div id="projects" className="projContainer">
      <div className="projectsHeader">A few things I've built</div>
      <section className="projects">
        <div
          onMouseOver={() => setshowDescProj1(true)}
          onMouseLeave={() => setshowDescProj1(false)}
          className="proj proj1"
        >
          <img
            className={photoChanger ? "nasaPhoto" : "nasaPhotoActive"}
            src={photoChanger ? marsPhoto : ProjectNasaPhoto}
            alt="project 1"
          ></img>
          <div  className={showDescProj1 ? "proj1HeaderDesc" : 'proj1HeaderDescNull'}>
          <h1 className="proj1Header">Nasa/Mars Rover Photo Selector</h1>
          <p className="proj1Desc">React application built with NASAs API</p>
          </div>
          <div
            className={
              showDescProj1 ? "proj1LangsContainer" : "proj1LangsContainerNull"
            }
          >
            <div className="proj1Langs">React</div>
            <div className="proj1LangsLongWord proj1Langs">
              Styled Components
            </div>
            <div className="proj1Langs">CSS</div>
            <div className="proj1LangsLongWord2 proj1Langs">Nasa API</div>
          </div>
        </div>
        <div className="proj proj2">
          <h1>Nasa Photo of the day</h1>
        </div>
        <div className="proj proj3">
          <h1>Nasa Photo of the day</h1>
        </div>
        <div className="proj proj4">
          <h1>Nasa Photo of the day</h1>
        </div>
      </section>
    </div>
  );
};

export default Projects;
