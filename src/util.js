'use strict';

import _ from 'ramda';

export const convertToString = (str) => typeof value !== 'string' ? str.toString() : str;

export const exceedsLimit = (increment, limit, value) => increment ? (value >= limit) : (value <= limit);

export const newValue = (increment, limit, value) => exceedsLimit(increment, limit, value) ? limit : value;

export const updateValue = (increment, currentValue, step) => {
  currentValue = parseFloat(currentValue);
  return increment ? (currentValue + step) : (currentValue - step);
};

export const nextValue = (increment, currentValue, step, limit) => {
  const value = updateValue(increment, currentValue, step);
  return newValue(increment, limit, value);
}

export const slice = _.curry((startIndex, endIndex, str) => str.slice(startIndex, endIndex));
