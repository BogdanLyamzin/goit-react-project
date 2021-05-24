import React, {useCallback} from 'react';
import {useDispatch} from 'react-redux';

import Button from '../../../shared/components/Button';
import FormInput from '../../../shared/components/FormInput';
import { fields } from './fields';
import { initialState } from './initialState';
import useForm from '../../../shared/hooks/useForm'

import s from './LoginForm.module.scss'


const LoginForm = () => {

    const dispatch = useDispatch();
    const onSubmit = e => {
    e.preventDefault();
    if (initialState.button === 1) {
       useCallback((data) => dispatch(logIn(data)), [dispatch]);
    }
    if (initialState.button === 2) {
       useCallback((data) => dispatch(register(data)), [dispatch]);
    }
  };
    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });

    return <>
         <form
          onSubmit={handleSubmit}
          className={s.form}
          autoComplete="off"
        >
        <Button type="submit">Google</Button>
        <FormInput {...fields.email} value={data.email} onChange={handleChange} className={s.input}/>
        <FormInput {...fields.password} value={data.password} onChange={handleChange} className={s.input}/>
            
        <Button type="submit" onClick={() => (initialState.button = 1)}>Войти</Button>
        <Button type="submit" onClick={() => (initialState.button = 2)}>Зарегистрироваться</Button>
        </form>
        </>
}

export default LoginForm;