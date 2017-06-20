import React, { Component } from 'react'
import PropTypes from 'prop-types'

import MyEditor from './richText/myEditor'
import ReactEditor from './richText/reactEditor'
//import style from '../style/style.css'

//import { TimePicker,Calendar } from 'antd'
export default class About extends React.Component {
    constructor() {
        super();
        this.state = {

        }

    }
    render() {
        return (
            <div>
               <MyEditor content={"23333333333"}/>
               <hr/>
               <h3>react富文本编辑器</h3>
               <ReactEditor />
            </div>

        );
    }
}

// Index.propTypes = {
//   optionalArray: PropTypes.array,
// }

// Index.defaultProps={
//     optionalArray:[],
// }
