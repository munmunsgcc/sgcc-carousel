import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import PropTypes from 'prop-types';

import { LeftButton, RightButton } from '../chevron';
import Card from './Card';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 2,
    };
  }

  // requires active item to ensure you can scroll
  // prevents going to the last and first item to create infinite scrolling
  changeActiveItem = (activeItemIndex) => {
    const { items } = this.props;

    switch (activeItemIndex) {
      case 1:
        this.setState({ activeItemIndex: items.length - 3 });
        break;
      case items.length - 2:
        this.setState({ activeItemIndex: 2 });
        break;
      default:
        this.setState({ activeItemIndex });
        break;
    }
  };

  render() {
    const { activeItemIndex } = this.state;
    const { items, cards } = this.props;
    const children = items.map(item => <Card {...item} key={Date.now()} />);

    return (
      <ItemsCarousel
        numberOfCards={cards}
        slidesToScroll={1}
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition="center"
        chevronWidth={50}
        rightChevron={<RightButton />}
        leftChevron={<LeftButton />}
        outsideChevron
      >
        {children}
      </ItemsCarousel>
    );
  }
}

Carousel.defaultProps = {
  items: [],
  cards: 0,
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  cards: PropTypes.number,
};

export default Carousel;
