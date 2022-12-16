import React from 'react';
import { ColorCodes } from '../../utils/ColorCodes';
import Logo from '../../assets/logo.svg';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <>
        <motion.div 
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        transition={{duration: 0.5, delay: .1}}
        className="h-[75vh] bg-banner bg-no-repeat bg-cover bg-center relative flex justify-center items-center md:justify-end md:pr-10">
            <img src={Logo}/>
        </motion.div>
    </>
  )
}

export default Banner;