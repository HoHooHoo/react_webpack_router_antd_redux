import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Input } from 'antd';

export default class AddTodo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  render() {
    return (
      <div>
        <input type='text' ref="myTextInput" />
        <button onClick={e => this.handleClick(e)}>
          Add
        </button>
      </div>
    );
  }

  handleClick(e) {

    let text = this.refs.myTextInput.value;
    this.props.onAddClick(text);
    text = '';
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
}
// AddTodo.defaultProps={
//     optionalArray:[],
// }