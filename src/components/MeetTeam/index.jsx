import React from 'react';
import { ColorCodes } from '../../utils/ColorCodes';
import TeamProfile from './TeamProfile';
import Profile1 from '../../assets/profile.jpg';
import { motion } from 'framer-motion';

const MeetTeam = () => {
  return (
    <>
        <div className="py-10">
            <motion.h3 
            animate={{translateY: 0, opacity: 1}}
            initial={{translateY: -50, opacity: 0}}
            transition={{duration: 0.5}}
            className={`text-xl text-center font-bold uppercase text-[${ColorCodes.PRIMARY}]`}>Takımımız İle Tanışın</motion.h3>
            <div className="flex justify-center items-center flex-wrap">
              <motion.div 
              animate={{y: 0, opacity: 1}}
              initial={{y: +50, opacity: 0}}
              transition={{duration: 0.5}}
              >
                <TeamProfile imgUrl={Profile1}  name="Furkan Can şimşek" position='Front-End Developer'/>
              </motion.div>
              <motion.div
              animate={{y: 0, opacity: 1}}
              initial={{y: +50, opacity: 0}}
              transition={{duration: 0.5, delay: .2}}
              >
                <TeamProfile imgUrl={Profile1}  name="Furkan Can şimşek" position='Front-End Developer'/>
              </motion.div>
              <motion.div
              animate={{y: 0, opacity: 1}}
              initial={{y: +50, opacity: 0}}
              transition={{duration: 0.5, delay: .3}}
              >
                <TeamProfile imgUrl={Profile1}  name="Furkan Can şimşek" position='Front-End Developer'/>
              </motion.div>
              <motion.div
              animate={{y: 0, opacity: 1}}
              initial={{y: +50, opacity: 0}}
              transition={{duration: 0.5, delay: .4}}
              >
                <TeamProfile imgUrl={Profile1}  name="Furkan Can şimşek" position='Front-End Developer'/>
              </motion.div>
              <motion.div
              animate={{y: 0, opacity: 1}}
              initial={{y: +50, opacity: 0}}
              transition={{duration: 0.5, delay: .5}}
              >
                <TeamProfile imgUrl={Profile1}  name="Furkan Can şimşek" position='Front-End Developer'/>
              </motion.div>
            </div>
        </div>
    </> 
  )
}

export default MeetTeam;