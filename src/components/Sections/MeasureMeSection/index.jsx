import React from 'react';
import MeasueMeSectionImg from '../../../assets/MeasureMeSection.svg';
import MyListItem from '../../MyListItem';
import Icon1 from '../../../assets/icons/1.svg';
import Icon2 from '../../../assets/icons/2.svg';
import Icon3 from '../../../assets/icons/3.svg';
import Icon4 from '../../../assets/icons/4.svg';
import Icon5 from '../../../assets/icons/5.svg';
import Icon6 from '../../../assets/icons/6.svg';
import Icon7 from '../../../assets/icons/7.svg';
import FadeAndTranslateView from '../../Animations/FadeAndTranslateView';

const MeasureMeSection = () => {
  return (
    <>
    <FadeAndTranslateView>
      <div id='MesureMeSection' className="min-h-[90vh] flex relative flex-wrap">
              <div className="bg-myOrange absolute w-[50px] h-[100px] right-0 top-0"></div>
              <img src={MeasueMeSectionImg} className='w-full md:w-[40%] md:max-h-[90vh] z-10'/>
              <div className="flex flex-col md:w-[60%] z-10 px-10">
                  <h2 className='text-5xl text-primary font-bold'>MEASURE ME ™</h2>
                  <h2 className='text-3xl text-myOrange font-bold'>Terzi hassasiyetinde ölçümler</h2>
                  <span className='text-xl text-primary mt-8'>Measure Me, özel dikim kıyafette elle ölçümü ortadan kaldıran <span className='font-bold'>yapay zeka destekli bir vücut ölçüm eko sistemidir. </span>  
                  En fazla %03 hata payı ile dakikalar içinde 3D boyutsal ölçümünü yapan Measure Me, müşterinizin üzerine en iyi oturacak kıyafeti satın almasına yardımcı olur.</span>
                  <div className="flex flex-col items-center pt-10">
                      <MyListItem iconUrl={Icon1} title="Tüm mobil cihazlar ile uyumlu çalıştır."/>
                      <MyListItem iconUrl={Icon2} title="Mekan bağımsız, kendi başına ölçüm yapabilmesine olanak sağlar."/>
                      <MyListItem iconUrl={Icon3} title="2 dakikadan kısa bir sürede en az 16 farklı noktadan boyutsal ölçme yapar."/>
                      <MyListItem iconUrl={Icon4} title="Tüm vücut ölçülerinizi herhangi bir terziye göre %20 ‘ye kadar daha hassas ölçer."/>
                      <MyListItem iconUrl={Icon5} title="En fazla %03 ‘lük tolere edilebilir hata payı ile en fit ölçümü çıkartır."/>
                      <MyListItem iconUrl={Icon6} title="Deep learning algoritması ile vücut ölçüm teknolojisini sürekli yenileyip geliştirir."/>
                      <MyListItem iconUrl={Icon7} title="Tek bir ölçüm ile slim-fit veya over size gibi farklı beden tipleri için de modelleme yapar. "/>
                  </div>
              </div>
          </div>
    </FadeAndTranslateView>   
    </>
  )
}

export default MeasureMeSection;