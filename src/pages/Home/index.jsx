import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import { Header } from '../../components/Header';
import { TaskCard } from '../../components/TaskCard';
import { Modal } from '../../components/Modal';

export const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = useSelector(state => state.users.value);

  return (
    <div className="home-container">
      <Header />
      <div className="tasks-container">
        {users.map(({ title, description, id }) => (
          <TaskCard
            key={`${title}${description}`}
            title={title}
            description={description}
            id={id}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
        
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}