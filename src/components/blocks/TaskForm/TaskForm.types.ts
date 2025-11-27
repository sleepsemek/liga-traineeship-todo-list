import { Task } from '../../../domain/task/task';

export interface TaskFormProps {
  initial: Partial<Task>;
  onSubmit: (data: Partial<Task>) => void;
  submitLabel?: string;
  isLoading?: boolean;
}
