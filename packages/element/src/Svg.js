import PropTypes from 'prop-types';
// import deepEqual from 'deep-equal';

import Element from './Element';

export default class Svg extends Element {

  static displayName = 'Svg';

  static propTypes = {
    patterns: PropTypes.array,
  };

  static defaultProps = {
    ...Element.defaultProps,
    // patterns: [],
    component: 'svg',
  };

  // componentDidMount() {
  //   this.addPatterns(this.props);
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (!deepEqual(this.props.patterns, nextProps.patterns)) {
  //     this.addPatterns(nextProps);
  //   }
  //   super.componentWillReceiveProps(nextProps);
  // }

  // getPrivatePropNames() {
  //   return ['patterns'];
  // }

  // addPatterns(props) {
  //   const selection = this.selectSelf();
  //   props.patterns.forEach(pattern => {
  //     selection.call(pattern);
  //   });
  // }
}
