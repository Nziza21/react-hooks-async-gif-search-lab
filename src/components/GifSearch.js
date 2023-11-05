import React, { Component } from 'react';

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      query: ' http://localhost:3000',
    };
  }

  handleChange = (event) => {
    this.setState({ query: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitHandler(this.state.query);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
            placeholder="Search for gifs..."
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default GifSearch;
