import Hermes from './hermes_core'

const billboard = document.querySelector('.billboard');
const input = document.querySelector('.input');
const messageType = 'BILLBOARD_MESSAGE';

const handleMessage = ({ type, payload }) => {
  if (type !== messageType) return;

  updateBillboard(payload);
};

const updateBillboard = (payload) => {
  billboard.textContent = payload;
};

const postMessage = (message) => {
  Hermes.dispatch({
    type: messageType,
    payload: message
  });
};

Hermes.subscribe(handleMessage);

input.addEventListener('keyup', event => {
  postMessage(event.target.value);
});

Hermes.dispatch({
  type: 'BILLBOARD_READY'
});
