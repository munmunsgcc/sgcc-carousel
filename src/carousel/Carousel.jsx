import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import PropTypes from 'prop-types';

import { LeftButton, RightButton } from './Chevron';
import Item from './Item';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 0,
    };
  }

  // requires active item to ensure you can scroll
  changeActiveItem = (activeItemIndex) => {
    this.setState({ activeItemIndex });
  };

  render() {
    const { activeItemIndex } = this.state;
    const { items, cards } = this.props;
    const children = items.map(item => <Item {...item} key={Date.now()} />);

    return (
      <ItemsCarousel
        // Carousel configurations
        numberOfCards={cards}
        gutter={0}
        showSlither={false}
        firstAndLastGutter
        freeScrolling={false}
        slidesToScroll={1}
        // Active item configurations
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
