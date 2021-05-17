import React, {useState, useEffect} from 'react';
import {PopulerIcon} from "../icons/icons";
import TweetBox from "../components/TweetBox";
import Divider from "../components/Divider";
import FeedList from "../components/FeedList";
import db from "../firebase";

const Content = () => {
    const [tweets, setTweets] = useState([]);
    useEffect(() => {
             db.collection('feed')
            .orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => setTweets(snapshot.docs.map(doc => doc.data())))
    }, [])
    console.log(tweets);
        return (
            <main className="bg-white flex-1 flex flex-col border-r border-l border-gray-extraLight max-w-4xl mx-auto px-6">
              <header className="sticky top-0 z-10 flex justify-between items-center p-4 border-b border-gray-extraLight bg-white">
                  <span className="font-bold text-xl text-gray-900">Home</span>
                  <PopulerIcon className="w-7 h-7 text-primary-base"/>
              </header>

                <div className="flex space-x-4 px-4 py-3">
                    <img src="https://pbs.twimg.com/profile_images/889064146121236480/fXWgGFPL_400x400.jpg"
                         alt="avatar"
                         className="aspect-w-14 aspect h-14 rounded-full"
                    />
                    <TweetBox/>
                </div>
                <Divider/>

                <FeedList tweets= {tweets} />

            </main>
        )
    }


export default Content
