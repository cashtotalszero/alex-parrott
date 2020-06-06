// import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Lexend Tera';
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  cursor: pointer;
`;

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    // margin: '1px',
  },
  overlay: {
    backgroundColor: 'rgba(55,55,55,0.6)',
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#__next');

function App({ isOpen, children, onClose }) {
  let subtitle;
  // const [modalIsOpen, setIsOpen] = React.useState(false);
  // function openModal() {
  //   setIsOpen(true);
  // }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    // setIsOpen(false);
    onClose();
  }

  return (
    <div>
      {/* <button type="button" onClick={openModal}>
        Open Modal
      </button> */}
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        {/* <StyledButton type="button" onClick={closeModal}>
          close
        </StyledButton> */}

        {children}
      </Modal>
    </div>
  );
}

export default App;
