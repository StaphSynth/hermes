import { createStore } from 'redux';
import reducer from './reducers.js';
import * as actionTypes from './action_types.js';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const subscribe = (callback) => {
  store.dispatch({
    type: actionTypes.ADD_SUBSCRIBER,
    payload: callback
  });
}

store.dispatch({ type: actionTypes.READY });

export default {
  subscribe,
  dispatch: store.dispatch
};
