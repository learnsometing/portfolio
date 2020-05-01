import React from 'react';
import PortfolioCard from '../PortfolioCard';
import TestRenderer from 'react-test-renderer';
import project from '../__factory__/PortfolioCard';

describe('PortfolioCard', () => {
  const proj = project();
  it('should match the snapshot', () => {
    const tree = TestRenderer.create(<PortfolioCard project={proj} />);
    expect(tree).toMatchSnapshot();
  });
});
