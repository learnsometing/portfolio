export function sortByDateDESC(a: string, b: string): number {
  const aInMS = Date.parse(a);
  const bInMS = Date.parse(b);

  if (aInMS < bInMS) {
    return 1;
  } else if (aInMS > bInMS) {
    return -1;
  }
  return 0;
}

export function sortByDateASC(a: string, b: string): number {
  const aInMS = Date.parse(a);
  const bInMS = Date.parse(b);
  if (aInMS > bInMS) {
    return 1;
  } else if (aInMS < bInMS) {
    return -1;
  }
  return 0;
}
