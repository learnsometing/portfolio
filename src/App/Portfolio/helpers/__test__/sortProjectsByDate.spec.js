import { sortByDateDESC, sortByDateASC } from '../sortProjectsByDate';

const projects = [
  {
    frontmatter: {
      date: '2020-02-25',
      title: 'Cash Pawn & Jewelry Website',
    },
  },
  {
    frontmatter: {
      date: '2020-01-07',
      title: 'React Weather App',
    },
  },
  {
    frontmatter: {
      date: '2019-09-17',
      title: 'Responsive Design Study',
    },
  },
  {
    frontmatter: {
      date: '2019-08-16',
      title: 'Dev Communities Social App',
    },
  },
  {
    frontmatter: {
      date: '2019-07-01',
      title: 'Rails Flight Booker',
    },
  },
  {
    frontmatter: {
      date: '2019-06-10',
      title: 'Hostr',
    },
  },
  {
    frontmatter: {
      date: '2019-01-31',
      title: 'Pomodoro Timer',
    },
  },
  {
    frontmatter: {
      date: '2019-01-28',
      title: 'JavaScript Calculator',
    },
  },
  {
    frontmatter: {
      date: '2018-11-06',
      title: 'Etch-a-sketch',
    },
  },
  {
    frontmatter: {
      date: '2018-10-02',
      title: 'Google Homepage',
    },
  },
];

const projectsASC = [...projects].reverse();

describe('sortByDateDESC', () => {
  it('should return the list of projects sorted by date in descending order', () => {
    const sorted = [...projects].sort((a, b) =>
      sortByDateDESC(a.frontmatter.date, b.frontmatter.date)
    );

    expect(sorted).toEqual(projects);
  });
});

describe('sortByDateASC', () => {
  it('should return the list of projects sorted by date in ascending order', () => {
    const sorted = projects.sort((a, b) =>
      sortByDateASC(a.frontmatter.date, b.frontmatter.date)
    );

    expect(sorted).toEqual(projectsASC);
  });
});
