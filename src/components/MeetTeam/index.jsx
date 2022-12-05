import React from 'react';
import { ColorCodes } from '../../utils/ColorCodes';
import TeamProfile from './TeamProfile';
import Profile1 from '../../assets/profile.jpg';

const MeetTeam = () => {
  return (
    <>
        <div className="py-10">
            <h3 className={`text-xl text-center font-bold uppercase text-[${ColorCodes.PRIMARY}]`}>Takımımız İle Tanışın</h3>
            <div className="flex justify-center items-center">
                <TeamProfile imgUrl={Profile1}  name="Furkan Can şimşek" position='Front-End Developer'/>
                <TeamProfile imgUrl={Profile1}  name="Furkan Can şimşek" position='Front-End Developer'/>
                <TeamProfile imgUrl={Profile1}  name="Furkan Can şimşek" position='Front-End Developer'/>
                <TeamProfile imgUrl={Profile1}  name="Furkan Can şimşek" position='Front-End Developer'/>
                <TeamProfile imgUrl={Profile1}  name="Furkan Can şimşek" position='Front-End Developer'/>
            </div>
        </div>
    </> 
  )
}

export default MeetTeam;