import { TaskFilterParams } from '../../../domain/task/task';

export interface TaskFiltersProps {
  params: TaskFilterParams;
  onChange: (newParams: TaskFiltersProps['params']) => void;
}
