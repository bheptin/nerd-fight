import React from 'react';
import Routes from './Routes';
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import './index.css';

render(
  <Router routes={Routes} history={browserHistory}/>,
  document.getElementById('root')
)
