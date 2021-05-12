import React from 'react';
import {PopulerIcon} from "../icons/icons";

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
