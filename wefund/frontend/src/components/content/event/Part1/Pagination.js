import React from 'react';
import {HashRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container">

      <div className="row">
        <HashRouter>
          <nav>
            <ul className='pagination'>
              {pageNumbers.map(number => (
                <li key={number} className='page-item'>
                  <Link onClick={() => paginate(number)} to='/event' className='page-link'>
                    {number}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </HashRouter>
      </div>
    </div>

  );
};

export default Pagination;