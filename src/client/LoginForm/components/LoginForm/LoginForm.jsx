import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import Button from '../../../../shared/components/Button';
import FormInput from '../../../../shared/components/FormInput';
import { fields } from './fields';
import { initialState } from './initialState';
import useForm from '../../../../shared/hooks/useForm';
// import { register, logIn } from '../../../../redux/auth/auth-operations';

import s from './LoginForm.module.scss'

const logIn = () => { };
const register = () => { };
const dispatch = () => {}
export const LoginForm = () => {

    const [actionType, setActionType] = useState("");

    // const dispatch = useDispatch();
    
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
        <p className={s.title}>Вы можете авторизоваться с помощью Google Account:</p>
        <Button type="submit">Google</Button>
        <p className={s.title}>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</p>
        <FormInput {...fields.email} value={data.email} onChange={handleChange} className={s.input}/>
        <FormInput {...fields.password} value={data.password} onChange={handleChange} className={s.input}/>
            <div className={s.buttonContainer}>
        <Button type="submit" className={s.button} onClick={() => setActionType("login")}>Войти</Button>
        <Button type="submit" className={s.button} onClick={() => setActionType("register")}>Зарегистрироваться</Button>
        </div>
        </form>
        </>
}

export default LoginForm;