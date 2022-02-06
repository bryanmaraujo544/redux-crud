import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './styles.scss';
import { add } from '../.././features/users/usersSlice';
import { Header } from '../../components/Header';
import { TaskCard } from '../../components/TaskCard';
import { Modal } from '../../components/Modal';

export const Home = () => {
  const users = useSelector(state => state.users);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="home-container">
      <Header />
      <div className="tasks-container">
        <TaskCard
          title={'Title'}
          description={'Description'}
          setIsModalOpen={setIsModalOpen}
        />
        
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </div>
  );
}