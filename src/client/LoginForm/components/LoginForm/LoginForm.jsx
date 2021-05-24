import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import Button from '../../../../shared/components/Button';
import FormInput from '../../../../shared/components/FormInput';
import { fields } from './fields';
import { initialState } from './initialState';
import useForm from '../../../../shared/hooks/useForm';
import { register, logIn } from '../../../../redux/auth/auth-operations';

import s from './LoginForm.module.scss'


export const LoginForm = () => {

    const [actionType, setActionType] = useState("");

    const dispatch = useDispatch();
    
    const onSubmit = data => {
        const action = (actionType === "login") ? logIn(data) : register(data)
        dispatch(action)

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
            
        <Button type="submit" onClick={() =>setActionType("login")}>Войти</Button>
        <Button type="submit" onClick={() => setActionType("register")}>Зарегистрироваться</Button>
        </form>
        </>
}

export default LoginForm;