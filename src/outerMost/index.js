import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import todoApp from './reducers/todoApp'

//import store from './store/store'


let store = createStore(todoApp);



export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const self = this;

    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

// Index.propTypes = {
//   optionalArray: PropTypes.array,
// }

// Index.defaultProps={
//     optionalArray:[],
// }
