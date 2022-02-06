export function hasRole(authorizer: any, roles: string[], options: Options = {}): boolean {
  const groups: string[] | undefined = authorizer?.groups;
  const includes = (role: string) => groups.includes(role);
  return groups && (options.all ? roles.every(includes) : roles.some(includes));
}

interface Options {
  all?: boolean;
}
