import React from 'react';
import LoginForm from '../../client/LoginForm/components/LoginForm';

import family1 from './images/family1.png';
import family2 from './images/family2.png';
import robot from './images/robot.png';
import gamepad from './images/gamepad.png';
import s from './AuthPage.module.scss'

const AuthPage = () => {
    const foto1 = family1;
    const foto2 = robot;
    const foto3 = gamepad;
    const foto4 = family2;

    return (
        <>
            <section>
                <div  className={s.container}>
                <div className={s.wrapper}>
                <div className={s.containerFoto }>
                        <div className={s.imgContainer}>
                            <img src={foto1} alt="family"></img>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={foto2} alt="robot"></img>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={foto3} alt="gamepad"></img>
                        </div>
                        <div className={s.imgContainer}>
                            <img src={foto4} alt="family"></img>
                        </div>
                </div>

                <div className={s.form}>
                    <h1 className={s.title}>Выполняй задания,<br/> получи классные призы!</h1>
                    <LoginForm />
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default AuthPage;
