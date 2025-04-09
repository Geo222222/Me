import React from 'react';
import Modal from 'react-modal';
import { Document, Page } from 'react-pdf';

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onRequestClose, content, type }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          maxWidth: '600px',
          padding: '20px',
          backgroundColor: '#1a1a1a',
          color: '#fff',
          borderRadius: '10px',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
        },
      }}
    >
      <button onClick={onRequestClose} style={{ float: 'right' }}>Close</button>
      {type === 'resume' && (
        <div style={{ height: '500px' }}>
          <Document file={content}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
      {type === 'projects' && (
        <div>
          <h2>My Projects</h2>
          <ul>
            {content.map((repo) => (
              <li key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {type === 'skills' && (
        <div>
          <h2>My Skills</h2>
          <ul>
            {content.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
      {type === 'contact' && (
        <div>
          <h2>Contact Me</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="email" name="email" />
            </label>
            <label>
              Message:
              <textarea name="message"></textarea>
            </label>
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </Modal>
  );
};

export default ModalComponent;
