import React, { useEffect, useState } from 'react'
import Artwork from './Artwork'
import {items} from '../data/deepai_data'
import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';

const ArtworkList = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [dataitems, setdataitems] = useState([]);

  useEffect(() => {

    const getArtworkData = () => {
      axios
      .get(`http://localhost:8080/api/v1/artwork/${currentPage - 1}/${itemsPerPage}`)
      .then(res => {
        console.log(res.data);
        setdataitems(res.data);       
      })
      .catch(err => {
        console.log(err);
      });
    };
    getArtworkData();
  },[currentPage]);

  
  const dataList = dataitems.map((artwork, index) => 
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