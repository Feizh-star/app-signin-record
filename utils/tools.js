
export function differenceSet(a, b) {
  const bs = new Set([...b])
  return [...new Set([...a].filter(x => !bs.has(x)))]
}