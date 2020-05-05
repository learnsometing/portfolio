import React from 'react';
import ProjectCard from '../ProjectCard';
import TestRenderer from 'react-test-renderer';
import project from '../__factory__/ProjectCard';

describe('PortfolioCard', () => {
  const proj = project();
  it('should match the snapshot', () => {
    const tree = TestRenderer.create(<ProjectCard project={proj} />);
    expect(tree).toMatchSnapshot();
  });
});
