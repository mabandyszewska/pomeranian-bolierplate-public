import './styles.css';
import { MyData } from '../Dashboard/MyData/MyData';
import { Blocks } from '../Dashboard/Blocks/Blocks';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Blocks />
      <MyData />
    </div>
  );
};
