import React, {Component} from 'react';
import Header from 'components/header/header.component';

import AppModel from 'states/app.model';

class Root extends Component {

  componentDidMount() {
    AppModel.subscribe((appState) => {
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