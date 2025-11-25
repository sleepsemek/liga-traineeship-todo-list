import { Box, Typography, CircularProgress, Fab, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { TaskList } from 'components/blocks/TaskList';
import { TaskFilters } from 'components/blocks/TaskFilters';
import { useGetTasksQuery } from 'api/client';
import { TaskFilterParams } from 'src/domain/task/task';

export function TasksPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const parseTriState = (value: string | null): boolean | undefined => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return undefined;
  };

  const filters: TaskFilterParams = {
    searchQuery: searchParams.get('search') ?? undefined,
    onlyImportant: parseTriState(searchParams.get('important')),
    onlyCompleted: parseTriState(searchParams.get('completed')),
  };

  const onFiltersChange = (newParams: TaskFilterParams) => {
    const params: Record<string, string> = {};

    if (newParams.searchQuery) {
      params.search = newParams.searchQuery;
    }

    if (newParams.onlyImportant !== undefined) {
      params.important = String(newParams.onlyImportant);
    }

    if (newParams.onlyCompleted !== undefined) {
      params.completed = String(newParams.onlyCompleted);
    }

    setSearchParams(params);
  };

  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetTasksQuery(filters);

  const onFabClick = () => {
    navigate('/task_form');
  };

  return (
    <Stack spacing={2}>
      <Typography variant="h1" align="center">
        Задачи
      </Typography>

      <Typography variant="h2" hidden id="task-list-header">
        Список задач
      </Typography>

      <TaskFilters params={filters} onChange={onFiltersChange} />

      {isLoading && (
        <Box display="flex" justifyContent="center" py={3}>
          <CircularProgress />
        </Box>
      )}

      {isError && <Typography variant="body1">Произошла ошибка при загрузке списка задач</Typography>}

      {!isLoading && !isError && <TaskList tasks={data ?? []} />}

      <Box position="sticky" bottom={24} display="flex" justifyContent="flex-end" width="100%">
        <Fab color="primary" aria-label="Создать задачу" onClick={onFabClick}>
          <AddIcon />
        </Fab>
      </Box>
    </Stack>
  );
}
