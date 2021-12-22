export function validateRole(authorizer: any, roles: string[]): boolean {
  const groups = authorizer?.groups;
  return groups && roles.some((role) => groups.indexOf(role) > -1) ? true : false;
}
