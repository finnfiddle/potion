import PropTypes from 'prop-types';

export const componentsType = PropTypes.shape({
  svg: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  circle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  ellipse: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  g: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  linearGradient: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  radialGradient: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  line: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  polygon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  polyline: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  rect: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  symbol: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  use: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  defs: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  stop: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
});
