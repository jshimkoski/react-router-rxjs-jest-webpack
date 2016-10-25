import React from 'react';
import Header from 'components/header/header.component';

export default class App extends React.Component {
  render() {
    return (
      <main className="app">
        <Header></Header>
        {this.props.children}
      </main>
    )
  }
}