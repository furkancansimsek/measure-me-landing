import React from 'react';
import FadeAndTranslateView from './Animations/FadeAndTranslateView';

const MyListItem = ({iconUrl,title}) => {
  return (
    <>
    <FadeAndTranslateView
    delay={.5}>
      <div className="flex w-full bg-gradient-to-r from-[#51383433] to-transparent py-2 px-3 items-center my-1">
        <img src={iconUrl} className="w-[50px]"/>
        <span className='pl-3 block text-lg text-primary w-[75%]'>{title}</span>
      </div>
    </FadeAndTranslateView>
    </>
  )
}

export default MyListItem;