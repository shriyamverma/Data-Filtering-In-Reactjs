import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const pageNoStyle = {
    fontSize: '1.5em',
    paddingBottom: "1.5em",
    margin: '8px',
    fontWeight: '500',
    border: "1px solid #CD5C5C",
    backgroundColor: "#FA8072",
  };
  return (
      <ul className='pagination center'>
        <br/>
        {pageNumbers.map(number => (
          <li key={number} className='page-item' style={pageNoStyle}>
              <a onClick={() => paginate(number)} href='!#' style={{color: '#FFF'}}> {number} </a>
          </li>
        ))}
        <br/><br/>
      </ul>
  );
};

export default Pagination;