import React, {Component} from 'react';
import SideProfile from "./SideProfile";
import ContactList from "./CotactList";
import Feed from "./Feed";

const ChatBody = () => {

    return (
        <div className={"chat-body-container"}>
            <ContactList/>
           <Feed/>
            <SideProfile/>
        </div>
    );

}

export default ChatBody;