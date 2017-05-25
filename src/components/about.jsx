import React,{Component} from 'react'
import PropTypes from 'prop-types'

import style from '../style/style.css'

import { TimePicker,Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}
export default class About extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
         
                <Calendar onPanelChange={onPanelChange} />
          
        );
    }
}

// Index.propTypes = {
//   optionalArray: PropTypes.array,
// }

// Index.defaultProps={
//     optionalArray:[],
// }
