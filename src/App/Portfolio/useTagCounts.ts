import { useState, useEffect } from 'react';
import getTagCounts, { TagMap } from '../../helpers/getTagCounts';
import getFilteredTags from '../../helpers/getFilteredTags';

const useTagCounts: (
  defaultTagCounts: TagMap,
  allProjectTags: string[][],
  filters: string[]
) => TagMap = (defaultTagCounts, allProjectTags, filters) => {
  const [tagCounts, setTagCounts] = useState(defaultTagCounts);

  useEffect(() => {
    if (filters && filters.length) {
      const filteredTags = getFilteredTags(filters, allProjectTags);
      const filteredTagCounts = getTagCounts(filteredTags);
      setTagCounts(filteredTagCounts);
    } else {
      setTagCounts(defaultTagCounts);
    }
  }, [filters]);

  return tagCounts;
};

export default useTagCounts;
