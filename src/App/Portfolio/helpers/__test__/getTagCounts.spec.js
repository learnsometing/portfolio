import getTagCounts from '../getTagCounts';

describe('getTagCounts', () => {
  it('should count the number of occurences of a string in an array of arrays', () => {
    const tags = [
      ['CSS', 'React', 'HTML'],
      ['CSS', 'HTML', 'JavaScript'],
    ];

    const result = { CSS: 2, HTML: 2, JavaScript: 1, React: 1 };

    expect(getTagCounts(tags)).toEqual(result);
  });
});
