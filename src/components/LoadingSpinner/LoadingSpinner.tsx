import type { JSX } from 'react';
import { Container, Spinner, Message } from './styles';
import { LoadingSpinnerProps } from './types';

export const LoadingSpinner = ({
  size = 24,
  message,
}: LoadingSpinnerProps): JSX.Element => (
  <Container>
    <Spinner size={size} />
    {message && <Message>{message}</Message>}
  </Container>
);
