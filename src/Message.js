import React, {Component} from 'react';
import './style/message.component.css';
import PropTypes from 'prop-types';
export class Message extends Component {
  constructor(prop) {
    super(prop);
    this.dateTime = (new Date()).toGMTString();
    this.text = prop.message.text;
    this.sender = prop.message.sender;
  }

  static get propTypes() {
    return {
      message: PropTypes.exact({
        text: PropTypes.string,
        sender: PropTypes.string,
      }),
    };
  }

  render() {
    return (<div className="message">
      <div className="sender">{this.props.message.sender}</div>
      <div className="text">{this.props.message.text}</div>
      <div className="dateTime">{this.dateTime}</div>
    </div>
    );
  }
}
