import React, {Component} from 'react';
import Header from 'components/header/header.component';

import State from 'states/states';

export default class App extends Component {

  componentDidMount() {
    State.subject.subscribe(appState => {
      this.setState({ ...appState });
    });
  }

  render() {
    return (
      <main className="app">
        <Header></Header>
        {React.cloneElement(this.props.children, { ...this.state })}
      </main>
    )
  }

}