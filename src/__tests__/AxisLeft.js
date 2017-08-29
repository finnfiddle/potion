// /* global expect */
/* eslint-disable max-len */
// import React from 'react';

// import { shallow, mount } from 'enzyme';

// import Svg from '../Svg';
// import Arc from '../Arc';

// describe('Arc', () => {

//   it('renders', () => {
//     const actual = shallow(<Arc />);
//     const expected = shallow(<path />);
//     expect(actual.html()).to.equal(expected.html());
//   });

//   it('renders', () => {
//     const actual = mount(
//       <Svg>
//         <Arc
//           innerRadius={({ datum }) => datum.foo}
//           outerRadius={200}
//           startAngle={Math.PI / 2}
//           endAngle={Math.PI / 2 * 3}
//           fill='black'
//           stroke='red'
//           strokeWidth={2}
//           style={{
//             display: 'block',
//           }}
//           datum={{ foo: 100 }}
//         />
//       </Svg>
//     );
//     const expected = shallow(
//       <svg>
//         <g>
//           <path
//             fill='black'
//             stroke='red'
//             strokeWidth='2'
//             style={{ display: 'block' }}
//             d='M200,0A200,200,0,1,1,-200,2.4492935982947064e-14L-100,1.2246467991473532e-14A100,100,0,1,0,100,0Z'
//           />
//         </g>
//       </svg>
//     );
//     expect(actual.update().html()).to.equalIgnoreSpaces(expected.html());
//   });

// });
