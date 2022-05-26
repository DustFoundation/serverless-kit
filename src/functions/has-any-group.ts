export function hasAnyGroup(authorizer: any, groups: string[]): boolean {
  return authorizer?.groups && groups.some((group) => authorizer.groups.includes(group));
}
