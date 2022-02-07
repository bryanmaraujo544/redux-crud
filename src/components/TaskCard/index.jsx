import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';

import './styles.scss';
import { removeTask } from '../../features/tasks/tasksSlice';
import { useSelector } from 'react-redux';
import { Modal } from '../Modal';

export const TaskCard = ({ title, description, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tasksDispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.value);
  const [task] = tasks.filter((task) => task.id === id);

  function handleRemoveUser() {
    tasksDispatch(removeTask(id));
  }

  return (
    <>
      <div className="task-card-container">
        <div className="info-container">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>
        <div className="btns-container">
          <AiOutlineEdit className="icon" onClick={() => setIsModalOpen(true)} />
          <RiDeleteBinLine className="icon" onClick={handleRemoveUser} />
        </div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        oldTaskInfos={task}
      />
    </>
  );
}