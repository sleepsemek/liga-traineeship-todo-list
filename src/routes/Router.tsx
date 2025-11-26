import { Route, Routes } from 'react-router-dom';
import { TasksPage } from 'pages/TasksPage';
import { CreateTaskPage } from 'pages/CreateTaskPage';
import { EditTaskPage } from 'pages/EditTaskPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/task_form" element={<CreateTaskPage />} />
      <Route path="/task_form/:id" element={<EditTaskPage />} />
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
