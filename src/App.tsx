import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { GlobalStyles } from './styles';
import { Layout } from './components/Layout';

import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import type { JSX } from 'react';
import { LoadingSpinner } from './components/LoadingSpinner';

const EventsPage = lazy(() =>
  import('./pages/EventsPage').then(m => ({ default: m.EventsPage }))
);

const MyProfilePage = lazy(() =>
  import('./pages/MyProfilePage').then(m => ({ default: m.MyProfilePage }))
);

const NotificationsPage = lazy(() =>
  import('./pages/NotificationsPage').then(m => ({
    default: m.NotificationsPage,
  }))
);

const App = (): JSX.Element => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route
            path="events"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <EventsPage />
              </Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <MyProfilePage />
              </Suspense>
            }
          />
          <Route
            path="notifications"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <NotificationsPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
