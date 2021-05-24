import React from 'react';
import LoginForm from '../../client/LoginForm/components/LoginForm';

import family1 from './images/family1.jpg';
import family2 from './images/family2.jpg';
import robot from './images/robot.jpg';
import gamepad from './images/gamepad.jpg';
import s from './AuthPage.module.scss'

const AuthPage = () => {
    const foto1 = family1;
    const foto2 = robot;
    const foto3 = gamepad;
    const foto4 = family2;

    return (
        <>
            <section>
                <div>
                    <div className={s.leftSide}>
                        <img src={foto1} alt="family" className={s.img}></img>
                        <img src={foto2} alt="robot" className={s.img}></img>
                    </div>
                    <div className={s.rightSide}>
                        <img src={foto3} alt="gamepad" className={s.img}></img>
                        <img src={foto4} alt="family" className={s.img}></img>
                    </div>
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