import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';
import CONSTANTS from '../globals';

const Section = styled.div`
  background-color: ${CONSTANTS.BLUE_1};
  padding: 20px 20%;
  h1 {
    color: ${CONSTANTS.ORANGE_2};
    font-family: Aileron;
    font-weight: bold;
    margin: 0 0 6px 0;
  }
  h4 {
    color: ${CONSTANTS.ORANGE_2};
    font-family: PT Sans;
    font-weight: 400;
    margin: 0;
  }
  .QuoteButton {
    text-align: center;
    button {
      background-color: ${CONSTANTS.BLUE_3};
      padding: 6px 10px;
      width: 150px;
      color: #fff;
      font-family: Aileron;
      font-family: 14px;
      border: none;
      border-radius: 32px;
    }
  }
`;

const Container = styled.div``;

const handleClick = () => {
  window.open('https://google.com', '_blank');
};

export default () => {
  const items = [];
  const title = 'Hear from our Students';
  const subtitle = 'Learn more about us through the lens of our Code Campus family';

  for (let i = 0; i <= 10; i += 1) {
    items.push({
      text: `"I had so much fun at this course learning <br /> to build my own video game ${i}"`,
      by: 'Alice',
      age: '12',
      program: 'Multiple Programme',
    });
  }

  return (
    <Section>
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
      <Container>
        <Carousel items={items} />
      </Container>
      <div className="QuoteButton">
        <button type="button" onClick={handleClick}>
          Meet Our Students
        </button>
      </div>
    </Section>
  );
};
