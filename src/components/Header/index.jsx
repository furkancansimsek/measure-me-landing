import React, { useState } from 'react';
import BurgerMenuIcon from '../../assets/BurgerMenu.svg';
import LanguageIcon from '../../assets/Language.svg';
import { ColorCodes } from '../../utils/ColorCodes';
import AppDrawer from '../AppDrawer';
import NavBar from './NavBar';
import { motion } from 'framer-motion';

const Header = () => {

  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(prev => !prev);
  }

  return (
    <>
      <AppDrawer open={open} setOpen={setOpen}/>
      <div className='sticky top-0 bg-white z-[1000]'>
        <div className={`flex relative justify-between text-[#513834] pt-10 items-center pb-10 md:pb-0`}>
            <motion.img 
            animate={{y: 0, opacity: 1}}
            initial={{y: -50, opacity: 0}}
            transition={{duration: 0.5}}
            src={BurgerMenuIcon} className='cursor-pointer pl-3 md:pl-0' onClick={handleMenuClick}/>
            <motion.a 
            animate={{opacity: 1}}
            initial={{ opacity: 0}}
            transition={{duration: 0.5}}
            href="#" className={`absolute left-[50%] translate-x-[-50%] text-xl font-bold tracking-[0.5rem] text-[${ColorCodes.PRIMARY}]`}>MSARTO™</motion.a>
            <motion.div 
            animate={{y: 0, opacity: 1}}
            initial={{y: +50, opacity: 0}}
            transition={{duration: 0.5}}
            className="justify-between items-center flex">
                <a href="#" className={`flex text-[${ColorCodes.PRIMARY}] items-center`}>TR
                    <img className='inline mr-5 self-center ml-2' src={LanguageIcon}/>
                </a>
            </motion.div>
        </div>
        <NavBar/>
      </div>
    </>
  )
}

export default Header;