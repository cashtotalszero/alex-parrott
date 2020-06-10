import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { palette5, shadowLighter } from '../styles';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderLeft: `solid 20px ${palette5}`,
  },
  overlay: {
    backgroundColor: `${shadowLighter}`,
  },
};

Modal.setAppElement('#__next');

function AppModal({ isOpen, children, onClose, label }) {
  function closeModal() {
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles} contentLabel={label || 'Modal'}>
      {children}
    </Modal>
  );
}

AppModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default AppModal;
