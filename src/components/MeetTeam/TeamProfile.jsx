import React from 'react';
import { ColorCodes } from '../../utils/ColorCodes';

const TeamProfile = ({
    imgUrl,
    name,
    position
}) => {
  return (
    <>
        <div className="py-2 mx-7">
            <div className="w-[150px] h-[150px] mb-2 rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img src={imgUrl}/>
            </div>
            <span className={`block text-md font-bold text-center text-[${ColorCodes.PRIMARY}] uppercase`}>{name}</span>
            <span className={`block text-md text-center text-[${ColorCodes.PRIMARY}] uppercase`}>{position}</span>
        </div>
    </>
  )
}

export default TeamProfile;