import { Stack, Typography, CircularProgress, IconButton, Card, CardContent } from '@mui/material';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useEditTaskMutation, useGetTaskQuery } from 'api/client';
import { TaskForm } from 'components/blocks/TaskForm';
import { mapEditTaskToRequest } from 'src/domain/task';

export function EditTaskPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    return <Navigate to="/" replace />;
  }

  const { data, isLoading, isError } = useGetTaskQuery(id);
  const [editTask] = useEditTaskMutation();

  if (isLoading) {
    return (
      <Stack alignItems="center" paddingTop={4}>
        <CircularProgress />
      </Stack>
    );
  }

  if (isError || !data) {
    return <Navigate to="/404" replace />;
  }

  const handleBack = () => navigate(-1);

  const handleSubmit = async (form: Partial<typeof data>) => {
    const request = mapEditTaskToRequest({
      title: form.title,
      description: form.description,
      isImportant: form.isImportant,
      isCompleted: form.isCompleted,
    });

    await editTask({ id: id, data: request }).unwrap();
    navigate('/');
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" spacing={2}>
            <IconButton onClick={handleBack} aria-label="Назад">
              <ArrowBackIcon />
            </IconButton>
          </Stack>

          <Typography variant="h1">Редактирование задачи</Typography>

          <TaskForm initial={data} submitLabel="Обновить" onSubmit={handleSubmit} />
        </Stack>
      </CardContent>
    </Card>
  );
}
