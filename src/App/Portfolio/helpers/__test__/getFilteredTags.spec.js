import getFilteredTags from '../getFilteredTags';

describe('getFilteredTags', () => {
  it('should only return the arrays that contain every applied filter', () => {
    const tags = [
      ['CSS', 'HTML', 'JavaScript', 'Unit Testing'],
      ['CSS', 'JavaScript', 'React'],
      ['JavaScript', 'React', 'StyledComponents', 'CSS'],
      ['Ruby on Rails', 'Collaboration', 'HTML', 'CSS'],
    ];

    const appliedFilters = ['CSS', 'HTML'];

    const expected = [
      ['CSS', 'HTML', 'JavaScript', 'Unit Testing'],
      ['Ruby on Rails', 'Collaboration', 'HTML', 'CSS'],
    ];

    const result = getFilteredTags(appliedFilters, tags);

    expect(result).toStrictEqual(expected);
  });
});
