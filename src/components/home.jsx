import React, { Component } from 'react'
import PropTypes from 'prop-types'
export default class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h5>Home</h5>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/connectMe">connectMe</Link></li>
                </ul>
            </div>
        );
    }
} 