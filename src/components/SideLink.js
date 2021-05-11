import React from 'react';

    const SideLink= ({name,Icon}) => {

        return (
            <li className="group">
                <a href={name.toLowerCase()} className="cursor-pointer block text-xl mb-1">
                    <span className="md:inline-block">
                    <div className="flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-3.5">
                        <span>
                            <Icon />
                        </span>
                        <span className="ml-3 font-bold">
                            {name}
                        </span>
                    </div>
                </span>
                </a>
            </li>
        )
    }

export default SideLink
