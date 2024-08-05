import React, { useState } from 'react';
import './List.css';

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
  {
    id: 3,
    name: 'Hamilton',
    stage: 'Victoria Palace Theatre',
    period: '2024-03-01 - 2024-06-30',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 4,
    name: '..',
    stage: '우리집',
    period: '2024-03-01 - 2024-06-30',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 5,
    name: '..',
    stage: '우리집',
    period: '2024-03-01 - 2024-06-30',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 6,
    name: '..',
    stage: '우리집',
    period: '2024-03-01 - 2024-06-30',
    image: 'https://via.placeholder.com/150'
  },
  // 실제로는 DB에서 가져오기.
];

const List = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all'); // 필터 상태 추가

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
      <div>{Date()}</div>
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
          <li key={musical.id} className="list-item">
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
