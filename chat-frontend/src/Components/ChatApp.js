import React, {Component} from 'react';
import '../App.css'
import Navigation from "./Navigation";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./Profile";
import Feed from "./Feed";
import SideProfile from "./SideProfile";
import ChatBody from "./ChatBody";

const ChatApp = () => {
    return (
        <div className={"main-container"}>
            <BrowserRouter>
                <Navigation/>
                <Route exact path={'/'} component={Profile}/>
                <Route path={'/ChatBody'} component={ChatBody}/>

            </BrowserRouter>
        </div>
    );

}

export default ChatApp;