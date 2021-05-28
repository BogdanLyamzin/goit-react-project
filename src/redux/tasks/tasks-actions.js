import { createAction } from '@reduxjs/toolkit';


export const createTaskRequest = createAction('create/taskRequest');
export const createTaskSuccess = createAction('create/taskSuccess');
export const createTaskError = createAction('create/taskError');

export const fetchTasksRequest = createAction('tasks/fetchTasksRequest');
export const fetchTasksSuccess = createAction('tasks/fetchTasksSuccess');
export const fetchTasksError = createAction('tasks/fetchTasksError');
const actions = {
    createTaskRequest, createTaskSuccess, createTaskError, fetchTasksRequest, fetchTasksSuccess, fetchTasksError
}

export default actions;
