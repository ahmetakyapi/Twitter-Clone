import React from 'react';
import {SearchIcon} from "../icons/icons";
import { Timeline } from 'react-twitter-widgets'

const Widgets = () => {
    return (
        <aside className="w-80 bg-white">
            <div className="flex items-center space-x-3 p-3 m-3 bg-gray-200
            rounded-full text-gray-dark focus-within:bg-white
             focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base">

                <SearchIcon className="w-6 h-6" />
                <input
                    type="text"
                    placeholder="Search Twitter"
                    className="placeholder-gray-dark bg-transparent focus:outline-none w-full text-sm"/>
            </div>
            <div className="mt-4">
                <Timeline
                    dataSource={{
                        sourceType: 'profile',
                        screenName: 'ahmetakyapi'
                    }}
                    options={{
                        height: '1100'
                    }}
                />

            </div>
        </aside>
    )
}



export default Widgets