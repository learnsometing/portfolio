import React from 'react';
import { create } from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';

import scTheme from '../SCTheme';

import BottomNavigation from '../BottomNavigation/BottomNavigation';

describe('BottomNavigation', () => {
  it('should match the snapshot', () => {
    const tree = create(
      <ThemeProvider theme={scTheme}>
        <BottomNavigation />
      </ThemeProvider>
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
