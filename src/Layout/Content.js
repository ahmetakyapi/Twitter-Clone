import React from 'react';
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
            <main className="flex-1 bg-gray-dark">
              <h1>Content</h1>
                <PopulerIcon className="w-7 h-7"/>
                <ImageIcon className="w-7 h-7"/>
                <GifIcon className="w-7 h-7"/>
                <PollIcon className="w-7 h-7"/>
                <EmojiIcon className="w-7 h-7"/>
                <ScheduleIcon className="w-7 h-7"/>
                <ReplyIcon className="w-7 h-7"/>
                <RetweetIcon className="w-7 h-7"/>
                <LikeIcon className="w-7 h-7"/>
                <ShareIcon className="w-7 h-7"/>
                <SearchIcon className="w-7 h-7"/>
            </main>
        )
    }



export default Content
