import React from 'react';
import twitterLogo from '../images/twitter.svg'
import {HomeIcon} from "../icons/icons";
import {ExploreIcon} from "../icons/icons";
import {NotificationsIcon} from "../icons/icons";
import {MessagesIcon} from "../icons/icons";
import {BookmarksIcon} from "../icons/icons";
import {ListsIcon} from "../icons/icons";
import {ProfileIcon} from "../icons/icons";
import {MoreIcon} from "../icons/icons";
import SideLink from "../components/SideLink";

const sideLinks = [
    {
        name: 'Home',
        icon: HomeIcon,
    },
    {
        name: 'Explore',
        icon: ExploreIcon,
    },
    {
        name: 'Notifications',
        icon: NotificationsIcon,
    },
    {
        name: 'Messages',
        icon: MessagesIcon,
    },
    {
        name: 'Bookmarks',
        icon: BookmarksIcon,
    },
    {
        name: 'Lists',
        icon: ListsIcon,
    },
    {
        name: 'Profile',
        icon: ProfileIcon,
    },
    {
        name: 'More',
        icon: MoreIcon,
    },
]

const Sidebar = () => {
    return (
        <div className="flex flex-col justify-between bg-white w-72 px-2">
            <div>
                <div className="mt-2 mb-5 ml-1 flex items-center justify-center w-12 h-12 rounded-full hover:bg-gray-lightest">
                    <img src={twitterLogo} alt="Twitter Logo" className="w-10 h-10"/>
                </div>
                <nav className="mb-5">
               <ul>
                   {sideLinks.map(({name, icon}) => (
                       <SideLink key={name} name={name} Icon={icon}/>
                       ))}
               </ul>
           </nav>
                <button className="bg-primary-base hover:bg-primary-dark text-white shadow-lg rounded-full px-8 py-3 w-11/12 transform transition-colors duration-300">
                    Tweet
                </button>
            </div>
            <div>
                Alt Kısım
            </div>
        </div>
    )
}

export default Sidebar