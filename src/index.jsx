import React,{Component} from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'

export default class Index extends React.Component{
    constructor(){
        super();
    }
    componentWillMount(){
        
    }
    render(){
        const self =this;
        return(
            <div>
                <h2>hello world222</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Index />,
  document.getElementById('root')
);
