import React from 'react';
import Etbp from '../../../assets/etbp.svg';

const MarketResearch = () => {
  return (
    <div id='MarketResearch' className="min-h-[90vh] relative">
        <span className="bg-myOrange w-[250px] h-[40px] absolute top-0 left-[25%]"></span>
        <span className="bg-myOrange w-[500px] h-[90px] absolute bottom-0 right-0 flex justify-center items-center">
            <img src={Etbp}/>
            <span className='text-sm text-white block max-w-[75%] pl-5'>Kaynak: <a href="https://www.eticaret.gov.tr/dnnqthgzvawtdxraybsaacxtymawm/content/FileManager/Dosyalar/2021%20Y%C4%B1l%C4%B1%20E-Ticaret%20B%C3%BClteni.pdf" className='text-white'>E-Ticaret Bilgi Platformu</a></span>
        </span>
    </div>
  )
}

export default MarketResearch;