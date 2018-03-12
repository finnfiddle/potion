import React from 'react';
import Pattern from 'react-svg-textures';
import { types, defaultProps } from '@potion/util';

const Provider = WrappedComponent => {
  const Wrapper = (props, context) => (
    <WrappedComponent
      {...props}
      components={{
        ...defaultProps.components,
        ...(context.components || {}),
      }}
    />
  );
  Wrapper.contextTypes = {
    components: types.components,
  };
  return Wrapper;
};

export default {
  Circles: Provider(Pattern.Circles),
  Lines: Provider(Pattern.Lines),
  Paths: Provider(Pattern.Paths),
};
