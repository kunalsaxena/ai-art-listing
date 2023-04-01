import React from 'react'
import Artwork from './Artwork'
import {items} from '../data/deepai_data'

const ArtworkList = () => {

  const getArtwork = (id) => {
    const art = items.find((x) => x.id === id);
    console.log(art);
  };

  const dataList = items.map(
    (artwork, index) => 
    <Artwork key={index} {...artwork} getArtwork={getArtwork} number={index} />
  );

  return (
    <div className='artworklist'>
        {dataList}
    </div>
  )
}

export default ArtworkList