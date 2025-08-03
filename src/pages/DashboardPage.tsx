import styled from 'styled-components';
import { Counter } from '../components/Counter';

export const DashboardPage = () => {
  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      <Description>
        Панель управления с основными метриками и элементами управления.
      </Description>

      <GridContainer>
        <Card>
          <CardTitle>Счетчик</CardTitle>
          <Counter />
        </Card>

        <Card>
          <CardTitle>Статистика</CardTitle>
          <StatText>Активные пользователи: 1,234</StatText>
          <StatText>Всего событий: 5,678</StatText>
          <StatText>Успешных операций: 98.5%</StatText>
        </Card>

        <Card>
          <CardTitle>Быстрые действия</CardTitle>
          <ActionButton>Создать событие</ActionButton>
          <ActionButton>Просмотр отчетов</ActionButton>
          <ActionButton>Настройки</ActionButton>
        </Card>
      </GridContainer>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0 0 10px 0;
`;

const Description = styled.p`
  margin: 0 0 30px 0;
  color: #666;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const Card = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const CardTitle = styled.h3`
  margin: 0 0 15px 0;
`;

const StatText = styled.p`
  margin: 5px 0;
  color: #333;
`;

const ActionButton = styled.button`
  margin: 5px;
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #0056b3;
  }
`;
