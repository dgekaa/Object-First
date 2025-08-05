import styled from 'styled-components';

export const CardContainer = styled.div`
  background: var(--color-surface);
  border-radius: 16px;
  padding: 24px;
  min-width: 0;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChartTitle = styled.h3`
  font-weight: 600;
  font-size: 16px;
  color: var(--color-text-primary);
  margin: 0;
`;
