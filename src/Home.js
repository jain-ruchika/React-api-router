import React, { Component } from "react";
import axios from "axios";
import PropTypes from 'prop-types';
class Home extends Component {
  state = {
    persons: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }
  handleSubmit = () => {
    let route = '/about';
    this.props.history.push(route);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gutenberg Project</h1>
        </header>
        <div style={{"color":"#fff", "backgroundColor":"#9392e0","padding":"10px"}}>{this.state.persons.map(person => <div onClick={this.handleSubmit} style={{"padding":"10px", "backgroundColor":"#524fd5", "margin": "10px"}}>{person.name}</div>)}</div>
      </div>
    );
  }
}
Home.propTypes = {
  history: PropTypes.object.isRequired
};

export default Home;
