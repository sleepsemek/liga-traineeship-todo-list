import {
  Stack,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import { TaskFiltersProps } from './TaskFilters.types';

export function TaskFilters({ params, onChange }: TaskFiltersProps) {
  const handleChange = (patch: Partial<TaskFiltersProps['params']>) => {
    onChange({ ...params, ...patch });
  };

  const [search, setSearch] = useState(params?.searchQuery ?? '');
  const debouncedSearch = useDebounce(search);

  useEffect(() => {
    handleChange({ searchQuery: debouncedSearch });
  }, [debouncedSearch]);

  return (
    <Card variant="outlined">
      <CardContent>
        <Stack spacing={2}>
          <Typography component="h3" variant="h6">
            Фильтры
          </Typography>

          <TextField label="Поиск" variant="filled" value={search} onChange={(e) => setSearch(e.target.value)} />

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <FormControl fullWidth variant="filled">
              <InputLabel id="important-label">По важности</InputLabel>
              <Select
                labelId="important-label"
                label="По важности"
                value={params?.onlyImportant ?? ''}
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  handleChange({
                    onlyImportant: selectedValue === '' ? undefined : selectedValue === 'true',
                  });
                }}>
                <MenuItem value="">Не фильтровать</MenuItem>
                <MenuItem value="true">Только важные</MenuItem>
                <MenuItem value="false">Только неважные</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth variant="filled">
              <InputLabel id="completed-label">По статусу</InputLabel>
              <Select
                labelId="completed-label"
                label="По статусу"
                value={params?.onlyCompleted ?? ''}
                onChange={(e) => {
                  const selectedValue = e.target.value;
                  handleChange({
                    onlyCompleted: selectedValue === '' ? undefined : selectedValue === 'true',
                  });
                }}>
                <MenuItem value="">Не фильтровать</MenuItem>
                <MenuItem value="true">Только выполненные</MenuItem>
                <MenuItem value="false">Только невыполненные</MenuItem>
              </Select>
            </FormControl>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
