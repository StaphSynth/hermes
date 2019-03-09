import * as actionTypes from './action_types.js';

const initialState = {
  subscribers: []
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { subscribers } = state;

  broadcast(subscribers, action);

  switch (type) {
    case actionTypes.ADD_SUBSCRIBER:
      return {
        ...state,
        subscribers: [...subscribers, payload]
      }
    default:
      return state;
  }
};

const broadcast = (subscribers, action) => {
  subscribers.forEach(subscriber => {
    subscriber(action);
  });
};

export default reducer;
