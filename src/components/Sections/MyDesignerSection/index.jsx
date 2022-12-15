import React from 'react';
import MyDesignerSectionImg from '../../../assets/MyDesignerSection.svg';
import MyDesignerSectionBottomImg from '../../../assets/MyDesignerSectionBottom.svg';
import MyListItem from '../../MyListItem';
import Icon1 from '../../../assets/icons/MyDesignerIcons/1.svg';
import Icon2 from '../../../assets/icons/MyDesignerIcons/2.svg';
import Icon3 from '../../../assets/icons/MyDesignerIcons/3.svg';

const MyDesignerSection = () => {
  return (
    <div id='MyDesignerSection' className="min-h-[90vh] flex relative flex-wrap pt-10">
        <div className="flex flex-col justify-center md:w-[90%] z-10">
            <h2 className='text-5xl text-primary font-bold px-10'>MY DESIGNER™</h2>
            <h2 className='text-3xl text-myOrange font-bold px-10'>Big data ve yapay zekanın moda ile buluşması</h2>
            <span className='text-xl text-primary mt-8 px-10'>My Designer, global markaların ve/veya alış veriş sitelerinin, sosyal medyanın kısaca modanın, kıyafetlerin ve tarzların konuşulduğu tüm online platformların sürekli olarak takip edildiği, verilerinin çekilerek analiz edildiği büyük veri ambarı motorudur. My Designer belirleyeceğiniz hedef platformların verilerini analiz ederek, tüm bu öğrendiği ve anlamlandırdığı bilgiyi, müşterilerinize trend ve tarz önerileri olarak sunar. </span>
            <div className="flex flex-col items-center my-10 mb-12 px-10">
                <MyListItem iconUrl={Icon1} title="Trend kumaş ve tasarım önerilerinde bulunur"/>
                <MyListItem iconUrl={Icon2} title="Yaş gruplarına ve bölgesel satın alma eğilimlerine göre kumaş, tasarım ve model önerileri sunar"/>
                <MyListItem iconUrl={Icon3} title="Kullanıcı ölçüm verilerinizi yorumlar, dönemsel kilo alış verişlerini hesaplar, bunları benzer kullanıcıların değişimleri ile birlikte karşılaştırır ve müşterinin daha uzun süreli kullanabileceği beden önerileri tahminler."/>
            </div>
            <img src={MyDesignerSectionBottomImg} className='w-full h-full md:max-h-[90vh] z-10'/>
        </div>
        <img src={MyDesignerSectionImg} className='hidden md:block md:w-[10%] md:max-h-[90vh] z-10'/>
    </div>
  )
}

export default MyDesignerSection;