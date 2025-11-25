import { CreateTask, EditTask, Task, TaskFilterParams } from './task';
import { CreateTaskRequest, EditTaskRequest, GetTaskResponse } from 'api/models/task.types';

export const mapTaskResponseToTask = (api: GetTaskResponse): Task => ({
  id: api.id,
  title: api.name ?? '',
  description: api.info ?? '',
  isImportant: api.isImportant ?? false,
  isCompleted: api.isCompleted ?? false,
});

export const mapCreateTaskToRequest = (task: CreateTask): CreateTaskRequest => ({
  name: task.title,
  info: task.description,
  isImportant: task.isImportant,
  isCompleted: task.isCompleted,
});

export const mapEditTaskToRequest = (task: EditTask): EditTaskRequest => ({
  name: task.title,
  info: task.description,
  isImportant: task.isImportant,
  isCompleted: task.isCompleted,
});

export const mapTaskFilterParamsToRequest = (filters: TaskFilterParams) => ({
  name_like: filters.searchQuery ? filters.searchQuery : undefined,
  isImportant: filters.onlyImportant,
  isCompleted: filters.onlyCompleted,
});
