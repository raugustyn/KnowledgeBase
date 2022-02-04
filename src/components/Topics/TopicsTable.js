/*
 How to change CSS root variable in React?

 https://stackoverflow.com/questions/45226712/how-to-change-css-root-variable-in-react
 */
import './TopicsTable.css'
import * as React from 'react';
import {issues} from "../../data"

export default function TopicsTable() {
    return (
        <table className="IssuesTable">
            <thead>
            <tr>
                <th colSpan="4">Ahoj</th>
            </tr>
            </thead>
            <tbody>
            {(issues).map((issue) => {
                const openItem = issue.getOpenItem()

                return (
                <tr key={issue.uid}>
                    <td>
                        <svg className={issue.closedat === null ? "octicon open" : "octicon closed"} viewBox="0 0 16 16" version="1.1" width="16"
                             height="16" aria-hidden="true">
                            <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                            <path fillRule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z"></path>
                        </svg>
                    </td>
                    <td>
                        <a className="Link--primary h4" href={'/Topics/' + issue.uid}>{issue.name}</a>
                        <p className="color-fg-muted">
                            #{issue.uid}&nbsp;
                            {openItem == null ? 'opened on ' + openItem.timestamp : 'was closed on ' + issue.closedat}&nbsp;
                            by <a className="Link--muted" href={'/Users/' + openItem.originator}>{openItem.originator}</a>
                        </p>
                    </td>
                </tr>
                )
            })}
            </tbody>
        </table>

    )
}
