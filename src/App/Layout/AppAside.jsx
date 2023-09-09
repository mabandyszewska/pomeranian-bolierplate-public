import './styles/aside.css';
import { NavLink } from 'react-router-dom';
import { CodeIcon } from '../../App/Components/Icons/CodeIcon';
import { PersonalCardIcon } from '../../App/Components/Icons/PersonalCardIcon';
import { HouseIcon } from '../../App/Components/Icons/HouseIcon';
import { EditIcon } from '../../App/Components/Icons/EditIcon';
import { BookIcon } from '../Components/Icons/BookIcon';
import { FaqIcon } from '../Components/Icons/FaqIcon';
import { MoleGameIcon } from '../Components/Icons/MoleGameIcon';
import { MemoGameIcon } from '../Components/Icons/MemoGameIcon';

export function AppAside({ visible }) {
  return (
    <aside className={visible ? 'aside-visible' : ''}>
      <nav>
        <ul>
          <li>
            <NavLink to="dashboard">
              <HouseIcon className="icon" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="cv">
              <PersonalCardIcon className="icon" />
              <span>Moje CV</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="tech-stack">
              <CodeIcon className="icon" />
              <span>Tech stack</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="exercises">
              <EditIcon className="icon" />
              <span>Ćwiczenia</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="mole-game">
              <MoleGameIcon className="icon" />
              <span>Game | Hit the Mole </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="memo-game">
              <MemoGameIcon className="icon" />
              <span>Game | Memo </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="form">
              <BookIcon className="icon" />
              <span>Form</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="faq">
              <FaqIcon className="icon" />
              <span>FAQ</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
