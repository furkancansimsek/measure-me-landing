import React from 'react';
import MyListItem from '../../MyListItem';
import Icon1 from '../../../assets/icons/TryOnIcons/1.svg';
import Icon2 from '../../../assets/icons/TryOnIcons/2.svg';
import Icon3 from '../../../assets/icons/TryOnIcons/3.svg';
import Icon4 from '../../../assets/icons/TryOnIcons/4.svg';
import Icon5 from '../../../assets/icons/TryOnIcons/5.svg';
import Icon6 from '../../../assets/icons/TryOnIcons/6.svg';
import TryOnSectionImg from '../../../assets/TryOnSection.svg';
import FadeAndTranslateView from '../../Animations/FadeAndTranslateView';

const TryOnSection = () => {
  return (
    <>
    <FadeAndTranslateView
    delay={.5}>
        <div id='TryOnSection' className="min-h-[90vh] flex relative flex-wrap">
            <div className="bg-myOrange absolute w-full md:w-[30rem] h-[50px] right-0 bottom-0"></div>
            <img src={TryOnSectionImg} className='w-full md:w-[40%] md:max-h-[90vh] z-10'/>
            <div className="flex flex-col md:w-[60%] z-10 px-10 pt-10">
                <h2 className='text-5xl text-primary font-bold'>TRY ON™</h2>
                <h2 className='text-3xl text-myOrange font-bold'>Tüm rakiplerinize fark atın!</h2>
                <span className='text-xl text-primary mt-8'>Try On müşterilerinizin tasarladıkları kıyafetleri, <span className='font-bold'>satın almadan kendi üzerlerinde nasıl durduğunu deneyimleyebilecekleri,</span> eşsiz bir yapay zeka servisidir.</span>
                <div className="flex flex-col items-center my-10 mb-12">
                    <MyListItem iconUrl={Icon1} title="Makine öğrenme ve yapay zekanın geldiği en son nokta"/>
                    <MyListItem iconUrl={Icon2} title="Her tipte kıyafeti satın alma öncesi deneyimleyebilme"/>
                    <MyListItem iconUrl={Icon3} title="Müşterinin kendi gerçek resmi üzerinde gösterim"/>
                    <MyListItem iconUrl={Icon4} title="4 farklı duruş, artistik manken pozları ile profesyonel kıyafet denetme"/>
                    <MyListItem iconUrl={Icon5} title="Customize-It servisi haricinde mevcut hazır kreasyonunuz ile %100 uyumlu entegrasyon"/>
                    <MyListItem iconUrl={Icon6} title="Müşterilerin sosyal medyalarında ki paylaşımları için marka filigranlı resim çıktısı"/>
                </div>
            </div>
        </div>
    </FadeAndTranslateView>
    </>
  )
}

export default TryOnSection;