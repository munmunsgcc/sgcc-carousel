import React from 'react';
import styled from 'styled-components';
import Carousel from './Carousel';

const Container = styled.div`
  width: 845px;
  margin: 20px 10%;
`;

export default () => {
  const items = [];

  for (let i = 0; i <= 10; i += 1) {
    items.push({
      img: './image.jpg',
      title: 'Camp News',
      excerpt:
        'This is a sample header that is 100 characters long. The max number of characters that can fit here.',
      link: 'https://google.com',
    });
  }

  return (
    <Container>
      <Carousel items={items} cards={3} />
    </Container>
  );
};
