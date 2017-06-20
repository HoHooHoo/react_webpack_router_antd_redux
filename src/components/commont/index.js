import React, { Component } from 'react'
import PropTypes from 'prop-types'


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

}

CommontList.defaultProps = {

}
