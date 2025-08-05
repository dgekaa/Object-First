import styled from 'styled-components';

export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Badge = styled.div<{
  color?: string;
  size?: number;
}>`
  position: absolute;
  top: 7px;
  right: 8px;
  width: ${(props): string => (props.size ? `${props.size}px` : '10px')};
  height: ${(props): string => (props.size ? `${props.size}px` : '10px')};
  background-color: ${(props): string => props.color || 'var(--color-purple)'};
  border-radius: 50%;
  border: 2px solid white;
`;
