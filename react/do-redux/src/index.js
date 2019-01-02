import { state } from './redux/state';
import { storeChange } from './redux/storeChange';
import { createStore } from './redux/createStore';

const { store, dispatch } = createStore(state, storeChange);
function renderHead(state) {
  const head = document.getElementById('head');
  head.innerText = state.text;
  head.style.color = state.color;
}
function renderBody(state) {
  const body = document.getElementById('body');
  body.innerText = state.text;
  body.style.color = state.color;
}
function renderApp(store) {
  renderHead(store.head);
  renderBody(store.body);
}

renderApp(store);
dispatch({type: 'BODY_TEXT', text: "我是调用dispatch的body"})
renderApp(store); // 由于上面的只是更新了数据并没有渲染，所以需要将数据从新渲染一次，