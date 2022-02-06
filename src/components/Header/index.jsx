import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { addUser } from '../../features/users/usersSlice';
import './styles.scss';

export const Header = () => {
  const [taskInfos, setTaskInfos] = useState({ title: '', description: '' });

  const users = useSelector(state => state.users.value);
  const usersDispatch = useDispatch();
  
  function handleSubmit(e) {
    e.preventDefault();
    const hasFieldEmpty = (taskInfos.title === '' || taskInfos.description === '');
    const hasTaskWithSameTitle = (users.some((user) => user.title === taskInfos.title));

    if (hasFieldEmpty) {
      return window.alert('Some field is empty!!!!');
    }

    if (hasTaskWithSameTitle) {
      return window.alert('Already exists one task with this title');
    }
    
    usersDispatch(addUser(taskInfos));
  }

  console.log({ users });
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