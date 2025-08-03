import styled from 'styled-components';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import {
  increment,
  decrement,
  incrementByAmount,
} from '../store/slices/counterSlice';

export const Counter = () => {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <CounterContainer>
      <CounterTitle>Counter: {count}</CounterTitle>
      <ButtonContainer>
        <CounterButton onClick={() => dispatch(increment())}>+</CounterButton>
        <CounterButton onClick={() => dispatch(decrement())}>-</CounterButton>
        <CounterButton onClick={() => dispatch(incrementByAmount(5))}>
          +5
        </CounterButton>
      </ButtonContainer>
    </CounterContainer>
  );
};

const CounterContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const CounterTitle = styled.h2`
  margin: 0 0 20px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 20px;
`;

const CounterButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }

  &:active {
    background-color: #004085;
  }
`;
