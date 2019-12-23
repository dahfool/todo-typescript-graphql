type Maybe<T> = T | null;
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type CreateTaskInput = {
  title: Scalars['String'],
};

export type Mutation = {
  createTask?: Maybe<Task>,
  updateTask?: Maybe<Task>,
  changeStatus?: Maybe<Task>,
  deleteTask?: Maybe<Task>,
};


export type MutationCreateTaskArgs = {
  input: CreateTaskInput
};


export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput
};


export type MutationChangeStatusArgs = {
  id: Scalars['Int'],
  status: TaskStatus
};


export type MutationDeleteTaskArgs = {
  id: Scalars['Int']
};

export type Query = {
  hello?: Maybe<Scalars['String']>,
  tasks: Array<Task>,
  task?: Maybe<Task>,
};


export type QueryTasksArgs = {
  status?: Maybe<TaskStatus>
};


export type QueryTaskArgs = {
  id: Scalars['Int']
};

export type Task = {
  id: Scalars['Int'],
  title: Scalars['String'],
  status: TaskStatus,
};

export enum TaskStatus {
  Active = 'active',
  Completed = 'completed'
}

export type UpdateTaskInput = {
  id: Scalars['Int'],
  title?: Maybe<Scalars['String']>,
  status?: Maybe<TaskStatus>,
};


export type CreateTaskMutationVariables = {
  input: CreateTaskInput
};


export type CreateTaskMutation = ({ __typename?: 'Mutation' } & { createTask: Maybe<({ __typename?: 'Task' } & Pick<Task, 'id' | 'title' | 'status'>)> });

export type DeleteTaskMutationVariables = {
  id: Scalars['Int']
};


export type DeleteTaskMutation = ({ __typename?: 'Mutation' } & { deleteTask: Maybe<({ __typename?: 'Task' } & Pick<Task, 'id' | 'title' | 'status'>)> });

export type TaskQueryVariables = {
  id: Scalars['Int']
};


export type TaskQuery = ({ __typename?: 'Query' } & { task: Maybe<({ __typename?: 'Task' } & Pick<Task, 'id' | 'title' | 'status'>)> });

export type TasksQueryVariables = {
  status?: Maybe<TaskStatus>
};


export type TasksQuery = ({ __typename?: 'Query' } & { tasks: Array<({ __typename?: 'Task' } & Pick<Task, 'id' | 'title' | 'status'>)> });

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput
};


export type UpdateTaskMutation = ({ __typename?: 'Mutation' } & { updateTask: Maybe<({ __typename?: 'Task' } & Pick<Task, 'id' | 'title' | 'status'>)> });


import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';

export const CreateTaskDocument = gql`
    mutation CreateTask($input: CreateTaskInput!) {
  createTask(input: $input) {
    id
    title
    status
  }
}
    `;

export class CreateTaskComponent extends React.Component<Partial<ReactApollo.MutationComponentOptions<CreateTaskMutation, CreateTaskMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<CreateTaskMutation, CreateTaskMutationVariables> mutation={CreateTaskDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type CreateTaskProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<CreateTaskMutation, CreateTaskMutationVariables>> & TChildProps;
export type CreateTaskMutationFunction = ReactApollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;
export function withCreateTask<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  CreateTaskMutation,
  CreateTaskMutationVariables,
  CreateTaskProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, CreateTaskMutation, CreateTaskMutationVariables, CreateTaskProps<TChildProps>>(CreateTaskDocument, operationOptions);
};
export const DeleteTaskDocument = gql`
    mutation DeleteTask($id: Int!) {
  deleteTask(id: $id) {
    id
    title
    status
  }
}
    `;

export class DeleteTaskComponent extends React.Component<Partial<ReactApollo.MutationComponentOptions<DeleteTaskMutation, DeleteTaskMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<DeleteTaskMutation, DeleteTaskMutationVariables> mutation={DeleteTaskDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type DeleteTaskProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<DeleteTaskMutation, DeleteTaskMutationVariables>> & TChildProps;
export type DeleteTaskMutationFunction = ReactApollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;
export function withDeleteTask<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  DeleteTaskMutation,
  DeleteTaskMutationVariables,
  DeleteTaskProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, DeleteTaskMutation, DeleteTaskMutationVariables, DeleteTaskProps<TChildProps>>(DeleteTaskDocument, operationOptions);
};
export const TaskDocument = gql`
    query Task($id: Int!) {
  task(id: $id) {
    id
    title
    status
  }
}
    `;

export class TaskComponent extends React.Component<Partial<ReactApollo.QueryControls<TaskQuery, TaskQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<TaskQuery, TaskQueryVariables> query={TaskDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type TaskProps<TChildProps = {}> = Partial<ReactApollo.DataProps<TaskQuery, TaskQueryVariables>> & TChildProps;
export function withTask<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  TaskQuery,
  TaskQueryVariables,
  TaskProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, TaskQuery, TaskQueryVariables, TaskProps<TChildProps>>(TaskDocument, operationOptions);
};
export const TasksDocument = gql`
    query Tasks($status: TaskStatus) {
  tasks(status: $status) {
    id
    title
    status
  }
}
    `;

export class TasksComponent extends React.Component<Partial<ReactApollo.QueryControls<TasksQuery, TasksQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<TasksQuery, TasksQueryVariables> query={TasksDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type TasksProps<TChildProps = {}> = Partial<ReactApollo.DataProps<TasksQuery, TasksQueryVariables>> & TChildProps;
export function withTasks<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  TasksQuery,
  TasksQueryVariables,
  TasksProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, TasksQuery, TasksQueryVariables, TasksProps<TChildProps>>(TasksDocument, operationOptions);
};
export const UpdateTaskDocument = gql`
    mutation UpdateTask($input: UpdateTaskInput!) {
  updateTask(input: $input) {
    id
    title
    status
  }
}
    `;

export class UpdateTaskComponent extends React.Component<Partial<ReactApollo.MutationComponentOptions<UpdateTaskMutation, UpdateTaskMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<UpdateTaskMutation, UpdateTaskMutationVariables> mutation={UpdateTaskDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type UpdateTaskProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<UpdateTaskMutation, UpdateTaskMutationVariables>> & TChildProps;
export type UpdateTaskMutationFunction = ReactApollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;
export function withUpdateTask<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  UpdateTaskMutation,
  UpdateTaskMutationVariables,
  UpdateTaskProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, UpdateTaskMutation, UpdateTaskMutationVariables, UpdateTaskProps<TChildProps>>(UpdateTaskDocument, operationOptions);
};
