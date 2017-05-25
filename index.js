import React from 'react'
import ReactDOM,{render} from 'react-dom'

import { Router, browserHistory,hashHistory } from 'react-router'
import indexRouter from './src/indexRouter'


render(
  <Router routes={indexRouter} history={hashHistory}/>,
  document.getElementById('root')
)

// ReactDOM.render(
//     <h1>2222</h1>,
//     document.getElementById("root")
// );