const createIssueType = (caption, description='') => ({ caption, description })

export const ISSUE_TYPES = {
    OPEN: createIssueType('Open Issue'),
    CLOSE: createIssueType('Close Issue'),
    COMMENT: createIssueType('Comment'),
    ASSIGN_TO: createIssueType('Assign to person'),
    ADD_TO_MILESTONE: createIssueType('Assign to milestone'),
    ADD_LABEL: createIssueType('Add Label'),
    IMAGE: createIssueType('Image')
}