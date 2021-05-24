import React from 'react';

import LoginForm from '../../client/LoginForm';

import s from './AuthPage.module.scss'

const AuthPage = () => {


    return (
        <>
            <section>
                <div>
                    <div className={s.leftSide}></div>
                </div>

                <div>
                    <h1>Выполняй задания, получи классные призы!</h1>
                    <LoginForm />
                </div>
            </section>
        </>
    )
}

export default AuthPage;