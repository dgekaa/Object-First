export interface MemorySliderProps {
  value: number | string;
  onChange: (value: number) => void;
}

export interface StyledSliderSegmentProps {
  color: string;
  width: number;
}

export interface StyledPositionProps {
  position: number;
  isDragging: boolean;
}

export interface StyledSliderTickProps {
  position: number;
}

export interface StyledSliderOptionProps {
  active?: boolean;
  position?: number;
}
