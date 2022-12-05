import React from 'react';
import { Drawer} from 'antd';

const AppDrawer = ({open,setOpen}) => {

    return (
        <>
            <Drawer
                placement='left'
                closable={true}
                open={open}
                onClose={() => setOpen(false)}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
  }

export default AppDrawer;