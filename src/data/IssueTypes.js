import React from "react";
import {BiImage} from "react-icons/bi"
import { MdOutlineTopic } from "react-icons/md";
import {HiOutlineCollection} from "react-icons/hi"
import FaceIcon from '@mui/icons-material/Face';
import BadgeIcon from '@mui/icons-material/Badge'
import DnsIcon from '@mui/icons-material/Dns'
import AltRouteIcon from '@mui/icons-material/AltRoute'
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges'
import {ImImages} from "react-icons/im";

const createIssueType = (caption, message = '', icon = null, publish=false) => ({caption, message, icon, publish})

export const ISSUE_TYPES = {
    AVATARIMAGE: createIssueType('Avatar Image', 'avatar image', <FaceIcon /> ),
    FIRSTNAME: createIssueType('First Name', 'first name', <DnsIcon />),
    LASTNAME: createIssueType('Last Name', 'last name', <BadgeIcon />),
    OTHER: createIssueType('Other', 'other issue', <AltRouteIcon />),
    TOPIC: createIssueType('Topic', '', <MdOutlineTopic />),
    USER: createIssueType('User'),
    OPEN: createIssueType('Open Issue'),
    CLOSE: createIssueType('Close Issue', 'closed this', <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-issue-closed color-fg-inherit"><path d="M11.28 6.78a.75.75 0 00-1.06-1.06L7.25 8.69 5.78 7.22a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.06 0l3.5-3.5z"></path><path fillRule="evenodd" d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-1.5 0a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z"></path></svg>),
    COMMENT: createIssueType('Comment', true),
    ASSIGN_TO: createIssueType('Assign to person', 'assigned this', <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-person color-fg-inherit"><path fillRule="evenodd" d="M10.5 5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm.061 3.073a4 4 0 10-5.123 0 6.004 6.004 0 00-3.431 5.142.75.75 0 001.498.07 4.5 4.5 0 018.99 0 .75.75 0 101.498-.07 6.005 6.005 0 00-3.432-5.142z"></path></svg>),
    ADD_TO_MILESTONE: createIssueType('Assign to milestone', 'added this', <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-milestone color-fg-inherit"><path fillRule="evenodd" d="M7.75 0a.75.75 0 01.75.75V3h3.634c.414 0 .814.147 1.13.414l2.07 1.75a1.75 1.75 0 010 2.672l-2.07 1.75a1.75 1.75 0 01-1.13.414H8.5v5.25a.75.75 0 11-1.5 0V10H2.75A1.75 1.75 0 011 8.25v-3.5C1 3.784 1.784 3 2.75 3H7V.75A.75.75 0 017.75 0zm0 8.5h4.384a.25.25 0 00.161-.06l2.07-1.75a.25.25 0 000-.38l-2.07-1.75a.25.25 0 00-.161-.06H2.75a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h5z"></path></svg>),
    ADD_LABEL: createIssueType('Add Label', 'labeled this', <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" className="octicon octicon-tag color-fg-inherit"><path fillRule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path></svg>),
    IMAGE: createIssueType('Image', 'added image', <BiImage />, true),
    COLLECTION: createIssueType('Collection', 'added collection', <HiOutlineCollection/>, true),
    IMAGELIST: createIssueType('Image list', 'image collection', <ImImages/>, true),
    MODIFY: createIssueType('Modify', 'modify value', <PublishedWithChangesIcon />)
}