import React, {Component} from 'react';

import Helmet from "react-helmet";
import Header from 'components/header';

import AppModel from 'states/app/model';

class Root extends Component {

  componentDidMount() {
    AppModel.subscribe((appState) => {
      this.setState({ ...appState });
    });
  }

  render() {
    return (
      <main className="app">
        <Helmet title="Root" titleTemplate="%s | Test App" />
        <Header></Header>
        {React.cloneElement(this.props.children, { ...this.state })}
      </main>
    )
  }

}

export default Root;