import PropTypes from 'prop-types';

export const components = PropTypes.shape({
  svg: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  circle: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  ellipse: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  g: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  linearGradient: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  radialGradient: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  line: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  polygon: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  polyline: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  rect: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  symbol: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  use: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  defs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  stop: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
});
