import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './MusicalDetail.css';

const musicals = [
  {
    id: 1,
    name: '준장(진) 이강희의 재림',
    stage: '체계단',
    period: '2024-01-01 - 2024-10-31',
    producer: '군복무',
    lead: '이강희',
    image: 'https://via.placeholder.com/300'
  },
  {
    id: 2,
    name: '만기전역한 내가 이병?',
    stage: '체계단',
    period: '2024-08-01 - 2026-05-31',
    producer: '군복무',
    lead: '이병',
    image: 'https://via.placeholder.com/300'
  },
  // 더 많은 뮤지컬 데이터 추가 가능
];

const MusicalDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const musical = musicals.find(m => m.id === parseInt(id));

  if (!musical) {
    return <div>뮤지컬을 찾을 수 없습니다.</div>;
  }

  const handleGoToShop = () => {
    navigate(`/shop?search=${encodeURIComponent(musical.name)}`);
  };

  return (
    <div className="musical-detail">
      <div className="musical-info">
        <h2>{musical.name}</h2>
        <p><strong>제작사:</strong> {musical.producer}</p>
        <p><strong>상영 기간:</strong> {musical.period}</p>
        <p><strong>상영 장소:</strong> {musical.stage}</p>
        <p><strong>주연:</strong> {musical.lead}</p>
        <button onClick={handleGoToShop} className="shop-button">Go to Shop</button>
      </div>
      <div className="musical-image">
        <img src={musical.image} alt={musical.name} />
      </div>
    </div>
  );
};

export default MusicalDetail;
