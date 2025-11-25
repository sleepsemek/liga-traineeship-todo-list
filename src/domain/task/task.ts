export interface Task {
  id?: number;
  title?: string;
  description?: string;
  isImportant?: boolean;
  isCompleted?: boolean;
}

export type CreateTask = Required<Omit<Task, 'id'>>;

export type EditTask = Omit<Task, 'id'>;

export interface TaskFilterParams {
  searchQuery?: string;
  onlyImportant?: boolean;
  onlyCompleted?: boolean;
}
