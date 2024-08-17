import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MDList.css'; // 기존 List 컴포넌트의 CSS를 사용

const MDs = [
  {
    id: 1,
    musicalName: '준장(진) 이강희의 재림',
    MDName: '주전자',
    price: 10000,
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 2,
    musicalName: '준장(진) 이강희의 재림',
    MDName: '카드',
    price: 5000,
    image: 'https://via.placeholder.com/300'
  },
  // 더 많은 MD 데이터 추가 가능
];

const MDList = () => {
  const navigate = useNavigate();  // useNavigate 훅 사용
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get('search');
    if (search) {
      setSearchTerm(search);
    }
  }, [location]);

  const filteredMDs = MDs.filter((MD) =>
    MD.musicalName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedMDs = [...filteredMDs].sort((a, b) => {
    return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
  });

  const handleSortOrderChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div className="list-container">
      <h1>Shop Page</h1>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search MDs..."
        />
        <div className="sort-container">
          <button
            className={`sort-button ${sortOrder === 'asc' ? 'active' : ''}`}
            onClick={() => handleSortOrderChange('asc')}
          >
            가격 오름차순
          </button>
          <button
            className={`sort-button ${sortOrder === 'desc' ? 'active' : ''}`}
            onClick={() => handleSortOrderChange('desc')}
          >
            가격 내림차순
          </button>
        </div>
      </div>
      <ul className="list">
        {sortedMDs.map((MD) => (
          <li key={MD.id} className="list-item"
            onClick={() => navigate(`/md_detail/${MD.id}`)} // useNavigate로 절대 경로 설정
          >
            <img src={MD.image} alt={MD.MDName} />
            <div className="list-item-info">
              <div className="list-item-title">{MD.MDName}</div>
              <div className="list-item-stage">{MD.musicalName}</div>
              <div className="list-item-period">Price: {MD.price}원</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MDList;
