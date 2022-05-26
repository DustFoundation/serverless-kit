export function hasAllGroups(authorizer: any, groups: string[]): boolean {
  return authorizer?.groups && groups.every((group) => authorizer.groups.includes(group));
}
