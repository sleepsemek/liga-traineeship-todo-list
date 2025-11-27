import { Card, CardContent, IconButton, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Task } from '../../domain/task/task';
import { mapCreateTaskToRequest } from '../../domain/task';
import { TaskForm } from 'components/blocks/TaskForm';
import { useCreateTaskMutation } from 'api/client';
import { ErrorSnackbar } from 'components/ui/ErrorSnackbar/ErrorSnackbar';

export function CreateTaskPage() {
  const navigate = useNavigate();
  const [createTask, { isError, isLoading }] = useCreateTaskMutation();

  const handleSubmit = async (form: Partial<Task>) => {
    const body = mapCreateTaskToRequest({
      title: form.title ?? '',
      description: form.description ?? '',
      isImportant: form.isImportant ?? false,
      isCompleted: form.isCompleted ?? false,
    });
    await createTask(body).unwrap();
    navigate('/');
  };

  const handleBack = () => navigate(-1);

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={3}>
          <Stack direction="row" spacing={2}>
            <IconButton onClick={handleBack} aria-label="Назад">
              <ArrowBackIcon />
            </IconButton>
          </Stack>

          <Typography variant="h1">Создание задачи</Typography>

          <TaskForm initial={{}} submitLabel="Создать задачу" onSubmit={handleSubmit} isLoading={isLoading} />

          {isError && <ErrorSnackbar message="Ошибка при создани задачи" />}
        </Stack>
      </CardContent>
    </Card>
  );
}
