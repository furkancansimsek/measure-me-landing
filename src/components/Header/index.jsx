import React, { useState } from 'react';
import BurgerMenuIcon from '../../assets/BurgerMenu.svg';
import LanguageIcon from '../../assets/Language.svg';
import { ColorCodes } from '../../utils/ColorCodes';
import AppDrawer from '../AppDrawer';
import NavBar from './NavBar';

const Header = () => {

  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(prev => !prev);
  }

  return (
    <>
      <AppDrawer open={open} setOpen={setOpen}/>
      <div className='sticky top-0 bg-white z-10'>
        <div className={`flex relative justify-between text-[#513834] pt-10 items-center`}>
            <img src={BurgerMenuIcon} className='cursor-pointer' onClick={handleMenuClick}/>
            <a href="#" className={`absolute left-[50%] translate-x-[-50%] text-xl font-bold tracking-[0.5rem] text-[${ColorCodes.PRIMARY}]`}>MSARTO™</a>
            <div className="hidden justify-between items-center md:flex">
                <a href="#" className={`flex text-[${ColorCodes.PRIMARY}] items-center`}>TR/TRY
                    <img className='inline mr-5 self-center ml-2' src={LanguageIcon}/>
                </a>
            </div>
        </div>
        <NavBar/>
      </div>
    </>
  )
}

export default Header;