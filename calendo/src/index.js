import React  from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import './styles/components/styles.scss';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

const state = store.getState();

const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
);


ReactDOM.render(jsx, document.getElementById('root'));
