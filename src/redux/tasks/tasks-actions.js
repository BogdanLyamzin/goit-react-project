import { createAction } from '@reduxjs/toolkit';


export const createTaskRequest = createAction('create/taskRequest');
export const createTaskSuccess = createAction('create/taskSuccess');
export const createTaskError = createAction('create/taskError');


const actions = {
    createTaskRequest, createTaskSuccess, createTaskError
}

export default actions;
