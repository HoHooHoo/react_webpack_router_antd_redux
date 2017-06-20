import React, { Component } from 'react'
import { Select } from 'antd';
const Option = Select.Option;

export default class SelectMultiple extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    createData() {
        const children = [];
        for (let i = 1; i < 10; i++) {
            children.push(<Option key={String(i)}>{ i}</Option>);
        }
        return children;
    }
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    render() {
        const self = this;
        // filterOption needs to be false，as the value is dynamically generated
        return (
            <div>
            <h1>2222</h1>
            <Select
                mode="multiple"
                style={{ width: '100%' }}
                placeholder="Please select"
                defaultValue={['1', '2']}
                onChange={self.handleChange.bind(this)}
            >
                {self.createData()}
            </Select>

            </div>

        );
    }
}

