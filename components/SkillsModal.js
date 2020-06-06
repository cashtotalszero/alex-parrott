import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import Modal from './Modal';
import Emoji from './Emoji';

import { SMILING_FACE, HALO as HALO_FACE, FLUSHED_FACE } from '../constants/emojis';

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled.a`
  font-family: 'Lexend Tera';
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: ${({ theme }) => theme.colors.black};
  color: white;
  cursor: pointer;
  padding: 5px;
  width: 75px;
  text-align: center;
  align-self: flex-end;
`;

const SkillsModal = ({ isOpen, setIsOpen }) => (
  <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
    <ModalContent>
      <Link href="/tech">
        <StyledLink onClick={() => setIsOpen(false)}>close</StyledLink>
      </Link>
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

export default SkillsModal;
