import './styles.css';
import { Link } from 'react-router-dom';
import codeSvg from '../../Images/tiles/code.svg';
import personalcard from '../../Images/tiles/personalcard.svg';
import edit from '../../Images/tiles/edit.svg';
import note from '../../Images/tiles/note.svg';
import messages from '../../Images/tiles/messages.svg';

export const Tiles = () => {
  const SeeMoreLink = (props) => {
    return <Link to={props.to}>See more</Link>;
  };

  return (
    <div className="dashboard-tiles-container">
      <img src="../../Images/waving-hand-sign.jpg" alt="waving hand sign" />
      <h3 className="dashboard-heading-hello">Hi, I'm Marta!</h3>
      <p>
        Below you will find the most important information about my activities.
      </p>
      <div className="dashboard-tiles">
        <div>
          <p className="dashboard-tile-title">My CV</p>
          <img src={personalcard} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            cv preview along with experience
          </p>
          <SeeMoreLink to="my-cv" />
        </div>
        <div>
          <p className="dashboard-tile-title">Exercises</p>
          <img src={edit} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            all the exercises performed
          </p>
          <SeeMoreLink to="exercises" />
        </div>
        <div>
          <p className="dashboard-tile-title">Form</p>
          <img src={note} alt="icon note" />
          <p className="dashboard-tile-description">order contact form</p>
          <SeeMoreLink to="form" />
        </div>
        <div>
          <p className="dashboard-tile-title">Tech stack</p>
          <img src={codeSvg} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            technology stack implemented on the course
          </p>
          <SeeMoreLink to="tech-stack" />
        </div>
        <div>
          <p className="dashboard-tile-title">FAQ</p>
          <img src={messages} alt="icon tech stack" />
          <p className="dashboard-tile-description">
            answers to the most common questions
          </p>
          <SeeMoreLink to="faq" />
        </div>
      </div>
    </div>
  );
};
