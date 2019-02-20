import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

const Container = styled.div`
  width: 845px;
  margin: 20px 10%;
`;

export default () => {
  const items = [];

  items.push({});

  for (let i = 1; i <= 10; i += 1) {
    items.push({
      img: './image.jpg',
      title: `Camp News ${i}`,
      excerpt:
        'This is a sample header that is 100 characters long. The max number of characters that can fit here.',
      link: 'https://google.com',
    });
  }

  items.push({});

  return (
    <Container>
      <Carousel items={items} cards={3} />
    </Container>
  );
};
