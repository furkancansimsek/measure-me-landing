import React from 'react';
import FadeAndTranslateView from '../Animations/FadeAndTranslateView';

const Footer = () => {
  return (
    <FadeAndTranslateView
    delay={.5}
    to='up'>
    <div className="flex w-full min-h-[400px] bg-[#00000033] flex-wrap">
        <div className="flex w-full flex-wrap">
            <div className="flex flex-col min-w-[50%] p-10 text-primary">
                <h2 className='text-2xl m-0 text-primary'>Bize Ulaşın</h2>
                <a href="https://goo.gl/maps/mSHN1h4meabHT3w67" className='text-primary'>Yeşiltepe, Mithatpaşa Caddesi, No:146, Daire:29, Konak/İzmir</a>
                <a href="mailto:info@teleone.com.tr" className='text-primary'>info@teleone.com.tr</a>
                <a href="tel:+908502219595" className='text-primary'>0850 221 95 95</a>
            </div>
            <div className="flex min-w-[50%] flex-wrap">
                <div className="flex w-full md:w-[50%] p-10 flex-col">
                    <h2 className='text-2xl m-0 text-primary font-bold'>İçeriklerimiz</h2>
                    <a href="#" className='text-primary'>How It Works</a>
                    <a href="#" className='text-primary'>Measure Me</a>
                    <a href="#" className='text-primary'>Custumize It</a>
                    <a href="#" className='text-primary'>Try On</a>
                    <a href="#" className='text-primary'>My Designer</a>
                    <a href="#" className='text-primary'>Follow Me</a>
                </div>
                <div className="flex w-full md:w-[50%] p-10 flex-col">
                    <h2 className='text-2xl m-0 text-primary font-bold'>Size Sağladıklarımız</h2>
                    <a href="#" className='text-primary'>İş ortağı Gözünden</a>
                    <a href="#" className='text-primary'>Müşteri Gözünden</a>
                    <h2 className='text-2xl m-0 text-primary font-bold mt-10'>Modüllerimiz</h2>
                    <a href="#" className='text-primary'>SAAS</a>
                    <a href="#" className='text-primary'>MSARTO APP</a>
                </div>
            </div>
        </div>
    </div>
    </FadeAndTranslateView>
  )
}

export default Footer;