import { useDispatch } from 'react-redux';
import { useState } from 'react';
import ReactDOM from 'react-dom';

import { updateTask } from '../../features/tasks/tasksSlice';
import { IoCloseSharp } from 'react-icons/io5';
import './styles.scss';
import { useSelector } from 'react-redux';


export const Modal = ({ isModalOpen, setIsModalOpen, oldTaskInfos }) => {
  const [taskInfos, setTaskInfos] = useState({ title: oldTaskInfos.title, description: oldTaskInfos.description });

  const tasksDispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.value);

  function handleSubmit(e) {
    e.preventDefault();

    const hasFieldEmpty = (taskInfos.title === '' || taskInfos.description === '');
    const hasTaskWithSameInfos = (tasks.some((task) => (
      task.title === taskInfos.title && task.description === taskInfos.description
    )));

    if (hasFieldEmpty) {
      return window.alert('Some field is empty!!!!');
    }

    if (hasTaskWithSameInfos) {
      return window.alert('Already exists one task with this title');
    }

    tasksDispatch(updateTask({ ...taskInfos, id: oldTaskInfos.id }));

    setIsModalOpen(false);
  }

  return ReactDOM.createPortal(
    <div 
      className={`overlay ${isModalOpen ? 'is-open' : ''}`}
    >
      <div className="modal-container">
          <div className="modal-container">
            <header className="header">
              <h3 className="title">Edit task</h3>
              <IoCloseSharp className="close-icon" onClick={() => setIsModalOpen(false)}/>
            </header>
            <form
              onSubmit={handleSubmit}
            >
              <input 
                value={taskInfos.title} 
                onChange={(e) => setTaskInfos(({ description }) => {
                  return { title: e.target.value, description };
                })} 
                placeholder="New title"
              />
              <input 
                value={taskInfos.description}
                onChange={(e) => setTaskInfos(({ title }) => {
                  return { title, description: e.target.value };
                })} 
                placeholder="New description"
              />
              <button type="submit">Update</button>
            </form>
          </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}