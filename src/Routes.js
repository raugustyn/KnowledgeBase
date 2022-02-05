import {Issue} from "./data"

export const ISSUES_ROUTE = '/Issues/'
export const TOPICS_ROUTE = '/Topics/'

export function getIssueRoute(id) {
    return ISSUES_ROUTE + id
}
