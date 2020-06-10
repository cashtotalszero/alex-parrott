import styled from 'styled-components';
import PropTypes from 'prop-types';

import Modal from './Modal';
import Emoji from './Emoji';
import Button from './Button';
import { SMILING_FACE, HALO as HALO_FACE, FLUSHED_FACE } from '../constants/emojis';

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillsModal = ({ isOpen, setIsOpen }) => (
  <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} label="Skills description modal">
    <ModalContent>
      <Button onClick={() => setIsOpen(false)}>close</Button>
      <h2>Skill levels</h2>
      <ul>
        <li>
          <Emoji unicode={HALO_FACE} label="Smiling face with halo" />
          <span> = I use this regularly and know it well.</span>
        </li>
        <li>
          <Emoji unicode={SMILING_FACE} label="Smiling face" />
          <span> = I have used this professionally or in personal projects at some point before.</span>
        </li>
        <li>
          <Emoji unicode={FLUSHED_FACE} label="Flushed face" />
          <span> = I have used this in a limited capacity or am in the process of learning it.</span>
        </li>
      </ul>
    </ModalContent>
  </Modal>
);

SkillsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default SkillsModal;
