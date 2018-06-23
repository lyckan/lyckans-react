import React, { Component } from 'react';
import logo from './logo.svg';
import PrinterListPage from './containers/Printer/ListPage.js'
import './App.css';



class App extends Component {

  constructor() {
    super();

    this.state = {
      page: '/'
    }

    this.printerPageClick = this.printerPageClick.bind(this);
    this.homePageClick = this.homePageClick.bind(this);
  }

  printerPageClick() {
    this.setState({
      page: 'printerList'
    }); 
  }

  homePageClick() {
    this.setState({
      page: 'home'
    }); 
  }

  renderPage() {
    switch(this.state.page) {
      case 'printerList':
        return (<PrinterListPage />);
      default: 
        return (<div><p className="App-intro">To get started, edit <code>src/App.js</code> and save to reload.</p><p>Page: {this.state.page}</p></div>);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <ul>
            <li onClick={this.homePageClick}>Home</li>
            <li onClick={this.printerPageClick}>PrinterList</li>
          </ul>
        </header>
        {this.renderPage()}
      </div>
    );
  }
}

export default App;
