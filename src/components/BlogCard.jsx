import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ foodId, foodName, bgImg, price }) => {
  return (
    <div
      style={{
        background: '#fff',
        width: '306px',
        height: '340px',
        border: '1px solid #fff',
        marginBottom: '32px',
        borderRadius: '12px 12px 0 0',
      }}
    >
      <Link to={`/food-info/${foodId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div
          style={{
            background: `url(${bgImg})`,
            height: '200px',
            marginBottom: '30px',
            borderRadius: '12px 12px 0 0',
          }}
        ></div>
        <div>
          <p
            style={{
              color: '#737865',
              padding: '0 25px 12px ',
              fontWeight: 500,
            }}
          >
            January 3, 2023
          </p>
          <h4
            style={{
              fontSize: '20px',
              fontWeight: 500,
              padding: '0 25px 26px ',
              color: '#2C2F24',
            }}
          >
            {foodName}
          </h4>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
