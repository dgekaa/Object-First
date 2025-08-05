import React from 'react';
import type { JSX } from 'react';
import { ErrorIcon } from '../../icons';
import { Button } from '../Button';
import { ConfirmationModalProps } from './types';
import {
  ModalOverlay,
  ModalContainer,
  IconContainer,
  Content,
  Title,
  Message,
  Actions,
} from './styles';

export const ConfirmationModal = ({
  isOpen,
  title,
  message,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
}: ConfirmationModalProps): JSX.Element | null => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent): void => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <ModalOverlay onClick={handleBackdropClick}>
      <ModalContainer>
        <IconContainer>
          <ErrorIcon width={24} height={24} />
        </IconContainer>

        <Content>
          <Title>{title}</Title>
          <Message>{message}</Message>
        </Content>

        <Actions>
          <Button onClick={onConfirm} variant="danger">
            {confirmText}
          </Button>
          <Button onClick={onCancel} variant="text">
            {cancelText}
          </Button>
        </Actions>
      </ModalContainer>
    </ModalOverlay>
  );
};
