import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThumbnailObject } from './ThumbnailObject';

const root = ReactDOM.createRoot(document.querySelector('#app'));

root.render(
  <React.StrictMode>
    <ThumbnailObject />
  </React.StrictMode>
);