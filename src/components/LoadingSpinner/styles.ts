import styled, { keyframes } from 'styled-components';

export const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 20px;
`;

export const Spinner = styled.div.withConfig({
  shouldForwardProp: prop => prop !== 'size',
})<{ size: number }>`
  width: ${(props): number => props.size}px;
  height: ${(props): number => props.size}px;
  border: 2px solid var(--color-border-subtle);
  border-top: 2px solid var(--color-purple);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export const Message = styled.span`
  font-size: 14px;
  color: var(--color-text-secondary);
  font-weight: 500;
`;
