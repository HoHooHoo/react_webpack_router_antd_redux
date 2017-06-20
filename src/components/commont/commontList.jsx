import React, { Component } from 'react'
import PropTypes from 'prop-types'

//import { TimePicker,Calendar } from 'antd'

export default class CommontList extends React.Component {
    constructor() {
        super();
        this.state = {

        }

    }
    componentDidMount() {
        this.props.onMount();
    }
    render() {
        return (
            <div className="commontList">
                <ul>
                    <li> Comment One </li>
                </ul>
            </div>

        );
    }
}

CommontList.propTypes = {
    onMount: PropTypes.func.isRequired,
    isActive: PropTypes.bool,
}

CommontList.defaultProps = {
    // onMount: PropTypes.func.isRequired,
    // isActive: PropTypes.bool,
}
