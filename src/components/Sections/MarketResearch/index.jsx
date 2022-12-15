import React from 'react';
import Etbp from '../../../assets/etbp.svg';
import Chart from '../../../assets/Chart.svg';
import PieChart from '../../../assets/PieChart.svg';

const MarketResearch = () => {
  return (
    <div id='MarketResearch' className="min-h-[90vh] relative flex flex-wrap">
        <span className="bg-myOrange w-full md:w-[250px] h-[40px] absolute top-0 left-0 md:left-[25%]"></span>
        <div className="flex flex-col justify-center w-full md:w-[50%] z-10 pt-10">
            <h2 className='text-5xl text-primary font-bold px-10'>PAZAR ARAŞTIRMASI</h2>
            <h2 className='text-2xl text-primary font-bold px-10'>Ülkemizde E-Ticaret Hacminin Sektörel Dağılımı Milyar TL Alışverişlerin Elektronik Platformlara Göre Dağılımları</h2>
            <img src={Chart} className='h-full md:max-h-[90vh] z-10 ml-10'/>
            <img src={PieChart} className='w-[75%] md:max-h-[90vh] z-10 ml-10'/>
        </div>
        <div className='flex w-full md:w-[50%] md:max-h-[90vh] z-10 justify-center items-center relative'>
          <div className="flex flex-col min-h-[50%] justify-center items-center px-10 md:max-h-[75%] max-w-full relative before:content-[''] before:block before:w-[150px] before:h-[150px] before:absolute before:left-[-25px] before:top-[-25px] before:z-[-1] before:bg-[#513834] bg-black w-[80%] md:w-[50%] after:content-[''] after:block after:w-[150px] after:h-[150px] after:absolute after:right-[-25px] after:bottom-[-25px] after:z-[-1] after:bg-[#513834] bg-gradient-to-b from-[#D6C1BE] to-white my-[8rem] md:my-0 py-5">
            <h2 className='text-xl text-primary font-bold'>Aracı Hizmet Sağlayıcılar Üzerinden Yapılan Alışverişlerin Sektörel ve Platform Dağılımları</h2>
            <span className='text-primary'>Aracı hizmet sağlayıcılar üzerinden alışveriş yapanların %48’ini kadınlar; %52’sini erkekler <br /> <br />
            oluşturmaktadır. Vatandaşlarımızın %70’i aracı hizmet sağlayıcılardan alışveriş yaparken %75'i mobil uygulama kullanmayı tercih etmektedirler.</span>
          </div>
        </div>
        <span className="bg-myOrange w-full md:w-[500px] h-[90px] absolute bottom-0 right-0 flex justify-center items-center">
            <img src={Etbp}/>
            <span className='text-sm text-white block max-w-[75%] pl-5'>Kaynak: <a href="https://www.eticaret.gov.tr/dnnqthgzvawtdxraybsaacxtymawm/content/FileManager/Dosyalar/2021%20Y%C4%B1l%C4%B1%20E-Ticaret%20B%C3%BClteni.pdf" className='text-white'>E-Ticaret Bilgi Platformu</a></span>
        </span>
    </div>
  )
}

export default MarketResearch;