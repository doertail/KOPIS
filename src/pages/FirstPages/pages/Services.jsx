import React from 'react';
import ServiceItem from '../components/ServiceItem';
import '../assets/css/Services.css';

const Services = ({ id }) => {
  const services = [
    {
      icon: '🛒', // You can replace this with an image or any other element
      title: 'MD 재고 확인 서비스',
      description: '서비스 설명1',
    },
    {
      icon: '💻',
      title: 'MD 예약 구매 서비스',
      description: '서비스 설명2',
    },
    {
      icon: '📋',
      title: 'MD 리뷰 작성 서비스',
      description: '서비스 설명3',
    },
    {
      icon: '📊',
      title: 'MD 데이터 분석 BI 서비스',
      description: '서비스 설명4',
    },
    {
      icon: '💬',
      title: 'MD 데이터 분석 챗봇 서비스',
      description: '서비스 설명5',
    },
    {
      icon: '🔍',
      title: '서비스 6',
      description: '서비스 설명6',
    },
  ];

  return (
    <div className="services" id = { id }>
      <h2>SERVICES</h2>
      <p>Services of OM:D</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
