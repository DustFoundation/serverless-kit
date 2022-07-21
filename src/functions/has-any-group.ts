export function hasAnyGroup(userGroups: string[], validateGroups: string[]): boolean {
  return userGroups && validateGroups.some((x) => x.length && userGroups.includes(x));
}
