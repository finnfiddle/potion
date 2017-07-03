import { Component } from 'react';
import ReactDOM from 'react-dom';
import { select } from 'd3-selection';

export default class SelectSelf extends Component {

  selectSelf() {
    return select(ReactDOM.findDOMNode(this));
  }

}
