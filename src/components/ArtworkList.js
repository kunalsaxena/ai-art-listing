import React from 'react'
import Artwork from './Artwork'
import {items} from './data.js'

const dataList = items.map(
  props => 
  <Artwork {...props} />
);

const ArtworkList = () => {

  return (
    <div className='artworklist'>
        {dataList}
    </div>
  )
}

export default ArtworkList