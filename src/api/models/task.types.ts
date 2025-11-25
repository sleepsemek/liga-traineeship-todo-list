import { paths } from 'api/models/todo-server';

export type GetTasksQuery = paths['/tasks']['get']['parameters']['query'];
export type GetTasksResponse = paths['/tasks']['get']['responses']['200']['content']['application/json'];

export type GetTaskResponse = paths['/tasks/{id}']['get']['responses']['200']['content']['application/json'];

export type EditTaskRequest = paths['/tasks/{id}']['patch']['requestBody']['content']['application/json'];
export type EditTaskResponse = paths['/tasks/{id}']['patch']['responses']['200']['content']['application/json'];

export type DeleteTaskResponse = paths['/tasks/{id}']['delete']['responses']['200']['content']['application/json'];

export type CreateTaskRequest = paths['/tasks']['post']['requestBody']['content']['application/json'];
export type CreateTaskResponse = paths['/tasks']['post']['responses']['201']['content']['application/json'];
