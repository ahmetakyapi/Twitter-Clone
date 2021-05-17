import React from 'react';

const UserBox = () => {
        return (
            <div className="flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-250">
                <img src="https://pbs.twimg.com/profile_images/889064146121236480/fXWgGFPL_400x400.jpg"
                     alt="Profile"
                className="aspect-w-14 aspect h-14 rounded-full"
                />
                   <div className="flex flex-col">
                     <span className="text-md font-medium text-black" >
                         Ahmet Akyapı
                     </span>
                        <span
                            className="font-light text-gray-700 space-x-10">
                            @Ahmetakyapi
                        </span>
                    </div>

                <div className="flex space-x-1">
                    <div className="w-1 h-1 bg-gray-800 rounded-full" />
                    <div className="w-1 h-1 bg-gray-800 rounded-full" />
                    <div className="w-1 h-1 bg-gray-800 rounded-full" />
                </div>
            </div>
        )
}

export default UserBox;
