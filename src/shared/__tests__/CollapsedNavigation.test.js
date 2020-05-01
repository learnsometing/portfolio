import React from 'react';
import { create, act } from 'react-test-renderer';
import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import CollapsedNavigation from '../CollapsedNavigation';

describe('CollapsedNavigation', () => {
  let tree;
  beforeEach(() =>
    act(() => {
      tree = create(<CollapsedNavigation />);
    })
  );
  it('should match the snapshot', () => {
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
