import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import FlexContainer from '../FlexContainer';

describe('FlexContainer', () => {
  it('should have default props', () => {
    const { queryByText } = render(<FlexContainer>Foo</FlexContainer>);
    const flexContainer = queryByText('Foo');
    expect(flexContainer).toHaveStyleRule('display', 'flex');
    expect(flexContainer).toHaveStyleRule('flex-direction', 'row');
    expect(flexContainer).toHaveStyleRule('justify-content', 'flex-start');
    expect(flexContainer).toHaveStyleRule('align-items', 'flex-start');
  });

  it('should accept props to control flex', () => {
    const { queryByText } = render(
      <FlexContainer
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'flex-end'}
      >
        Foo
      </FlexContainer>
    );
    const flexContainer = queryByText('Foo');
    expect(flexContainer).toHaveStyleRule('display', 'flex');
    expect(flexContainer).toHaveStyleRule('flex-direction', 'column');
    expect(flexContainer).toHaveStyleRule('justify-content', 'center');
    expect(flexContainer).toHaveStyleRule('align-items', 'flex-end');
  });
});
