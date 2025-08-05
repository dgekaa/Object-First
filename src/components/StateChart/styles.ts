import styled from 'styled-components';
import { SvgContainerProps, ColorDotProps } from './types';

export const ChartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: 1240px) {
    justify-content: center;
    gap: 40px;
  }
`;

export const SvgContainer = styled.div.withConfig({
  shouldForwardProp: (prop): boolean => !['width', 'height'].includes(prop),
})<SvgContainerProps>`
  position: relative;
  width: ${(props): string => `${props.width}px`};
  height: ${(props): string => `${props.height}px`};
`;

export const CenterContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const TotalNumber = styled.div`
  font-weight: 700;
  font-size: 40px;
  color: var(--color-text-primary);
  line-height: 1;
`;

export const TotalLabel = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: var(--color-text-secondary);
  margin-top: 4px;
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 480px) {
    align-items: center;
    width: 100%;
  }
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  @media (max-width: 480px) {
    justify-content: center;
    width: fit-content;
  }
`;

export const LegendLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ColorDot = styled.div.withConfig({
  shouldForwardProp: (prop): boolean => prop !== 'color',
})<ColorDotProps>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${(props): string => props.color};
  flex-shrink: 0;
`;

export const LegendValue = styled.span`
  font-weight: 700;
  font-size: 16px;
  color: var(--color-text-primary);
`;

export const LegendLabel = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: var(--color-text-primary);
  flex: 1;
  text-align: left;
`;

export const AnimatedCircle = styled.circle`
  transition:
    stroke-dasharray 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    stroke-dashoffset 0.6s cubic-bezier(0.4, 0, 0.2, 1),
    stroke 0.3s ease;

  &:hover {
    filter: brightness(1.1);
  }
`;
