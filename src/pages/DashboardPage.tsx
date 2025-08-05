import styled from 'styled-components';
import { useState, useCallback, useMemo, Suspense, lazy } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { StateChart } from '../components/StateChart';
import { TrendChart } from '../components/TrendChart';
import { ServerTable } from '../components/ServerTable';
import { LoadingSpinner } from '../components/LoadingSpinner';
import { Button } from '../components/Button/';
import { addServer } from '../store/slices/serverSlice';
import type { JSX } from 'react';

const NewVMModal = lazy(() =>
  import('../components/Wizard').then(m => ({ default: m.NewVMModal }))
);

export const DashboardPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const servers = useAppSelector(state => state.servers.servers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleVMCreate = useCallback(
    (vmName: string, cpuCount?: number | string) => {
      dispatch(addServer({ name: vmName, cpuCount }));
      setIsModalOpen(false);
    },
    [dispatch]
  );

  const serversCount = useMemo(() => servers.length, [servers.length]);

  return (
    <>
      <DashboardContainer>
        <TopSection>
          <StateChart title="State" />
          <TrendChart title="Trend" period="Last 14 days" />
        </TopSection>

        <VirtualMachinesSection>
          <VMHeader>
            <VMTitle>
              Virtual machines <VMCount>{serversCount}</VMCount>
            </VMTitle>
            <Button onClick={handleNewClick} icon={<PlusIcon>+</PlusIcon>}>
              New
            </Button>
          </VMHeader>

          <ServerTable servers={servers} />
        </VirtualMachinesSection>
      </DashboardContainer>

      {isModalOpen && (
        <Suspense fallback={<LoadingSpinner />}>
          <NewVMModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            onSubmit={handleVMCreate}
          />
        </Suspense>
      )}
    </>
  );
};

const DashboardContainer = styled.div`
  padding: 20px 0;
  max-width: 1200px;
  margin: 0 auto;
`;

const PlusIcon = styled.span`
  font-size: 16px;
  font-weight: 300;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 440px 1fr;
  gap: 16px;
  margin-bottom: 32px;
  max-width: 100%;
  height: 292px;

  @media (max-width: 1240px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const VirtualMachinesSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const VMHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 24px 0;
`;

const VMTitle = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: var(--color-text-primary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const VMCount = styled.span`
  color: var(--color-purple);
  font-size: 14px;
  font-weight: 500;
`;
