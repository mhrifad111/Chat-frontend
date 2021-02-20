import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={"nav-container"}>


            <NavLink to="/">
                <div>profile</div>
            </NavLink>

            <NavLink to="/ChatBody">
                <div>chat Body</div>
            </NavLink>


        </div>
    );

}

export default Navigation;