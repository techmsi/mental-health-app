const asyncTypes = {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
};

export const createAsyncTypes = typeString =>
  Object.values(asyncTypes).reduce((types, currentType) => {
    types[currentType] = `${typeString}_${currentType}`;
    return types;
  }, {});

export const createAction = (type, payload = {}) => ({ type, ...payload });

// Elminates the need for having switch statements for each reducer
export const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) =>
  handlers.hasOwnProperty(action.type)
    ? handlers[action.type](state, action)
    : state;
