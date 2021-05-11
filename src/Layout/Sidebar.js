import React from 'react';
import {HomeIcon} from "../icons/icons";
import {ExploreIcon} from "../icons/icons";
import {NotificationsIcon} from "../icons/icons";
import {MessagesIcon} from "../icons/icons";
import {BookmarksIcon} from "../icons/icons";
import {ListsIcon} from "../icons/icons";
import {ProfileIcon} from "../icons/icons";
import {MoreIcon} from "../icons/icons";


const Sidebar = () => {
    return (
        <div className="w-72 bg-blue-200">
            <h1>Sidebar</h1>
            <HomeIcon/>
            <ExploreIcon/>
            <NotificationsIcon/>
            <MessagesIcon/>
            <BookmarksIcon/>
            <ListsIcon/>
            <ProfileIcon/>
            <MoreIcon/>
        </div>
    )
}

export default Sidebar