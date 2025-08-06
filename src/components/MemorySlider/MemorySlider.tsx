import React, {
  memo,
  useState,
  useRef,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import type { JSX } from 'react';
import { MemorySliderProps } from './types';
import { getSliderPosition, getValueFromPosition } from './utils';
import { isEmpty } from '../FormInput/utils';
import {
  SliderContainer,
  Slider,
  SliderTrack,
  SliderSegment,
  SliderIndicator,
  CurrentValue,
  SliderTick,
  SliderScale,
  SliderOption,
  RecommendedContainer,
  RecommendedBracket,
  RecommendedText,
} from './styles';

const MEMORY_OPTIONS = [
  { value: 0, label: '0 GB' },
  { value: 16, label: '16 GB' },
  { value: 32, label: '32 GB' },
  { value: 50, label: '50 GB' },
];

const MIN_MEMORY = 0;
const MAX_MEMORY = 50;

const MemorySliderComponent = ({
  value,
  onChange,
}: MemorySliderProps): JSX.Element => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const calculateValueFromMouseEvent = useCallback(
    (clientX: number): number => {
      if (!sliderRef.current) return 0;

      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((clientX - rect.left) / rect.width) * 100;
      return Math.max(
        MIN_MEMORY,
        Math.min(MAX_MEMORY, getValueFromPosition(position))
      );
    },
    []
  );

  const handleSliderClick = useCallback(
    (e: React.MouseEvent) => {
      const newValue = calculateValueFromMouseEvent(e.clientX);
      onChange(newValue);
    },
    [calculateValueFromMouseEvent, onChange]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      setIsDragging(true);
      handleSliderClick(e);
    },
    [handleSliderClick]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      const newValue = calculateValueFromMouseEvent(e.clientX);
      onChange(newValue);
    },
    [isDragging, calculateValueFromMouseEvent, onChange]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return (): void => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const handleOptionClick = useCallback(
    (optionValue: number): void => {
      onChange(optionValue);
    },
    [onChange]
  );

  const currentValue = useMemo(
    () => (isEmpty(value) ? 0 : Number(value)),
    [value]
  );

  const isIndicatorVisible = useMemo(
    () => currentValue >= MIN_MEMORY && currentValue <= MAX_MEMORY,
    [currentValue]
  );

  const sliderPosition = useMemo(() => getSliderPosition(value), [value]);

  const memoryOptionsElements = useMemo(
    () =>
      MEMORY_OPTIONS.map(option => (
        <SliderOption
          key={option.value}
          active={currentValue === option.value}
          position={(option.value / MAX_MEMORY) * 100}
          onClick={() => handleOptionClick(option.value)}
        >
          {option.label}
        </SliderOption>
      )),
    [currentValue, handleOptionClick]
  );

  return (
    <SliderContainer>
      <Slider
        ref={sliderRef}
        onClick={handleSliderClick}
        onMouseDown={handleMouseDown}
      >
        <SliderTrack>
          <SliderSegment color="var(--color-gray-300)" width={32} />
          <SliderSegment color="var(--color-green)" width={32} />
          <SliderSegment color="var(--color-yellow)" width={36} />
        </SliderTrack>

        {isIndicatorVisible && (
          <SliderIndicator position={sliderPosition} isDragging={isDragging} />
        )}

        {isIndicatorVisible && (
          <CurrentValue position={sliderPosition} isDragging={isDragging}>
            {currentValue} GB
          </CurrentValue>
        )}

        <SliderTick position={32} />
        <SliderTick position={64} />
      </Slider>

      <SliderScale>{memoryOptionsElements}</SliderScale>

      <RecommendedContainer>
        <RecommendedBracket />
        <RecommendedText>Recommended</RecommendedText>
      </RecommendedContainer>
    </SliderContainer>
  );
};

export const MemorySlider = memo(MemorySliderComponent);
