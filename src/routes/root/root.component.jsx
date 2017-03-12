import React, {Component} from 'react';
import Route from 'react-router-dom/Route';

import asyncComponent from 'components/async/async.component';

import Helmet from "react-helmet";
import Header from 'components/header/header.component';

import AppModel from 'states/app/app.model';

const Home = asyncComponent(() =>
  System.import('./home/home.component').then(module => module.default)
);

const About = asyncComponent(() =>
  System.import('./about/about.component').then(module => module.default)
);

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
        <Header/>
        <Route exact path="/" render={() => <Home {...this.state} />} />
        <Route path="/about" render={() => <About {...this.state} />} />
      </main>
    )

  }

}

export default Root;