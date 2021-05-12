import React from 'react';

const Container = ({children}) => {
    return (
        <div className="flex min-h-screen max-w-7xl mx-auto bg-primary-base border max-w-4xl mx-auto px-6 bg-white  ">
            {children}
        </div>
    )
}



export default Container