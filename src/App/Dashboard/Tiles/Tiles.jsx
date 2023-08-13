import { Link } from 'react-router-dom';
import codeSvg from '../../Images/tiles/code.svg';
import personalcard from '../../Images/tiles/personalcard.svg';
import teacher from '../../Images/tiles/teacher.svg';
import folder2 from '../../Images/tiles/folder-2.svg';
import statusup from '../../Images/tiles/status-up.svg';
import edit from '../../Images/tiles/edit.svg';

export const Tiles = () => {
  const SeeMoreLink = (props) => {
    return <Link to={props.to}>Zobacz więcej</Link>;
  };

  return (
    <div className="dashboard-tiles-container">
      <h2>Hi, I'm Marta</h2>
      <p>
        Below you will find the most important information about my activities.
      </p>
      <div className="dashboard-tiles">
        <div>
          <p className="dashboard-tile-title">My CV</p>
          <img src={personalcard} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <SeeMoreLink to="my-cv" />
        </div>
        <div>
          <p className="dashboard-tile-title">Projects</p>
          <img src={folder2} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <SeeMoreLink to="tech-stack" />
        </div>
        <div>
          <p className="dashboard-tile-title">Exercises</p>
          <img src={edit} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <SeeMoreLink to="exercises" />
        </div>
        <div>
          <p className="dashboard-tile-title">Education</p>
          <img src={teacher} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <SeeMoreLink to="my-education" />
        </div>
        <div>
          <p className="dashboard-tile-title">Tech stack</p>
          <img src={codeSvg} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            Technology stack implemented on the course
          </p>
          <SeeMoreLink to="tech-stack" />
        </div>
        <div>
          <p className="dashboard-tile-title">Experience</p>
          <img src={statusup} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <SeeMoreLink to="experience" />
        </div>
      </div>
    </div>
  );
};
