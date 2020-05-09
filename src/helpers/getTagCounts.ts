function flatten(tags: string[][]): string[] {
  return tags.reduce((acc, curr) => [...acc, ...curr]).sort();
}

function countTags(
  tagCounts: Map<string, number>,
  tag: string
): Map<string, number> {
  const tagCount = tagCounts.get(tag);
  if (tagCount) {
    tagCounts.set(tag, tagCount + 1);
  } else {
    tagCounts.set(tag, 1);
  }
  return tagCounts;
}

function getTagCounts(tags: string[][]): Map<string, number> {
  const flattenedTags = flatten(tags);
  return flattenedTags.reduce(countTags, new Map());
}

export default getTagCounts;
