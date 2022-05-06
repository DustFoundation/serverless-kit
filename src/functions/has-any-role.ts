export function hasAnyRole(authorizer: any, roles: string[]): boolean {
  return authorizer?.groups && roles.some((role) => authorizer.groups.includes(role));
}
