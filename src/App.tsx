import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { EventsPage } from './pages/EventsPage';
import { MyProfilePage } from './pages/MyProfilePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="profile" element={<MyProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
