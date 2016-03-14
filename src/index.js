'use strict';

import React, { View, TextInput, Text, TouchableOpacity } from 'react-native';
import ChevronIcon from './chevron-icon';
import { nextValue, convertToString, newValue, slice } from './util';

const ArrowButton = ({ onPress, direction, style, arrowColour }) => (
  <TouchableOpacity
    style={style}
    onPress={onPress}>
    <ChevronIcon
      direction={direction}
      style={{ tintColor: arrowColour }}
    />
  </TouchableOpacity>
);

class NumberInput extends React.Component {

  handleOnPress(increment) {
    return () => {
      const {max, min, onChange, value, step} = this.props;
      const limit = increment ? max : min;
      const number = nextValue(increment, value, step, limit);
      onChange(number);
    }
  }

  handleChangeText(text) {
    const {min, max, value, onChange} = this.props;

    const number = parseFloat(text),
    parsedValue  = parseFloat(value),
    increment    = number > parsedValue,
    limit        = increment ? max : min;

    if (number === parsedValue || isNaN(number)) {
      return onChange(text);
    }

    const newNumber = newValue(increment, limit, number);
    onChange(convertToString(newNumber));
  }

  render() {
    const {
      style,
      value,
      onChange,
      width,
      height,
      valueStyle,
      arrowStyle,
      decimalPoints,
      arrowColour,
      editable
    } = this.props;

    const formatDecimals = slice(0, decimalPoints - 1);
    const [ints, decimals] = convertToString(value).split('.');
    const number = decimals ? `${ints}.${formatDecimals(decimals)}` : convertToString(value);

    const buttonStyle = [styles.chevron, arrowStyle];

    return (
      <View style={{ width, height }}>
        <View style={styles.container}>
          <TextInput
            style={[styles.value, valueStyle]}
            value={number}
            keyboardType='numeric'
            autoCorrect={false}
            onChangeText={this.handleChangeText.bind(this)}
            editable={editable}
          />

          <View style={styles.buttons}>
            <ArrowButton
              style={buttonStyle}
              arrowColour={arrowColour}
              direction={'top'}
              onPress={this.handleOnPress(true)}
            />

            <ArrowButton
              style={buttonStyle}
              direction={'bottom'}
              arrowColour={arrowColour}
              onPress={this.handleOnPress(false)}
            />
          </View>

        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 6,
    flexDirection: 'row',
  },
  buttons: {
    flex: 2,
    justifyContent: 'space-between',
    marginLeft: 5,
  },
  chevron: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  value: {
    flex: 4,
    fontSize: 20,
    textAlign: 'center',
    borderColor: '#C4C4C4',
    color: '#333',
    borderRadius: 5,
    borderWidth: 1
  }
};

NumberInput.defaultProps = {
  step: 1,
  value: 0,
  width: 70,
  height: 40,
  arrowColour: '#333',
  arrowStyle: styles.chevron,
  valueStyle: styles.value,
  min: 0,
  max: 100,
  decimalPoints: 2,
  editable: true
};

Number.propTypes = {
  step: React.PropTypes.number,
  value: React.PropTypes.oneOfType(['number', 'string']),
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  arrowColour: React.PropTypes.string,
  arrowStyle: View.propTypes.style,
  valueStyle: Text.propTypes.style,
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  decimalPts: React.PropTypes.number,
  onChange: React.PropTypes.func.isRequired,
  editable: React.PropTypes.bool,
}

export default NumberInput;
