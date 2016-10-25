import React, {Component, PropTypes} from 'react';

export default class JsonResult extends Component {

  handleProps() {
    return JSON.stringify(this.props);
  }

  render() {
    return (
      <div>
      {this.handleProps()}
      </div>
    )
  }

}