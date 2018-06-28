import React, { Component } from "react";
import axios from "axios";
class Info extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gutenberg Project</h1>
        </header>
        <div style={{"color":"#fff", "backgroundColor":"#9392e0","padding":"10px"}}>{this.state.persons.map(person => <div style={{"padding":"10px", "backgroundColor":"#524fd5", "margin": "10px"}}>{person.name}</div>)}</div>
      </div>
    );
  }
}

export default Info;
