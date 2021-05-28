import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './tasks-actions';


const task = createReducer({}, {
    [actions.createTaskRequest]: (_, { payload }) => payload,
});

const error = createReducer(null, {
    [actions.createTaskError]: (_, { payload }) => payload,
    [actions.createTaskSuccess]: () => null,
});


const allTasks = createReducer([], {
    [actions.fetchTasksSuccess]: (_, { payload }) => payload.week.tasks
});

const loading = createReducer(false, {
    [actions.fetchTasksRequest]: () => true,
});

const tasksNewReducer = combineReducers(
    {
        task, error, allTasks, loading
    }
);

export default tasksNewReducer;