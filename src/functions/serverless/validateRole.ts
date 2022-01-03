export function validateRole(authorizer: any, roles: string[]): boolean {
  const groups: string[] | undefined = authorizer?.groups;
  return groups && roles.some((role) => groups.includes(role));
}
