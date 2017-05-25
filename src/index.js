import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd'

export default class Index extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <h1>hell3333o worl222d</h1>
                <Button type="danger">Danger</Button>
            </div>
        );
    }
}
ReactDOM.render(
    <Index />,
    document.getElementById("root")
);