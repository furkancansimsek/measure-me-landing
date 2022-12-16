import React from 'react';
import { ColorCodes } from '../../utils/ColorCodes';
import { motion } from 'framer-motion';

const NavBar = () => {
    const navItemClass = `text-[${ColorCodes.PRIMARY}] mx-5 uppercase`;
  return (
    <>
        <ul className='hidden md:flex justify-center mt-3 flex-wrap pb-2'>
            <motion.li
              animate={{translateY: 0, opacity: 1}}
              initial={{translateY: -50, opacity: 0}}
              transition={{duration: 0.5, delay: .2}}
            >
              <a href="#SpecialDesign" className={navItemClass}>about us</a>
            </motion.li>
            <motion.li
              animate={{translateY: 0, opacity: 1}}
              initial={{translateY: -50, opacity: 0}}
              transition={{duration: 0.5, delay: .3}}
            >
              <a href="#" className={navItemClass}>how it works</a>
            </motion.li>
            <motion.li
              animate={{translateY: 0, opacity: 1}}
              initial={{translateY: -50, opacity: 0}}
              transition={{duration: 0.5, delay: .4}}
            >
              <a href="#" className={navItemClass}>measure me</a>
            </motion.li>
            <motion.li
              animate={{translateY: 0, opacity: 1}}
              initial={{translateY: -50, opacity: 0}}
              transition={{duration: 0.5, delay: .5}}
            >
              <a href="#" className={navItemClass}>customize it</a>
            </motion.li>
            <motion.li
              animate={{translateY: 0, opacity: 1}}
              initial={{translateY: -50, opacity: 0}}
              transition={{duration: 0.5, delay: .6}}
            >
              <a href="#" className={navItemClass}>try on</a>
            </motion.li>
            <motion.li
              animate={{translateY: 0, opacity: 1}}
              initial={{translateY: -50, opacity: 0}}
              transition={{duration: 0.5, delay: .7}}
            >
              <a href="#" className={navItemClass}>mt designer</a>
            </motion.li>
            <motion.li
              animate={{translateY: 0, opacity: 1}}
              initial={{translateY: -50, opacity: 0}}
              transition={{duration: 0.5, delay: .8}}
            >
              <a href="#" className={navItemClass}>follow me</a>
            </motion.li>
            <motion.li
              animate={{translateY: 0, opacity: 1}}
              initial={{translateY: -50, opacity: 0}}
              transition={{duration: 0.5, delay: .9}}
            >
              <a href="#" className={navItemClass}>contact us</a>
            </motion.li>
        </ul>
    </>
  )
}

export default NavBar;