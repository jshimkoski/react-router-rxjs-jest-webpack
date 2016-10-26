import React, {Component} from 'react';
import Header from 'components/header/header.component';

import State from 'states/states';

class Root extends Component {

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

export default Root;