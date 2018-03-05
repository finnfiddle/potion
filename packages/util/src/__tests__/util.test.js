/* global expect */
/* eslint-disable max-len */
import { getTransformations, getRNSvgTransformations } from '../index';

describe('Util', () => {

  describe('getTransformations', () => {

    it('object', () => {
      const actual = getTransformations({
        rotate: [300, 400, 500],
        translate: [100, 200],
        scale: [500, 600],
        matrix: ['a', 'b', 'c', 'd', 'e', 'f'],
        skewX: [123],
        skewY: [456],
      });

      expect(actual).to.equal(' rotate(300, 400, 500) translate(100, 200) scale(500, 600) matrix(a, b, c, d, e, f) skewX(123) skewY(456)');
    });

    it('array', () => {
      const actual = getTransformations([
        { type: 'rotate', value: [300, 400, 500] },
        { type: 'translate', value: [100, 200] },
        { type: 'scale', value: [500, 600] },
        { type: 'matrix', value: ['a', 'b', 'c', 'd', 'e', 'f'] },
        { type: 'skewX', value: [123] },
        { type: 'skewY', value: [456] },
      ]);

      expect(actual).to.equal(' rotate(300, 400, 500) translate(100, 200) scale(500, 600) matrix(a, b, c, d, e, f) skewX(123) skewY(456)');
    });

  });

  describe('getRNSvgTransformations', () => {
    it('object', () => {
      expect(
        getRNSvgTransformations({
          rotate: [300, 400, 500],
          translate: [100, 200],
          scale: [500, 600],
        })
      ).to.deep.equal({
        rotation: 300,
        originX: 400,
        originY: 500,
        x: 100,
        y: 200,
        scaleX: 500,
        scaleY: 600,
      });
    });

    it('array', () => {
      expect(
        getRNSvgTransformations([
          { type: 'rotate', value: [300, 400, 500] },
          { type: 'translate', value: [100, 200] },
          { type: 'scale', value: [500, 600] },
        ])
      ).to.deep.equal({
        rotation: 300,
        originX: 400,
        originY: 500,
        x: 100,
        y: 200,
        scaleX: 500,
        scaleY: 600,
      });
    });

  });

});
