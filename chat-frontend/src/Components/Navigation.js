import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import profileImage from "./woman-avatar.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
const Navigation = () => {
    return (
        <div className={"nav-container"}>


            <NavLink to="/">
                <div className={"nav-profile-container"}>
                    <img src={profileImage} alt=""/>
                </div>

            </NavLink>

            <NavLink to="/ChatBody">
                <div className={"nav-chatBody-message"}> <i className="fas fa-envelope"></i></div>

            </NavLink>


        </div>
    );

}

export default Navigation;