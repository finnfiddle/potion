import React from 'react';
import stamp from 'react-stamp';
import itsSet from 'its-set';
import d3Shape from 'd3-shape';

export default stamp(React).compose({

  displayName: 'Symbol',

  propTypes: {
    // type,
    // size,
  },

  render() {
    return (
      <path d={this.getSymbol()()} />
    );
  },

  getSymbol() {
    let symbol = d3Shape.symbol();
    ['type', 'size'].forEach((key) => {
      if (itsSet(this.props[key])) symbol = symbol[key](this.props[key]);
    });
    return symbol;
  },

});
