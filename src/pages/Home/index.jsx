import { useSelector } from 'react-redux';

import './styles.scss';
import { Header } from '../../components/Header';
import { TaskCard } from '../../components/TaskCard';

export const Home = () => {

  const tasks = useSelector(state => state.tasks.value);

  return (
    <div className="home-container">
      <Header />
      <div className="tasks-container">
        {tasks.map(({ title, description, id }) => (
          <TaskCard
            key={`${title}${description}`}
            title={title}
            description={description}
            id={id}
          />
        ))}
        
      </div>
     
    </div>
  );
}