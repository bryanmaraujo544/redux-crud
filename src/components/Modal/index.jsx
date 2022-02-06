import ReactDOM from 'react-dom';
import { IoCloseSharp } from 'react-icons/io5';

import './styles.scss';


export const Modal = ({ isModalOpen, setIsModalOpen }) => {

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
            <form>
              <input type="text" placeholder="New title" />
              <input type="text" placeholder="New description" />
              <button type="submit">Update</button>
            </form>
          </div>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}