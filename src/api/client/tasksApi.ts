import {
  GetTasksResponse,
  GetTaskResponse,
  CreateTaskRequest,
  CreateTaskResponse,
  EditTaskRequest,
  EditTaskResponse,
  DeleteTaskResponse,
} from '../models/task.types';
import { mapTaskResponseToTask, mapTaskFilterParamsToRequest } from '../../domain/task';
import { Task, TaskFilterParams } from '../../domain/task/task';
import { baseApi } from './baseApi';

export const tasksApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTasks: build.query<Task[], TaskFilterParams | void>({
      query: (filters) => {
        const params = filters ? mapTaskFilterParamsToRequest(filters) : undefined;

        return {
          url: '/tasks',
          method: 'GET',
          params,
        };
      },
      transformResponse: (api: GetTasksResponse): Task[] => (api ?? []).map(mapTaskResponseToTask),
      providesTags: ['Tasks'],
    }),

    getTask: build.query<Task, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'GET',
      }),
      transformResponse: (api: GetTaskResponse): Task => mapTaskResponseToTask(api),
      providesTags: (_, __, id) => [{ type: 'Tasks', id }],
    }),

    createTask: build.mutation<Task, CreateTaskRequest>({
      query: (body) => ({
        url: '/tasks',
        method: 'POST',
        body,
      }),
      transformResponse: (api: CreateTaskResponse) => mapTaskResponseToTask(api),
      invalidatesTags: ['Tasks'],
    }),

    editTask: build.mutation<EditTaskResponse, { id: string; data: EditTaskRequest }>({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: 'PATCH',
        body: data,
      }),
      transformResponse: (api: EditTaskResponse) => mapTaskResponseToTask(api),
      invalidatesTags: (_, __, arg) => [{ type: 'Tasks', id: arg.id }, 'Tasks'],
    }),

    deleteTask: build.mutation<DeleteTaskResponse, { id: number }>({
      query: ({ id }) => ({
        url: `/tasks/${id}`,
        method: 'DELETE',
      }),
      transformResponse: (api: DeleteTaskResponse) => mapTaskResponseToTask(api),
      invalidatesTags: (_, __, arg) => [{ type: 'Tasks', id: arg.id }, 'Tasks'],
    }),
  }),
  overrideExisting: false,
});

export const { useGetTasksQuery, useGetTaskQuery, useCreateTaskMutation, useEditTaskMutation, useDeleteTaskMutation } =
  tasksApi;
export const tasksReducerPath = tasksApi.reducerPath;
export const tasksReducer = tasksApi.reducer;
export const tasksMiddleware = [tasksApi.middleware];
