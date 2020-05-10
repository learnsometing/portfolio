interface TagMap {
  [key: string]: number;
}

function flatten(tags: string[][]): string[] {
  if (tags) {
    return tags.reduce((acc, curr) => [...acc, ...curr]).sort();
  }

  return tags;
}

function countTags(tagCounts: TagMap, tag: string): TagMap {
  const tagCount = tagCounts[tag];
  if (tagCount) {
    tagCounts[tag]++;
  } else {
    tagCounts[tag] = 1;
  }
  return tagCounts;
}

function getTagCounts(tags: string[][]): TagMap {
  const flattenedTags = flatten(tags);
  return flattenedTags.reduce(countTags, {});
}

export default getTagCounts;
