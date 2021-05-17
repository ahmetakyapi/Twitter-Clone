import React, {useState} from 'react';
import {EmojiIcon, GifIcon, ImageIcon, PollIcon, ScheduleIcon} from "../icons/icons"
import firebase from "firebase";
import db from '../firebase';

const TweetBox = () => {

    const [content, setContent] = useState('')

    const sendTweet= () => {
      if(content !== '' ) {
          db.collection('feed').add({
              displayName: "Ahmet Akyapı",
              username: "@Ahmetakyapi",
              content,
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              image: "https://upload.wikimedia.org/wikipedia/tr/8/85/200px-Fenerbah%C3%A7e.png",
              image2:"https://pazarlamasyon.com/wp-content/uploads/2016/03/cheering_minions.gif",
              avatar:"https://pbs.twimg.com/profile_images/889064146121236480/fXWgGFPL_400x400.jpg"
          })
          setContent("");
      }
    }
        return (
            <div className="flex flex-col flex-1 mt-2 px-2">
             <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden"
                       placeholder="What's happening?"
                       onChange= {e => setContent(e.target.value)}
                       value={content}/>
                    <div className="flex items-center justify-between">
                    <div className="flex -ml-3">
                        <div className="flex items-center justify-center w-11 h-11 hover:bg-gray-lightest rounded-full">
                        <ImageIcon className="w-6 h-6 text-primary-base"/>
                    </div>
                        <div className="flex items-center justify-center w-11 h-11 hover:bg-gray-lightest rounded-full">
                            <GifIcon className="w-6 h-6 text-primary-base"/>
                        </div>
                        <div className="flex items-center justify-center w-11 h-11 hover:bg-gray-lightest rounded-full">
                            <PollIcon className="w-6 h-6 text-primary-base"/>
                        </div>
                        <div className="flex items-center justify-center w-11 h-11 hover:bg-gray-lightest rounded-full">
                            <ScheduleIcon className="w-6 h-6 text-primary-base"/>
                        </div>
                        <div className="flex items-center justify-center w-11 h-11 hover:bg-gray-lightest rounded-full">
                            <EmojiIcon className="w-6 h-6 text-primary-base"/>
                        </div>
                </div>
                    <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
                    onClick={sendTweet}
                    >
                        Tweet
                    </button>
                </div>
            </div>
        );

}
export default TweetBox;
