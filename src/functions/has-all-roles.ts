export function hasAllRoles(authorizer: any, roles: string[]): boolean {
  return authorizer?.groups && roles.every((role) => authorizer.groups.includes(role));
}
