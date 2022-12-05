import React from 'react';
import Header from './Header';

const Layout = ({children}) => {
  return (
    <>
        <div className="min-h-screen container m-auto">
            <Header/>
            {children}
        </div>
    </>
  )
}

export default Layout;