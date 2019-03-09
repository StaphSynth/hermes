import Hermes from './hermes_core'

Hermes.subscribe((message) => {
  console.log('SUBSCRIBER 1: ', message.type);
});

for (let i = 0; i < 10; i++) {
  Hermes.dispatch({ type: `HELLO_WORLD! ${i}` });
}
