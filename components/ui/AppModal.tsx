import React from 'react';
import Modal from 'react-modal';
import { palette5, shadowLighter } from '../../styles/styles';

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

type Props = {
    isOpen: boolean;
    onClose: (e: any) => void;
    label: string;
    children: JSX.Element | JSX.Element[];
};

export const AppModal = ({ isOpen, children, onClose, label }: Props) => (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        contentLabel={label || 'Modal'}
    >
        {children}
    </Modal>
);
