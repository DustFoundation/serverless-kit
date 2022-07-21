export function hasAllGroups(userGroups: string[], validateGroups: string[]): boolean {
  return userGroups && validateGroups.every((x) => x.length && userGroups.includes(x));
}
