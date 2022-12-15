import React from 'react';
import MyListItem from '../../MyListItem';
import Icon1 from '../../../assets/icons/CustomizeItIcons/1.svg';
import Icon2 from '../../../assets/icons/CustomizeItIcons/2.svg';
import Icon3 from '../../../assets/icons/CustomizeItIcons/3.svg';
import Icon4 from '../../../assets/icons/CustomizeItIcons/4.svg';
import Icon5 from '../../../assets/icons/CustomizeItIcons/5.svg';
import Icon6 from '../../../assets/icons/CustomizeItIcons/6.svg';
import CustomizeItSectionImg from '../../../assets/CustomizeItSection.svg';

const CustomizeItSection = () => {
  return (
    <>
        <div id='CustomizeItSection' className="min-h-[90vh] flex relative flex-wrap">
            <div className="flex flex-col md:w-[60%] z-10 px-10">
                <h2 className='text-5xl text-primary font-bold'>CUSTOMIZE IT™</h2>
                <h2 className='text-3xl text-myOrange font-bold'>10 dakikada 10 milyon olası kombinasyon</h2>
                <span className='text-xl text-primary mt-8'>Her bir detayı özelleştirilebilen, <span className='font-bold'>milyonlarca olası kombinasyonu</span> müşterileriniz ile buluşturarak tamamen benzersiz bir satış deneyimi yaratın.</span>
                <div className="flex flex-col items-center my-10 mb-12">
                    <MyListItem iconUrl={Icon1} title="İster takım elbise, ister gömlek ya da  kapriler… tüm erkek kıyafetlerini özelleştirebilme imkanı"/>
                    <MyListItem iconUrl={Icon2} title="Tüm tasarımlarınızı ve kumaş seçeneklerinizi müşterileriniz ile buluşturun"/>
                    <MyListItem iconUrl={Icon3} title="10 milyonun üzerinde olası kombinasyon ile müşteri zevkine uygun dinamik modeller yaratın"/>
                    <MyListItem iconUrl={Icon4} title="3D modelleme yeteneği ile yeni kumaş ve modellerinizi kolayca ekleyin"/>
                    <MyListItem iconUrl={Icon5} title="%02 ‘ye kadar düşük iade oranları ile karlılığınızı arttırın"/>
                    <MyListItem iconUrl={Icon6} title="Atık kullanımınızı, kargo ve stok maliyetlerinizi azaltın"/>
                </div>
            </div>
            <div className="bg-myOrange absolute w-full md:w-[30rem] h-[50px] left-0 bottom-0"></div>
            <img src={CustomizeItSectionImg} className='w-full md:w-[40%] md:max-h-[90vh] z-10'/>
        </div>
    </>
  )
}

export default CustomizeItSection;