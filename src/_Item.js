import React, { PropTypes, Children, cloneElement } from 'react';
import stamp from 'react-stamp';
import isFunction from 'lodash/isFunction';

import SelectSelf from './mixins/SelectSelf';

const BLACKLIST_CHILD_PROPS = ['component', 'valueBeforeEnter', 'valueAfterLeave', 'value'];

export default stamp(React).compose(SelectSelf, {

  displayName: 'Item',

  propTypes: {},

  defaultProps: {},

  state: {},

  // componentWillAppear(callback) {
  //   const transition = this.selectSelf()
  //     .transition()
  //     .duration(1000)
  //     .ease(d3.easeCubicInOut);
  //
  //   ['attr', 'attrTween'].forEach(method => {
  //     if (itsSet(mutations[method])) {
  //       Object.keys(mutations[method]).forEach(key => {
  //         transition[method](key, mutations[method][key]);
  //         // transition.attr('opacity', 1);
  //       });
  //     }
  //   });
  //
  //   transition.on('end', () => {
  //     if (!this.isUnmounting) {
  //       if (itsSet(mutations.state)) this.setState(mutations.state);
  //       callback();
  //     }
  //   });
  // },
  //
  // componentWillEnter(callback) {
  //   const mutations = this.getMutations('componentWillEnter');
  //
  //   const transition = this.selectSelf()
  //     .transition()
  //     .duration(1000)
  //     .ease(d3.easeCubicInOut);
  //
  //   ['attr', 'attrTween'].forEach(method => {
  //     if (itsSet(mutations[method])) {
  //       Object.keys(mutations[method]).forEach(key => {
  //         transition[method](key, mutations[method][key]);
  //       });
  //     }
  //   });
  //
  //   transition.on('end', () => {
  //     if (!this.isUnmounting) {
  //       if (itsSet(mutations.state)) this.setState(mutations.state);
  //       if (callback) callback();
  //     }
  //   });
  // },
  //
  // componentWillReceiveProps(nextProps) {
  //   if (!deepEqual(this.props, nextProps)) {
  //
  //     const mutations = this.getMutations('componentWillReceiveProps', nextProps);
  //
  //     const transition = this.selectSelf()
  //         .transition()
  //         .duration(1000)
  //         .ease(d3.easeCubicInOut);
  //
  //     ['attr', 'attrTween'].forEach(method => {
  //       if (itsSet(mutations[method])) {
  //         Object.keys(mutations[method]).forEach(key => {
  //           transition[method](key, mutations[method][key]);
  //         });
  //       }
  //     });
  //
  //     transition.on('end', () => {
  //       if (!this.isUnmounting && itsSet(mutations.state)) this.setState(mutations.state);
  //     });
  //   }
  // },
  //
  // componentWillLeave(callback) {
  //   const mutations = this.getMutations('componentWillLeave');
  //
  //   const transition = this.selectSelf()
  //     .transition()
  //     .duration(1000)
  //     .ease(d3.easeCubicInOut);
  //
  //   ['attr', 'attrTween'].forEach(method => {
  //     if (itsSet(mutations[method])) {
  //       Object.keys(mutations[method]).forEach(key => {
  //         transition[method](key, mutations[method][key]);
  //       });
  //     }
  //   });
  //
  //   transition.on('end', () => {
  //     if (!this.isUnmounting) callback();
  //   });
  // },

  render() {
    console.log(this.getChildProps(this.props.value));
    return (
      <g>
        <this.props.component {...this.getChildProps(this.props.value)} />
      </g>
    );
  },

  getChildProps(value) {
    return Object.keys(this.props)
      .filter(key => !BLACKLIST_CHILD_PROPS.includes(key))
      .reduce((acc, key) => {
        const prop = this.props[key];
        return Object.assign({}, acc, { [key]: isFunction(prop) ? prop(value) : prop });
      }, {});
  },

});
