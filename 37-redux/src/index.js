import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import App1 from './App1';
import App2 from './App2';
// import { createStore } from 'redux';
// import counterReducer from './store/counterReducer';
// import practice1Reducer from './store/practice1Reducer';

import rootReducer from './store/index';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Practice1 from './Practice1';
import { composeWithDevTools } from 'redux-devtools-extension';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(counterReducer);
// const practice = createStore(practice1Reducer);
// 하나로 쓰기
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  // store 만들고 provider로 묶기

  <React.StrictMode>
    <App />
    <Provider store={store}>
      <App1 />
      <App2 />
      {/* Provider로 묶어야한다 필수로! */}
      <Provider store={store}>
        <Practice1 />
      </Provider>
    </Provider>
  </React.StrictMode>
);
