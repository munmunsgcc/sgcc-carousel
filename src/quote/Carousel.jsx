import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import PropTypes from 'prop-types';

import { LeftButton, RightButton } from '../chevron';
import Quote from './Quote';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemIndex: 1,
    };
  }

  // requires active item to ensure you can scroll
  changeActiveItem = (activeItemIndex) => {
    this.setState({ activeItemIndex });
  };

  render() {
    const { activeItemIndex } = this.state;
    const { items, button } = this.props;
    const children = items.map((item) => {
      const { ...newItem } = item;
      newItem.button = button;
      return <Quote {...newItem} key={Date.now()} />;
    });

    return (
      <ItemsCarousel
        numberOfCards={1}
        slidesToScroll={1}
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        chevronWidth={50}
        rightChevron={<RightButton />}
        leftChevron={<LeftButton />}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );
  }
}

Carousel.defaultProps = {
  items: [],
  button: {},
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  button: PropTypes.objectOf(PropTypes.string),
};

export default Carousel;
