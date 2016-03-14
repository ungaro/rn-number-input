'use strict';

import React, { Image, View } from 'react-native';

const getRotation = (direction) => {
  switch (direction) {
    case 'top':
      return { rotate: '270deg'};
    case 'right':
      return { rotate: '0deg'};
    case 'bottom':
      return { rotate: '90deg'};
    case 'left':
      return { rotate: '180deg'};
  }
}

const ChevronIcon = ({ direction, style }) => (
  <View style={{transform: [getRotation(direction)]}}>
    <Image
      style={style}
      source={require('./img/icon-chevron.png')}
    />
  </View>
);

ChevronIcon.defaultProps = {
  direction: 'right'
};

ChevronIcon.propTypes = {
  direction: React.PropTypes.string,
  style: React.PropTypes.object
}

export default ChevronIcon;
