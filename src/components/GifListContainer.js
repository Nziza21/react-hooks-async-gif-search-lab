import React, { Component } from 'react';
import GifSearch from './GifSearch';
import GifList from './GifList';

class GifListContainer extends Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    };
  }

  fetchGifs = (query) => {
    const apiKey = 'http://localhost:3000'; 

    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${apiKey}&rating=g';
    `;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          gifs: data.data.slice(0, 3),
        });
      })
      .catch((error) => {
        console.error('Error fetching gifs: ', error);
      });
  };

  render() {
    return (
      <div>
        <GifSearch submitHandler={this.fetchGifs} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

export default GifListContainer;
