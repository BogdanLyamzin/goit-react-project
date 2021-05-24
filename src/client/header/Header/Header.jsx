import React from 'react';
import UserInfo from "../UserInfo";

function Header(props) {
    function openModal(){
        alert("LogOut")
    }
    return (
        <div className="container">
            <UserInfo name={"Vladislaw"} openMdl={openModal}/>
        </div>
    );
}

export default Header;