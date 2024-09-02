import React from 'react';
import './ScrollableSection.css';

interface ScrollableSectionProps {
  items: Array<{ title: string; description: string }>;
}

const ScrollableSection: React.FC<ScrollableSectionProps> = ({ items }) => {
  return (
    <div className="scrollable-section">
      {items.map((item, index) => (
        <div key={index} className="box-container">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ScrollableSection;