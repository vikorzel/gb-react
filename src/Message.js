import {Component} from 'react';
import './style/message.component.css'
export class Message extends Component{
    constructor(prop){
        super()
        this.text = prop.text;
        this.sender = prop.sender;
        this.dateTime = (new Date()).toGMTString();
    };

    render(){
        return (<div className="message">
            <div className="sender">{this.sender}</div>
            <div className="text">{this.text}</div>
            <div className="dateTime">{this.dateTime}</div>
        </div>
        );

    }

}