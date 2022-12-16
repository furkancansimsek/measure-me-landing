import React from 'react';
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';

const FadeAndTranslateView = ({
  children,
  to='right',
  duration=0.5,
  delay=0.0,
  className='w-full h-full',
}) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const getAnimate = () =>{
      switch (to) {
        case 'right':
          return isInView ? { translateX: 0, opacity: 1 } : { translateX: -50, opacity: 0}

        case 'left':
          return isInView ? { translateX: 0, opacity: 1 } : { translateX: +50, opacity: 0}

        case 'up':
          return isInView ? { translateY: 0, opacity: 1 } : { translateY: +50, opacity: 0}
        
        case 'bottom':
          return isInView ? { translateY: 0, opacity: 1 } : { translateY: -50, opacity: 0}
      }
    }


  return (
    <>
        <motion.div 
        className={className}
        animate={getAnimate()}
        transition={{ duration: duration, delay: delay }}
        ref={ref}>
            {children}
        </motion.div>
    </>
  )
}

export default FadeAndTranslateView;