import React, {Component} from 'react';

// getComponent is a function that returns a promise for a component
// It will not be called until the first mount
function asyncComponent(getComponent) {
  return class AsyncComponent extends Component {

    constructor() {
      super();
      this.state = { Component: null };
    }

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          this.setState({ Component })
        })
      }
    }

    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }

}

export default asyncComponent;