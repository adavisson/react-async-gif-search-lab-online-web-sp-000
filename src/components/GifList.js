import React, { Component } from 'react';

class GifList extends Component {

  render() { 
    return (
      <ul>
        {this.props.gifs.map(gif => <li><img src={gif} alt="test"/></li>)}
      </ul>
    );
  }
}
 
export default GifList;