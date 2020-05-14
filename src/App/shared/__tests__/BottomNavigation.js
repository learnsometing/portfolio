import React from 'react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import BottomNavigation from '../BottomNavigation/BottomNavigation';

describe('BottomNavigation', () => {
  it('should match the snapshot', () => {
    const tree = create(<BottomNavigation />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
