import React, {useEffect} from 'react';
import db from '../firebase'
import {PopulerIcon} from "../icons/icons";
import {ImageIcon} from "../icons/icons";
import {GifIcon} from "../icons/icons";
import {PollIcon} from "../icons/icons";
import {EmojiIcon} from "../icons/icons";
import {ScheduleIcon} from "../icons/icons";
import {ReplyIcon} from "../icons/icons";
import {RetweetIcon} from "../icons/icons";
import {LikeIcon} from "../icons/icons";
import {ShareIcon} from "../icons/icons";
import {SearchIcon} from "../icons/icons";

const Content = () => {
        return (
            <main className="bg-white flex-1 flex flex-col border-r border-l border-gray-extraLight">
              <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
                  <span className="font-bold text-xl text-gray-900">Home</span>
                  <PopulerIcon className="w-7 h-7 text-primary-base"/>
              </header>
            </main>
        )
    }



export default Content
