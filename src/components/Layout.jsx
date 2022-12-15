import React from 'react';
import Header from './Header';
import { BackTop } from 'antd';

const Layout = ({children}) => {
  return (
    <>
        <div className="min-h-screen container m-auto">
            <Header/>
            {children}
            <BackTop/>
        </div>
    </>
  )
}

export default Layout;