import React from 'react';
import { ColorCodes } from '../../utils/ColorCodes';
import Logo from '../../assets/logo.svg';

const Banner = () => {
  return (
    <>
        <div className="h-[75vh] bg-banner bg-no-repeat bg-cover bg-center relative flex justify-center items-center md:justify-end md:pr-10">
            <img src={Logo}/>
        </div>
    </>
  )
}

export default Banner;