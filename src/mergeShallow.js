export function merge(rs, src) {
  for (let p in src) {
    if (rs[p] === undefined) {
      rs[p] = src[p]
    }
  }
  return rs
}

export function mergeAll(rs, ...rest) {
  for (let i = 0; i < rest.length; i++) {
    merge(rs, rest[i])
  }
  return rs
}
