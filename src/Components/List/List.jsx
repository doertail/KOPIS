import React, { useState } from 'react';
import './List.css';
import { useNavigate } from 'react-router-dom';

const musicals = [
  {
    id: 1,
    name: '준장(진) 이강희의 재림',
    stage: '체계단',
    period: '2024-01-01 - 2024-10-31',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: '만기전역한 내가 이병?',
    stage: '체계단',
    period: '2024-08-01 - 2026-05-31',
    image: 'https://via.placeholder.com/150'
  },
  // 더 많은 뮤지컬 데이터 추가 가능
];

const List = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();  // useNavigate 훅 사용

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const currentDate = new Date();
  const filteredMusicals = musicals.filter((musical) => {
    const musicalEndDate = new Date(musical.period.split(' - ')[1]);
    const matchesSearchTerm = musical.name.toLowerCase().includes(searchTerm.toLowerCase());

    if (filter === 'current') {
      return matchesSearchTerm && musicalEndDate >= currentDate;
    }

    if (filter === 'past') {
      return matchesSearchTerm && musicalEndDate < currentDate;
    }

    return matchesSearchTerm;
  });

  return (
    <div className="list-container">
      <div>{currentDate.toDateString()}</div>
      <div className="search-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search musicals..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        {searchTerm && <button className="clear-button" onClick={clearSearch}>×</button>}
        <button className="filter-button" onClick={() => handleFilterChange('all')}>모두</button>
        <button className="filter-button" onClick={() => handleFilterChange('current')}>현재 상영중인</button>
        <button className="filter-button" onClick={() => handleFilterChange('past')}>지난</button>
      </div>
      <ul className="list">
        {filteredMusicals.map((musical) => (
          <li key={musical.id} className="list-item" 
              onClick={() => navigate(`/musical_detail/${musical.id}`)} // useNavigate로 절대 경로 설정
          >
            <img src={musical.image} alt={musical.name} />
            <div className="list-item-info">
              <div className="list-item-title">{musical.name}</div>
              <div className="list-item-stage">{musical.stage}</div>
              <div className="list-item-period">{musical.period}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
