import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addTask } from '../../features/tasks/tasksSlice';
import './styles.scss';

export const Header = () => {
  const [taskInfos, setTaskInfos] = useState({ title: '', description: '' });

  const tasks = useSelector(state => state.tasks.value);
  const tasksDispatch = useDispatch();
  
  function handleSubmit(e) {
    e.preventDefault();
    const hasFieldEmpty = (taskInfos.title === '' || taskInfos.description === '');
    const hasTaskWithSameTitle = (tasks.some((task) => task.title === taskInfos.title));

    if (hasFieldEmpty) {
      return window.alert('Some field is empty!!!!');
    }

    if (hasTaskWithSameTitle) {
      return window.alert('Already exists one task with this title');
    }
    
    tasksDispatch(addTask({...taskInfos, id: `${taskInfos.title + taskInfos.description}`}));
  }

  console.log({ tasks });
  return (
    <header className="header-container">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type a task title"
          value={taskInfos.title}
          onChange={(e) => setTaskInfos(({ description }) => {
            return { description, title: e.target.value}
          })}
        />
        <input
          value={taskInfos.description}
          placeholder="Type a task description"
          onChange={(e) => setTaskInfos(({ title }) => {
            return { title, description: e.target.value}
          })}
        />
        <button type="submit">Criar</button>
      </form>
    </header>
  )
}