import React from 'react';
import styles from "./UserInfo.module.scss"

import {ReactComponent as Logout} from "./images/logout.svg";


function UserInfo({name, openMdl}) {
    return (
        <div className={styles.userInfo}>
            <img className={styles.userAvatar}
                 src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4WOtggrGWwBNWu8zdGrTEgLNF2Hdp47oGsQ&usqp=CAU"}
                 alt="Avatar users"/>
            <p className={styles.userName}>{name}</p>
            <button type="button" onClick={openMdl} className={styles.btnLogout}>
                <span><Logout className={styles.logoutSvg}/></span>
            </button>
        </div>
    );
}

export default UserInfo;