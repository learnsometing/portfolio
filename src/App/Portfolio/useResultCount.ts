import { useEffect, useState } from 'react';

const useResultCount: (
  allProjectTags: string[][],
  filters: string[]
) => number = (allProjectTags, filters) => {
  const defaultProjectCount = allProjectTags.length;
  const [resultCount, setResultCount] = useState(defaultProjectCount);

  useEffect(() => {
    if (filters && filters.length) {
      const newResultCount = allProjectTags.filter((tags) =>
        filters.every((val: string) => tags.includes(val))
      ).length;
      setResultCount(newResultCount);
    } else {
      setResultCount(defaultProjectCount);
    }
  }, [filters]);

  return resultCount;
};

export default useResultCount;
