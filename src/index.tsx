import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/main.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './store';


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

export let renderTree = () => {
      root.render(
      <BrowserRouter>
        <App 
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}   
        />
      </BrowserRouter>
      );
}
renderTree()
store.renderObserver(renderTree)




