import React from 'react';
import Stars from '../../../assets/stars.svg';

const CommentCard = ({
    profileUrl,
    comment,
    name
}) => {
  return (
    <>
        <div className="flex flex-col justify-center w-[300px] h-[400px] bg-[#F0F0F0] mx-5 my-5 px-5 text-primary">
            <div className="flex flex-col w-full justify-center items-center">
                <img src={Stars} alt="Stars" className='w-[100px]'/>
                <div className="flex justify-center items-center w-[100px] h-[100px] bg-white rounded-full mt-5 overflow-hidden mb-5">
                    <img src={profileUrl} alt="Profile" />
                </div>
                <p>{comment}</p>
                <h2 className='text-primary text-xl font-bold'>{name}</h2>
            </div>
        </div>
    </>
  )
}

export default CommentCard;