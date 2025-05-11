import styled from 'styled-components';
import { CardModalProps } from '../types';

const Modal = styled.div<{ isOpen: boolean }>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Content = styled.div`
  position: relative;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  width: 90%;
  max-height: 90vh;
  overflow: auto;
  text-align: center;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff3333;
  color: white;
  border-radius: 50%;
  padding: 5px 12px;
  cursor: pointer;
  font-size: 22px;
  box-shadow: 0 0 10px #000;
  z-index: 10;
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  max-height: 80vh;
  border-radius: 10px;
  display: block;
`;

const CardModal: React.FC<CardModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      <Content>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <CardImage src="/vesak-card.jpg" alt="Vesak Card" />
      </Content>
    </Modal>
  );
};

export default CardModal; 