import styled from 'styled-components';
import { Z_INDEX } from '../../styles';

/* Common styled components */
export const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin: 0 0 8px 0;
`;

export const SectionDescription = styled.p`
  font-size: 14px;
  color: var(--color-text-secondary);
  margin: 0 0 32px 0;
  line-height: 1.5;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;
`;

/* WizardSidebar styles */
export const LeftPanel = styled.div`
  width: 244px;
  background: var(--color-purple);
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const WelcomeText = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
`;

export const ModalTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: 600;
  margin: 0 0 24px 0;
  line-height: 1.3;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;

export const WizardSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 40px;
`;

export const StepItem = styled.div.withConfig({
  shouldForwardProp: (prop): boolean => !['active', 'completed'].includes(prop),
})<{ active: boolean; completed?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-left: ${(props): string =>
    props.active || props.completed ? '0' : '-30px'};
`;

export const StepNumber = styled.div.withConfig({
  shouldForwardProp: (prop): boolean => !['active', 'completed'].includes(prop),
})<{ active: boolean; completed?: boolean }>`
  width: 24px;
  height: 24px;
  background: transparent;
  color: ${(props): string => {
    if (props.completed) return 'var(--color-background-subtle)';
    if (props.active) return 'var(--color-light-gray)';
    return 'rgba(255, 255, 255, 0.6)';
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

export const StepText = styled.div.withConfig({
  shouldForwardProp: (prop): boolean => !['active', 'completed'].includes(prop),
})<{ active?: boolean; completed?: boolean }>`
  color: ${(props): string => {
    if (props.completed) return 'var(--color-background-subtle)';
    if (props.active) return 'var(--color-light-gray)';
    return 'rgba(255, 255, 255, 0.6)';
  }};
  font-size: 14px;
  font-weight: 500;
`;

export const DecorationContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 85%;
  overflow: hidden;
  pointer-events: none;
`;

export const DecorationImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom right;
  opacity: 1;
`;

/* NewVMModal styles */
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${Z_INDEX.MODAL_MEDIUM};
  backdrop-filter: blur(4px);
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 678px;
  height: 608px;
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: var(--color-text-secondary);
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s;

  &:hover {
    background: var(--color-background-subtle);
    color: var(--color-text-primary);
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
  height: 40px;
  background: white;
`;

export const ModalHeaderTitle = styled.h2`
  margin: 0;
  font-weight: 500;
  font-style: medium;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: var(--color-purple);
`;

export const ModalContent = styled.div`
  display: flex;
  height: calc(608px - 40px);
`;

export const RightPanel = styled.div`
  flex: 1;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentArea = styled.div`
  max-width: 400px;
  flex: 1;
`;

export const ActionsArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: auto;
`;

/* VMSummaryStep styles */
export const SummaryContainer = styled.div`
  background: var(--color-background-subtle);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
`;

export const SummaryRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid var(--color-border-subtle);

  &:last-child {
    border-bottom: none;
  }
`;

export const SummaryLabel = styled.div`
  font-size: 14px;
  color: var(--color-text-secondary);
  font-weight: 500;
`;

export const SummaryValue = styled.div`
  font-size: 14px;
  color: var(--color-text-primary);
  font-weight: 600;
  padding-left: 24px;
`;
