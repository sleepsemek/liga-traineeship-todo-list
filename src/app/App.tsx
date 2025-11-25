import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { store } from '../store';
import { theme } from '../theme';
import { TasksPage } from 'pages/TasksPage/TasksPage';
import { PageContainer } from 'src/pages/PageContainer';
import { NotFoundPage } from 'pages/NotFoundPage';
import { EditTaskPage } from 'pages/EditTaskPage';
import { CreateTaskPage } from 'pages/CreateTaskPage';
//TODO: вынести routes
export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageContainer>
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/task_form" element={<CreateTaskPage />} />
            <Route path="/task_form/:id" element={<EditTaskPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </PageContainer>
      </ThemeProvider>
    </Provider>
  );
}
