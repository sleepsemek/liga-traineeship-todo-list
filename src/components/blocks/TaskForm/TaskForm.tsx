import { FormEvent, useState } from 'react';
import { Box, Button, FormControlLabel, Stack, Switch, TextField } from '@mui/material';
import { TaskFormProps } from './TaskForm.types';
import { Task } from 'src/domain/task/task';

export function TaskForm({ initial, onSubmit, submitLabel = 'Сохранить' }: TaskFormProps) {
  const [form, setForm] = useState<Partial<Task>>({
    title: initial.title ?? '',
    description: initial.description ?? '',
    isImportant: initial.isImportant ?? false,
    isCompleted: initial.isCompleted ?? false,
  });

  const partiallySetForm = (partial: Partial<Task>) => setForm((prev) => ({ ...prev, ...partial }));

  const handleSubmit = (formEvent: FormEvent) => {
    formEvent.preventDefault();
    onSubmit(form);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Название задачи"
          variant="filled"
          required
          value={form.title}
          onChange={(e) => partiallySetForm({ title: e.target.value })}
        />

        <TextField
          label="Описание задачи"
          variant="filled"
          required
          multiline
          minRows={3}
          value={form.description}
          onChange={(e) => partiallySetForm({ description: e.target.value })}
        />

        <Stack direction="row" flexWrap="wrap">
          <FormControlLabel
            control={
              <Switch
                checked={form.isImportant}
                onChange={(_, checked) => partiallySetForm({ isImportant: checked })}
              />
            }
            label="Важная"
          />

          <FormControlLabel
            control={
              <Switch
                checked={form.isCompleted}
                onChange={(_, checked) => partiallySetForm({ isCompleted: checked })}
              />
            }
            label="Выполнена"
          />
        </Stack>

        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" type="submit">
            {submitLabel}
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
