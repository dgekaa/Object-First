import styled from 'styled-components';
import { IndicatorIcon } from '../../icons';
import { Z_INDEX } from '../../styles';
import {
  StyledSliderSegmentProps,
  StyledPositionProps,
  StyledSliderTickProps,
  StyledSliderOptionProps,
} from './types';

export const SliderContainer = styled.div`
  margin: 16px 0;
`;

export const SliderTrack = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 6px;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  background: #f0f0f0;
`;

export const Slider = styled.div`
  position: relative;
  height: 6px;
  margin: 12px 0 0 0;
  cursor: pointer;
  user-select: none;
`;

export const SliderSegment = styled.div.withConfig({
  shouldForwardProp: (prop): boolean => prop !== 'color' && prop !== 'width',
})<StyledSliderSegmentProps>`
  width: ${(props): string => `${props.width}%`};
  background: ${(props): string => props.color};
  height: 100%;
`;

export const SliderIndicator = styled(IndicatorIcon).withConfig({
  shouldForwardProp: (prop): boolean =>
    prop !== 'position' && prop !== 'isDragging',
})<StyledPositionProps>`
  position: absolute;
  top: -14px;
  left: ${(props): string => `${props.position}%`};
  transform: translateX(-50%);
  z-index: ${Z_INDEX.BASE};
  color: var(--color-purple);
  cursor: pointer;
  transition: ${(props): string =>
    props.isDragging ? 'none' : 'all 0.2s ease'};

  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
`;

export const CurrentValue = styled.div.withConfig({
  shouldForwardProp: (prop): boolean =>
    prop !== 'position' && prop !== 'isDragging',
})<StyledPositionProps>`
  position: absolute;
  top: 14px;
  left: ${(props): string => `${props.position}%`};
  transform: translateX(-50%);
  color: var(--color-purple);
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
  transition: ${(props): string =>
    props.isDragging ? 'none' : 'all 0.2s ease'};
  padding: 4px 8px;
  border-radius: 4px;
  background: white;
  z-index: ${Z_INDEX.BASE};

  &:hover {
    background: rgba(var(--color-purple-rgb), 0.1);
  }
`;

export const SliderTick = styled.div.withConfig({
  shouldForwardProp: (prop): boolean => prop !== 'position',
})<StyledSliderTickProps>`
  position: absolute;
  left: ${(props): string => `${props.position}%`};
  top: -8px;
  width: 1px;
  height: 18px;
  background: #d1d5db;
  transform: translateX(-50%);
  z-index: ${Z_INDEX.BASE + 1};
`;

export const SliderScale = styled.div`
  display: flex;
  position: relative;
  margin: 8px 0 12px 0;
  padding: 0;
`;

export const SliderOption = styled.div.withConfig({
  shouldForwardProp: (prop): boolean =>
    prop !== 'active' && prop !== 'position',
})<StyledSliderOptionProps>`
  position: ${(props): string =>
    props.position !== undefined ? 'absolute' : 'static'};
  left: ${(props): string =>
    props.position !== undefined ? `${props.position}%` : 'auto'};
  transform: ${(props): string =>
    props.position !== undefined ? 'translateX(-50%)' : 'none'};
  font-size: 12px;
  color: ${(props): string =>
    props.active ? 'var(--color-purple)' : 'var(--color-text-secondary)'};
  font-weight: ${(props): string => (props.active ? '600' : '400')};
  cursor: pointer;
  transition: color 0.2s ease;
  padding: 4px 8px;
  border-radius: 4px;
  user-select: none;
  white-space: nowrap;

  &:hover {
    color: var(--color-purple);
    background: rgba(var(--color-purple-rgb), 0.1);
  }
`;

export const RecommendedContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
`;

export const RecommendedBracket = styled.div`
  position: absolute;
  top: 5px;
  left: 32%;
  right: 36%;
  height: 12px;
  border: 1px solid #d1d5db;
  border-top: none;
  border-radius: 0 0 4px 4px;

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    height: 1px;
    background: white;
  }
`;

export const RecommendedText = styled.div`
  font-size: 12px;
  color: var(--color-text-secondary);
  font-weight: 400;
  margin-top: 18px;
  margin-bottom: 0;
`;
