import { Route, Routes } from 'react-router-dom';
import { TasksPage } from 'pages/TasksPage/TasksPage';
import { PageContainer } from 'src/pages/PageContainer';
import { NotFoundPage } from 'pages/NotFoundPage';
import { EditTaskPage } from 'pages/EditTaskPage';
import { CreateTaskPage } from 'pages/CreateTaskPage';

export function App() {
  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/task_form" element={<CreateTaskPage />} />
        <Route path="/task_form/:id" element={<EditTaskPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </PageContainer>
  );
}
