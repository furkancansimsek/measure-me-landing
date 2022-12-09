import React from 'react';
import { ColorCodes } from '../../utils/ColorCodes';

const NavBar = () => {
    const navItemClass = `text-[${ColorCodes.PRIMARY}] mx-5 uppercase`;
  return (
    <>
        <ul className='hidden md:flex justify-center mt-3 flex-wrap pb-2'>
            <li><a href="#SpecialDesign" className={navItemClass}>about us</a></li>
            <li><a href="#" className={navItemClass}>how it works</a></li>
            <li><a href="#" className={navItemClass}>measure me</a></li>
            <li><a href="#" className={navItemClass}>customize it</a></li>
            <li><a href="#" className={navItemClass}>try on</a></li>
            <li><a href="#" className={navItemClass}>mt designer</a></li>
            <li><a href="#" className={navItemClass}>follow me</a></li>
            <li><a href="#" className={navItemClass}>contact us</a></li>
        </ul>
    </>
  )
}

export default NavBar;