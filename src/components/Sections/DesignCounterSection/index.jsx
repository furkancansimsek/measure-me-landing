import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const DesignCounterSection = () => {
  return (
    <div className="flex bg-designCounterBg my-10 bg-no-repeat bg-cover bg-center min-h-[250px] w-full justify-center md:justify-evenly items-center px-[50px]  flex-wrap py-10">
        <div className="flex flex-col">
            <h2 className='text-2xl font-bold text-white text-center'>BİRBİRİNDEN FARKLI TASARIM SEÇENEKLERİ İLE</h2>
            <div className="flex flex-wrap justify-center items-center">
                <div className='w-[175px] flex flex-col mx-5 my-5'>
                    <CircularProgressbar
                        value={35}
                        text='35'
                        strokeWidth={50}
                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: "butt",
                            trailColor: 'transparent',
                            pathColor: '#D9D9D975',
                            textColor: 'white'
                        })}
                    />
                        <span className='uppercase text-lg text-white font-bold text-center'>DÜĞME</span>
                </div>
                <span className='h-[200px] hidden xl:block bg-white w-[2px]'></span>
                <div className='w-[175px] flex flex-col mx-5 my-5'>
                    <CircularProgressbar
                        value={26}
                        text='26'
                        strokeWidth={50}
                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: "butt",
                            trailColor: 'transparent',
                            pathColor: '#D9D9D975',
                            textColor: 'white'
                        })}
                    />
                        <span className='uppercase text-lg text-white font-bold text-center'>ASTAR</span>
                </div>
                <span className='h-[200px] hidden xl:block bg-white w-[2px]'></span>
                <div className='w-[175px] flex flex-col mx-5 my-5'>
                    <CircularProgressbar
                        value={9}
                        text='9'
                        strokeWidth={50}
                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: "butt",
                            trailColor: 'transparent',
                            pathColor: '#D9D9D975',
                            textColor: 'white'
                        })}
                    />
                        <span className='uppercase text-lg text-white font-bold text-center'>YAKA</span>
                </div>
                <span className='h-[200px] hidden xl:block bg-white w-[2px]'></span>
                <div className='w-[175px] flex flex-col mx-5 my-5'>
                    <CircularProgressbar
                        value={16}
                        text='16'
                        strokeWidth={50}
                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: "butt",
                            trailColor: 'transparent',
                            pathColor: '#D9D9D975',
                            textColor: 'white'
                        })}
                    />
                        <span className='uppercase text-lg text-white font-bold text-center'>CEP</span>
                </div>
                <span className='h-[200px] hidden xl:block bg-white w-[2px]'></span>
                <div className='w-[175px] flex flex-col mx-5 my-5'>
                    <CircularProgressbar
                        value={12}
                        text='12'
                        strokeWidth={50}
                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: "butt",
                            trailColor: 'transparent',
                            pathColor: '#D9D9D975',
                            textColor: 'white'
                        })}
                    />
                        <span className='uppercase text-lg text-white font-bold text-center'>KEMER</span>
                </div>
                <span className='h-[200px] hidden xl:block bg-white w-[2px]'></span>
                <div className='w-[175px] flex flex-col mx-5 my-5'>
                    <CircularProgressbar
                        value={7}
                        text='7'
                        strokeWidth={50}
                        styles={buildStyles({
                            rotation: 0.25,
                            strokeLinecap: "butt",
                            trailColor: 'transparent',
                            pathColor: '#D9D9D975',
                            textColor: 'white'
                        })}
                    />
                        <span className='uppercase text-lg text-white font-bold text-center'>MANŞET</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DesignCounterSection;