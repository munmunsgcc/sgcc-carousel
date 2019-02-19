import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BORDERRADIUS = '30px';

// 1. Make both chevron visible at start.
// 2. Space the chevron more.

const Item = ({
  img, link, title, excerpt,
}) => {
  const ItemCarousel = styled.div`
    width: 270px;
    height: 450px;
    border-radius: ${BORDERRADIUS};
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.15);
    font-size: 14px;
    margin: 10px 5px 10px;

    > .CardImage {
      background-size: cover;
      background-position: center;
      background-image: url(${img});
      border-radius: ${BORDERRADIUS} ${BORDERRADIUS} 0 0;
      height: 220px;
    }

    > div:last-child {
      padding: 20px;
      .CardTitle {
        margin-bottom: 10px;
        color: #33b6ff;
        font-weight: 600;
        font-family: Cooper Hewitt;
        letter-spacing: 2px;
      }
      .CardExcerpt {
        margin-bottom: 15px;
        color: #1b75bc;
        font-family: Aileron;
        font-size: 20px;
        font-weight: bold;
      }
      a {
        font-family: PT Sans;
        text-decoration: none;
        border-bottom: 2px solid #1b75bc;
        color: #1b75bc;
      }
    }
  `;

  return (
    <ItemCarousel>
      <div className="CardImage" />
      <div>
        <div className="CardTitle">{title.toUpperCase()}</div>
        <div className="CardExcerpt">{excerpt}</div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    </ItemCarousel>
  );
};

Item.defaultProps = {
  img: '',
  link: '',
  title: '',
  excerpt: '',
};

Item.propTypes = {
  img: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.string,
};

export default Item;
