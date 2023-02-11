import React from 'react';
import ReactDOM from 'react-dom/client';
import { Movies } from 'components/Movies';
import './index.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  < BrowserRouter basename='goit-react-hw-05-movies'>
    <React.StrictMode>
      <Movies />
    </React.StrictMode>
  </BrowserRouter>
);
