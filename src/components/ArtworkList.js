import React from 'react'
import Artwork from './Artwork'
import {items} from '../data/deepai_data'



const ArtworkList = () => {

  const handleOnClick = (e) => {
    console.log('handle from button'+ e.target);
    // console.log(descr);
  };

  const dataList = items.map(
    (artwork, index) => 
    <Artwork key={index} {...artwork} handleOnClick={handleOnClick} />
  );
  

  return (
    <div className='artworklist'>
        {dataList}
    </div>
  )
}

export default ArtworkList