import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/constants/colors.scss';
import './styles/base.scss';
import './styles/books.scss';
import './styles/navbar.scss';
import './styles/text.scss';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
