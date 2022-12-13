import React from 'react';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleProgress = () => {
  return (
    <div className="flex bg-progressBg my-10 bg-no-repeat bg-cover bg-start min-h-[250px] w-full justify-center md:justify-evenly items-center px-[50px]  flex-wrap py-10">
        <div className='w-[175px] flex flex-col mx-5 my-5'>
            <CircularProgressbar value={85} text='16' 
                styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: 'white',
                    textColor: '#fff',
                    trailColor: 'transparent',
            })}/>
            <span className='uppercase text-lg text-white font-bold text-center'>16 FARKLI NOKTADAN BOYUTSAL ÖLÇÜM</span>
        </div>
        <div className='w-[175px] flex flex-col mx-5 my-5'>
            <CircularProgressbar value={95} text='03' 
                styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: 'white',
                    textColor: '#fff',
                    trailColor: 'transparent',
            })}/>
            <span className='uppercase text-lg text-white font-bold text-center'>EN FAZLA %03 HATA PAYI</span>
        </div>
        <div className='w-[175px] flex flex-col mx-5 my-5'>
            <CircularProgressbar value={80} text='20' 
                styles={buildStyles({
                    pathTransitionDuration: 0.5,
                    pathColor: 'white',
                    textColor: '#fff',
                    trailColor: 'transparent',
            })}/>
            <span className='uppercase text-lg text-white font-bold text-center'>%20 ‘YE KADAR DAHA HASSAS ÖLÇÜM</span>
        </div>
    </div>
  )
}

export default CircleProgress;