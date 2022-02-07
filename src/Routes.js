export const ISSUES_ROUTE = '/Issues/'
export const TOPICS_ROUTE = '/Topics/'
export const USERS_ROUTE = '/Users/'

export function getIssueRoute(id) { return ISSUES_ROUTE + id }
export function getUserRoute(user) { return USERS_ROUTE + user.name }
