import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.26)',
  },
  overlay: {
    backgroundColor: 'rgba(55,55,55,0.6)',
  },
};

Modal.setAppElement('#__next');

function App({ isOpen, children, onClose, label }) {
  function closeModal() {
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} contentLabel={label || 'Modal'}>
      {children}
    </Modal>
  );
}

export default App;
