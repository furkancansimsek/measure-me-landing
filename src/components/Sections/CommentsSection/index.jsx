import React from 'react';
import CommentCard from './CommentCard';
import Profile from '../../../assets/profile.jpg';
import FadeAndTranslateView from '../../Animations/FadeAndTranslateView';

const CommentsSection = () => {
  return (
    <div className="flex my-10 min-h-[500px] w-full justify-center md:justify-evenly items-center px-[50px]  flex-wrap py-10">
        <div className="flex flex-col">
            <h2 className='text-2xl font-bold text-primary text-center'>BİRBİRİNDEN FARKLI TASARIM SEÇENEKLERİ İLE</h2>
            <div className="flex flex-wrap justify-center items-center">
              <FadeAndTranslateView className='flex flex-wrap justify-center items-center' delay={.5} to='up'>
                <CommentCard profileUrl={Profile} comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." name="Furkan Can Şimşek"/>
              </FadeAndTranslateView>
              <FadeAndTranslateView className='flex flex-wrap justify-center items-center' delay={.6} to='up'>
                <CommentCard profileUrl={Profile} comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." name="Furkan Can Şimşek"/>
              </FadeAndTranslateView>
              <FadeAndTranslateView className='flex flex-wrap justify-center items-center' delay={.7} to='up'>
                <CommentCard profileUrl={Profile} comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." name="Furkan Can Şimşek"/>
              </FadeAndTranslateView>
              <FadeAndTranslateView className='flex flex-wrap justify-center items-center' delay={.8} to='up'>
                <CommentCard profileUrl={Profile} comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." name="Furkan Can Şimşek"/>
              </FadeAndTranslateView>
            </div>
        </div>
    </div>
  )
}

export default CommentsSection;