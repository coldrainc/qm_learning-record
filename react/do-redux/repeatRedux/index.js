import state from './redux/state';
import createStore from './redux/createStore';
import storeChange from './redux/storeChange';

const { store, dispatch } = createStore(state, storeChange);

function renderHead(state) {
  let head = document.getElementById('head');
  head.innerText = state.head.text;
  head.style.color = state.head.color;
}

function renderBody(state) {
  let body = document.getElementById('body');
  body.innerText = state.body.text;
  body.style.color = state.body.color;
}

function renderApp(state) {
  renderHead(state);
  renderBody(state);
}

renderApp(store);
dispatch({type: 'BODY_TEXT', text: '你在干嘛'});
renderApp(store);

