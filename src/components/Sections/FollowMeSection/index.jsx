import React from 'react';
import FollowMeSectionImg from '../../../assets/FollowMeSection.svg';
import MyListItem from '../../MyListItem';
import Icon1 from '../../../assets/icons/FollowMeIcons/1.svg';
import Icon2 from '../../../assets/icons/FollowMeIcons/2.svg';
import Icon3 from '../../../assets/icons/FollowMeIcons/3.svg';
import { motion, useInView } from "framer-motion"
import { useRef } from 'react';

const FollowMeSection = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

  return (
    <div id='MyDesignerSection' className="min-h-[90vh] flex flex-col relative pt-10">
        <motion.h2
            animate={isInView ? { translateX: 0, opacity: 1 } : { translateX: -50, opacity: 0}}
            transition={{ duration: 0.5}}
            ref={ref}
            className='text-5xl text-primary font-bold px-10'>
                FOLLOW ME™
        </motion.h2>
        <motion.h2 
            animate={isInView ? { translateX: 0, opacity: 1 } : { translateX: -50, opacity: 0 }}
            transition={{ duration: 0.5, delay: .5 }}
            ref={ref}
            className='text-3xl text-myOrange font-bold px-10'>Size özel tasarım analizleri</motion.h2>
        <motion.img 
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: .5 }}
        ref={ref}
        src={FollowMeSectionImg} 
        className='w-full h-full md:max-h-[90vh] z-10'/>
        <div className="flex flex-wrap px-10">
            <motion.span 
            animate={isInView ? { translateX: 0, opacity: 1 } : { translateX: -50, opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className='text-xl text-primary mt-8 block w-full md:w-[50%] px-5 text-justify'>My Designer, global markaların ve/veya alış veriş sitelerinin, sosyal medyanın kısaca modanın, kıyafetlerin ve tarzların konuşulduğu tüm online platformların sürekli olarak takip edildiği, verilerinin çekilerek analiz edildiği büyük veri ambarı motorudur. My Designer belirleyeceğiniz hedef platformların verilerini analiz ederek, tüm bu öğrendiği ve anlamlandırdığı bilgiyi, müşterilerinize trend ve tarz önerileri olarak sunar. </motion.span>
            <div className="flex flex-col w-full md:w-[50%] items-center my-10 mb-12 px-5">
                <MyListItem iconUrl={Icon1} title="Trend kumaş ve tasarım önerilerinde bulunur"/>
                <MyListItem iconUrl={Icon2} title="Yaş gruplarına ve bölgesel satın alma eğilimlerine göre kumaş, tasarım ve model önerileri sunar"/>
                <MyListItem iconUrl={Icon3} title="Kullanıcı ölçüm verilerinizi yorumlar, dönemsel kilo alış verişlerini hesaplar, bunları benzer kullanıcıların değişimleri ile birlikte karşılaştırır ve müşterinin daha uzun süreli kullanabileceği beden önerileri tahminler."/>
            </div>
        </div>
    </div>
  )
}

export default FollowMeSection;