import styled from 'styled-components';
import { Z_INDEX } from '../../styles';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${Z_INDEX.MODAL_HIGH};
  backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.div`
  background: var(--color-red-light);
  border-radius: 16px;
  padding: 24px;
  max-width: 312px;
  height: 240px;
  width: 90%;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const IconContainer = styled.div`
  color: var(--color-red);
`;

export const Content = styled.div`
  margin-bottom: 24px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 8px 0;
`;

export const Message = styled.p`
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0;
  line-height: 1.5;
`;

export const Actions = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  justify-content: flex-end;
  margin-top: 16px;
`;
