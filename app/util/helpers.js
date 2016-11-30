// Redux wiring
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

export const createAnswerSet = len => [...Array(len).keys()].map(x => (++x).toString());

export const findByRange = (list, score ) => {
  const checkRange = (min, max) => score >= min && score <= max;
  const found = list.filter((obj) => checkRange(obj.range.min, obj.range.max))

  return found[0];
}

export const newArrayWithRemovedItem = (id, list) => {
  let index = list.indexOf(id);
  
  return (index !== -1) ? [
    ...list.slice(0, index),
    ...list.slice(index + 1)
  ] : list;
}

export const rand = n => Math.floor(Math.random() * n);

export const randomKey = arr => {
  let keys = Object.keys(arr);
  let index = rand(keys.length);

  return keys[index];
}

export const findById = (arr, id = "1") => arr.filter(o => o.id === id)[0];

export const sortByKey = (arr, key, order='asc') => arr.sort((a,b) => {
  let x = a[key], y = b[key];

  if (order === 'asc') {
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  } else {
    return ((x > y) ? -1 : ((x < y) ? 1 : 0));
  }
})

// Centrally dispatch actions across app
export const mapDispatchToPropsHelper = dispatch => bindActionCreators(ActionCreators, dispatch);

// Elminates the need for having switch statements for each reducer
export const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    return handlers.hasOwnProperty(action.type) ? handlers[action.type](state, action) : state;
  };
}

export const update = (state, mutations) => Object.assign({}, state, mutations);
