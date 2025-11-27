import { useMemo } from 'react';
import { Box, Button, CircularProgress, FormControlLabel, Stack, Switch, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { TaskFormProps } from './TaskForm.types';
import { Task } from 'src/domain/task/task';
import { taskFormSchema } from 'components/blocks/TaskForm/TaskForm.schema';

export function TaskForm({ initial, onSubmit, submitLabel = 'Сохранить', isLoading = false }: TaskFormProps) {
  const defaultValues = useMemo(
    () => ({
      title: initial.title ?? '',
      description: initial.description ?? '',
      isImportant: initial.isImportant ?? false,
      isCompleted: initial.isCompleted ?? false,
    }),
    [initial]
  );

  const { control, handleSubmit, watch } = useForm<Partial<Task>>({
    defaultValues,
    resolver: yupResolver(taskFormSchema),
  });

  const completedValue = watch('isCompleted');

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Controller
          name="title"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Название задачи"
              variant="filled"
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="description"
          control={control}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Описание задачи"
              variant="filled"
              multiline
              minRows={3}
              error={Boolean(fieldState.error)}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Stack direction="row" flexWrap="wrap">
          <Controller
            name="isImportant"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Switch
                    {...field}
                    checked={field.value}
                    disabled={completedValue}
                    onChange={(_, checked) => field.onChange(checked)}
                  />
                }
                label="Важная"
              />
            )}
          />

          <Controller
            name="isCompleted"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={<Switch {...field} checked={field.value} onChange={(_, checked) => field.onChange(checked)} />}
                label="Выполнена"
              />
            )}
          />
        </Stack>

        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" type="submit" disabled={isLoading}>
            {isLoading ? <CircularProgress size={24} /> : submitLabel}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
