import { useDispatch } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';

import './styles.scss';
import { removeUser } from '../../features/users/usersSlice';

export const TaskCard = ({ title, description, id, setIsModalOpen }) => {
  const usersDispatch = useDispatch();

  function handleRemoveUser() {
    usersDispatch(removeUser(id))
  }

  return (
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
  );
}