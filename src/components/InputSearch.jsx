import { Input } from 'antd';
import React from 'react';
import { ColorCodes } from '../utils/ColorCodes';
import {SearchOutlined} from '@ant-design/icons'

const InputSearch = () => {
  return (
    <>
        <Input placeholder="Ara" 
        bordered={false} 
        suffix={<SearchOutlined className='cursor-pointer' onClick={null}/>} 
        style={{
            width:"150px",
            borderBottom: `1px solid ${ColorCodes.PRIMARY}`
        }}/>
    </>
  )
}

export default InputSearch