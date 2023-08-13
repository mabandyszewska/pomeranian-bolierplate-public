import './styles.css';
import { MyData } from '../Dashboard/MyData/MyData';
import { Tiles } from '../Dashboard/Tiles/Tiles';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Tiles />
      <MyData />
    </div>
  );
};
