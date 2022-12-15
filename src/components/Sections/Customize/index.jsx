import React from 'react';
import CustomizeItem from './CustomizeItem';
import CustomizeTablet from '../../../assets/CustomizeTablet.svg';

const Customize = () => {
  return (
    <div id='Customize' className="min-h-[90vh] relative">
        <div className="flex justify-center items-center relative pt-[5rem]">
            <h2 className='text-5xl font-bold'>ÜÇ ADIMDA TARZINIZI ÖZELLESTİRİN</h2>
            <h2 className='text-5xl md:text-9xl absolute right-[10%] font-bold text-myOrange opacity-20'>DENEYİMLEYİN</h2>
        </div>
            <div className="flex relative w-full flex-wrap">
                <span className="bg-myOrange absolute top-0 left-0 w-full h-[200px]"></span>
                <div className="flex w-full md:w-[50%] z-10 justify-center items-center">
                    <img src={CustomizeTablet} className="md:w-[80%]"/>
                </div>
                <div className="flex flex-col md:w-[50%]">
                    <CustomizeItem itemIndex='1' title="ÖLÇÜLERİNİZİ ALIN" subTitle="Measure-me™" content="Endişelenmeyin. Ölçümlerimiz sorunsuz ve bir terziye göre %20 ‘ye kadar daha hassastır. Alternatif olarak, ölçülerinizi kendinizin de alabilmesine yardımcı olması için ölçüm videoları  ve sanal asistan desteği sunuyoruz."/>
                    <CustomizeItem itemIndex='2' title="ÖZELLESTİRİN" subTitle="Customize-it™" content="Tamamı Türkiye’de ve İtalya’da üretilen 300 farklı seçenekten tarzınıza ve ihtiyacınıza tam olarak uyan bir kumaş seçin ve her bir ayrıntıyı özelleştirmek ve nihai sonucu anında alabilmek için kıyafet tasarlayıcımızı kullanın."/>
                    <CustomizeItem itemIndex='3' title="ÜZERİNİZDE DENEYİN" subTitle="Try-on™" content="Hepsi bu kadar. %100 kendi seçiminiz olan kıyafetinizi, bir manken edası ile kendi üzerinizde deneyimleyin. Mükemmel. Artık güvenle satın alabilirsiniz."/>
                </div>
            </div>
    </div>
  )
}

export default Customize;