import React, { useState } from 'react'
import Artwork from './Artwork'
import {items} from '../data/deepai_data'
import Pagination from 'react-bootstrap/Pagination';

const ArtworkList = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = items.slice(indexOfFirstItem, indexOfLastItem);

  const dataList = currentData.map((artwork, index) => 
    <Artwork key={index} {...artwork} number={index} />
  );

  const changePage = (event) => {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(
      <Pagination.Item key={i} id={i} onClick={changePage} className={currentPage === i ? 'active' : null}>
        {i}
      </Pagination.Item>
    );
  }

  return (
    <div className='artworklist'>
      {dataList}
      <div>
        <Pagination size="lg">{pageNumbers}</Pagination>
      </div>
    </div>
  );

}

export default ArtworkList