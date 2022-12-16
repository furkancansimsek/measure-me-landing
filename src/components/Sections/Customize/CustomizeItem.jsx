import React from 'react';
import FadeAndTranslateView from '../../Animations/FadeAndTranslateView';

const CustomizeItem = ({
    itemIndex,
    title,
    subTitle,
    content
}) => {
  return (
    <FadeAndTranslateView
    delay={.7}
    to='left'>
      <div className='text-primary z-30 my-2'>
          <div className="flex items-end flex-wrap">
              <h3 className='px-2 text-5xl md:text-8xl mb-0'>{itemIndex}</h3>
              <h3 className='px-2 text-3xl md:text-6xl uppercase mb-0'>{title}</h3>
              <h3 className='px-2 text-xl md:text-3xl mb-0'>({subTitle})</h3>
          </div>
          <div className='px-12 pt-1 text-xl'>{content}</div>
      </div>
    </FadeAndTranslateView>
  )
}

export default CustomizeItem;