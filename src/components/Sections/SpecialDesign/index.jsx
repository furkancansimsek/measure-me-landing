import React from 'react';
import { ColorCodes } from '../../../utils/ColorCodes';
import Quote from '../../../assets/quote.svg';
import SpecialDesignImg from '../../../assets/SpecialDesign.svg';

const SpecialDesign = () => {
  return (
    <>
    <div id='SpecialDesign' className="min-h-[90vh] relative">
        <div className={`hidden md:block absolute right-0 top-0 bg-myOrange h-full w-[16rem]`}></div>
        <div className={`hidden md:block absolute left-0 bottom-0 bg-myOrange h-[16rem] w-10`}></div>
        <div className="flex items-center flex-wrap z-10">
            <div className="flex flex-col items-start p-20 w-[100%] md:w-[50%]">
                <span className={`text-5xl md:text-9xl font-bold text-center text-myOrange uppercase opacity-20`}>Herkes</span>
                <span className={`text-2xl md:text-5xl font-bold text-center text-[${ColorCodes.PRIMARY}] uppercase text-left`}>Özel Tasarım Kıyafetler</span>
                <span className={`text-5xl md:text-9xl font-bold text-center text-myOrange uppercase opacity-20`}>İçİn!</span>
                <div className="flex flex-col">
                    <p className='text-base'>Herkes farklıdır. Uzun, kısa, sarışın, zayıf … ve bu yüzden kıyafetlerin de bu farklılıkları en iyi şekilde yansıtabilecek bir ruhu olması ve kişiye özel tasarlanması gerektiğini düşünüyoruz.</p>
                    <p className='text-base text-myOrange'>Bu fikirden ilhamla, vücut yapısını, tarzı ve trendleri bir araya getirerek giysiler satın alınabilmesine olanak sağlayan yapay zeka destekli <span className='font-bold'>MSARTO™</span>‘yu geliştirdik.</p>
                    <div className="relative mt-10">
                        <img src={Quote} className='absolute top-[-70px] left-[-30px]'/>
                        <p className='text-primary font-bold text-xl'><span className='text-3xl'>MSARTO™</span> terzi şıklığında, güncel trendlerde ve özel ölçüye göre kıyafet satılabilen, yeni bir dijital yaklaşımdır.</p>
                        <img src={Quote} className='absolute bottom-[-60px] right-[-30px] rotate-180'/>
                    </div>
                </div>
            </div>
            <div className="flex w-[45rem] justify-center items-center md:px-20 md:pt-10">
                <img src={SpecialDesignImg} className='w-full z-10'/>
            </div>
        </div>
    </div>
    </>
  )
}

export default SpecialDesign;