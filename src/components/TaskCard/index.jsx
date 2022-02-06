import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';

import './styles.scss';

export const TaskCard = ({ title, description, setIsModalOpen }) => {
  return (
    <div className="task-card-container">
      <div className="info-container">
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </div>
      <div className="btns-container">
        <AiOutlineEdit className="icon" onClick={() => setIsModalOpen(true)} />
        <RiDeleteBinLine className="icon" />
      </div>

    </div>
  );
}