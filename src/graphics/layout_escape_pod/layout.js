import React from 'react';
import ReactDOM from 'react-dom/client';
import { LayoutObject } from './LayoutObject';

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <React.StrictMode>
    <LayoutObject />
  </React.StrictMode>
);