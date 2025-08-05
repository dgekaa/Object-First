import React, { memo, useState, useRef, useCallback, useEffect } from 'react';
import type { JSX } from 'react';
import { MemorySliderProps } from './types';
import { getSliderPosition, getValueFromPosition } from './utils';
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

const MemorySliderComponent = ({
  value,
  onChange,
}: MemorySliderProps): JSX.Element => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const memoryOptions = [
    { value: 0, label: '0 GB' },
    { value: 16, label: '16 GB' },
    { value: 32, label: '32 GB' },
    { value: 50, label: '50 GB' },
  ];

  const handleSliderClick = useCallback(
    (e: React.MouseEvent) => {
      if (!sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((e.clientX - rect.left) / rect.width) * 100;
      const newValue = Math.max(
        0,
        Math.min(50, getValueFromPosition(position))
      );
      onChange(newValue);
    },
    [onChange]
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
      if (!isDragging || !sliderRef.current) return;

      const rect = sliderRef.current.getBoundingClientRect();
      const position = ((e.clientX - rect.left) / rect.width) * 100;
      const newValue = Math.max(
        0,
        Math.min(50, getValueFromPosition(position))
      );
      onChange(newValue);
    },
    [isDragging, onChange]
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

  const handleOptionClick = (optionValue: number): void => {
    onChange(optionValue);
  };

  const currentValue = value === '' ? 0 : Number(value);

  const isIndicatorVisible = currentValue >= 0 && currentValue <= 50;

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
          <SliderIndicator
            position={getSliderPosition(value)}
            isDragging={isDragging}
          />
        )}

        {isIndicatorVisible && (
          <CurrentValue
            position={getSliderPosition(value)}
            isDragging={isDragging}
          >
            {currentValue} GB
          </CurrentValue>
        )}

        <SliderTick position={32} />
        <SliderTick position={64} />
      </Slider>

      <SliderScale>
        {memoryOptions.map(option => (
          <SliderOption
            key={option.value}
            active={currentValue === option.value}
            position={(option.value / 50) * 100}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </SliderOption>
        ))}
      </SliderScale>

      <RecommendedContainer>
        <RecommendedBracket />
        <RecommendedText>Recommended</RecommendedText>
      </RecommendedContainer>
    </SliderContainer>
  );
};

export const MemorySlider = memo(MemorySliderComponent);
