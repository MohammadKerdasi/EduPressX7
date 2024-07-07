import React, { useState, useEffect } from 'react';
import FeaturedCoursesCards from './../FeaturedCoursesCards/FeaturedCorsesCards';
import './CoursePagination.css';
import './../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faMagnifyingGlass, faList, faBorderAll } from '@fortawesome/free-solid-svg-icons';
import ArticlesCards from '../ArticlesCards/ArticlesCards';
import { useMediaQuery } from 'react-responsive';

const CoursePagination = ({
  searchBox,
  onSearchChange,
  items, 
  title,
  x
}) => {
  const isMobileView = useMediaQuery({ maxWidth: 767 });
  const [view, setView] = useState('NA-feature-card');
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const totalPages = Math.ceil(items.length / recordsPerPage);

  useEffect(() => {
    if (isMobileView) {
      setView('NA-feature-card');
    }
  }, [isMobileView]);

  const handleButtonClick = (viewType) => {
    if (!isMobileView) {
      setView(viewType === 1 ? 'NA-feature-card' : 'rb-listing');
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedItems = items.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

  return (
    <div className='rb-CoursePagination'>
      <div className='rb-CoursePagination-head'>
        <h1>{title}</h1>
        <div className='search-view'>
          <div className='rb-search-with-icone'>
            <input
              className='rb-searchbox'
              type='text'
              placeholder='Search'
              value={searchBox}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <FontAwesomeIcon className='rb-search-pag' icon={faMagnifyingGlass} />
          </div>
          <button
            className={`listing-button ${view === 'NA-feature-card' ? 'rb-view-active' : ''}`}
            onClick={() => handleButtonClick(1)}
          >
            <FontAwesomeIcon className='rb-view-icon' icon={faBorderAll} />
          </button>
          <button
            className={`listing-button ${view === 'rb-listing' ? 'rb-view-active' : ''}`}
            onClick={() => handleButtonClick(2)}
          >
            <FontAwesomeIcon className='rb-view-icon' icon={faList} />
          </button>
        </div>
      </div>
      {x ? (
        <FeaturedCoursesCards FeaturedCards={paginatedItems} view={view} />
      ) : (
        <ArticlesCards ArticleCards={paginatedItems} view={view} />
      )}
      <ul className='rb-ul-pagination'>
        <li>
          <a onClick={() => handlePageChange(currentPage === 1 ? totalPages : currentPage - 1)}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </a>
        </li>
        {[...Array(totalPages)].map((_, i) => (
          <li key={i} className={currentPage === i + 1 ? 'rb-PageActive' : ''}>
            <a onClick={() => handlePageChange(i + 1)}>{i + 1}</a>
          </li>
        ))}
        <li>
          <a onClick={() => handlePageChange(currentPage === totalPages ? 1 : currentPage + 1)}>
            <FontAwesomeIcon icon={faAngleRight} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default CoursePagination;





// import React, { useState, useEffect } from 'react';
// import FeaturedCoursesCards from './../FeaturedCoursesCards/FeaturedCorsesCards';
// import './CoursePagination.css';
// import './../../index.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAngleLeft, faAngleRight, faMagnifyingGlass, faList, faBorderAll } from '@fortawesome/free-solid-svg-icons';
// import ArticlesCards from '../ArticlesCards/ArticlesCards';

// const CoursePagination = ({
//   searchBox,
//   onSearchChange,
//   items, 
//   title,
//   x
// }) => {
//   const [view, setView] = useState('NA-feature-card');
//   const [currentPage, setCurrentPage] = useState(1);
//   const recordsPerPage = 6;
//   const totalPages = Math.ceil(items.length / recordsPerPage);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 767) {
//         setView('NA-feature-card');
//       }
//     };

//     // Initial check
//     handleResize();

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const handleButtonClick = (viewType) => {
//     if (window.innerWidth > 767) {
//       setView(viewType === 1 ? 'NA-feature-card' : 'rb-listing');
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   const paginatedItems = items.slice((currentPage - 1) * recordsPerPage, currentPage * recordsPerPage);

//   return (
//     <div className='rb-CoursePagination'>
//       <div className='rb-CoursePagination-head'>
//         <h1>{title}</h1>
//         <div className='search-view'>
//           <div className='rb-search-with-icone'>
//             <input
//               className='rb-searchbox'
//               type='text'
//               placeholder='Search'
//               value={searchBox}
//               onChange={(e) => onSearchChange(e.target.value)}
//             />
//             <FontAwesomeIcon className='rb-search-pag' icon={faMagnifyingGlass} />
//           </div>
//           <button
//             className={`listing-button ${view === 'NA-feature-card' ? 'rb-view-active' : ''}`}
//             onClick={() => handleButtonClick(1)}
//           >
//             <FontAwesomeIcon className='rb-view-icon' icon={faBorderAll} />
//           </button>
//           <button
//             className={`listing-button ${view === 'rb-listing' ? 'rb-view-active' : ''}`}
//             onClick={() => handleButtonClick(2)}
//           >
//             <FontAwesomeIcon className='rb-view-icon' icon={faList} />
//           </button>
//         </div>
//       </div>
//       {x ? (
//         <FeaturedCoursesCards FeaturedCards={paginatedItems} view={view} />
//       ) : (
//         <ArticlesCards ArticleCards={paginatedItems} view={view} />
//       )}
//       <ul className='rb-ul-pagination'>
//         <li>
//           <a onClick={() => handlePageChange(currentPage === 1 ? totalPages : currentPage - 1)}>
//             <FontAwesomeIcon icon={faAngleLeft} />
//           </a>
//         </li>
//         {[...Array(totalPages)].map((_, i) => (
//           <li key={i} className={currentPage === i + 1 ? 'rb-PageActive' : ''}>
//             <a onClick={() => handlePageChange(i + 1)}>{i + 1}</a>
//           </li>
//         ))}
//         <li>
//           <a onClick={() => handlePageChange(currentPage === totalPages ? 1 : currentPage + 1)}>
//             <FontAwesomeIcon icon={faAngleRight} />
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default CoursePagination;
