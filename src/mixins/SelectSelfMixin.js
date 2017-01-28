import React from 'react';
import ReactDOM from 'react-dom';
import stamp from 'react-stamp';
import { select } from 'd3-selection';

export default stamp(React).compose({

  selectSelf() {
    return select(ReactDOM.findDOMNode(this));
  },

});
