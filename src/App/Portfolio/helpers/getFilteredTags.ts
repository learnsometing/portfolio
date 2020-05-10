function getFilteredTags(
  appliedFilters: string[],
  filters: string[][]
): string[][] {
  return filters.filter((filtersArray) =>
    appliedFilters.every((val) => filtersArray.includes(val))
  );
}

export default getFilteredTags;
