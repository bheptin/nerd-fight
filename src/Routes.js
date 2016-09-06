import React from 'react'
import { Route, IndexRoute } from 'react-router';
import Home from './Home'
import Battle from './Battle'
import SearchBox from './SearchBox'


module.exports = (
  <Route path="/" component={Home}>
    <IndexRoute component={SearchBox}/>
    <Route path="battle/:player1/:player2" component={Battle}/>
  </Route>
)
