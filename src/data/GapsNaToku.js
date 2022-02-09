import {createTopic, storyItem} from "./Issue";
import {ISSUE_TYPES} from "./IssueTypes";

function createData(name, timestamp, closedat = null, originator = 'droyda', story = []) {
    return createTopic(name, [
        storyItem(ISSUE_TYPES.OPEN, timestamp, originator, 'create'),
        ...story
    ])
}

const paragraphLabel = () => storyItem(ISSUE_TYPES.ADD_LABEL, Date.now(), 'raugustyn', 'PARAGRAPH')
const headingLabel = () => storyItem(ISSUE_TYPES.ADD_LABEL, Date.now(), 'raugustyn', 'HEADING')
function comment(timestamp, originator, value = '') { return storyItem(ISSUE_TYPES.COMMENT, timestamp, originator, value) }

createData('Water stream gaps', '5/112021', null, null, [
    headingLabel(),
        storyItem(ISSUE_TYPES.IMAGE, '02/13/2020 19:20', 'raugustyn', '/TopicSamples/06_WaterStreamGaps/06_WaterStreamGaps.png', null, [
            paragraphLabel(),
            storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 19:20', 'raugustyn', 'Water stream gap', 'caption')
        ]),
        storyItem(ISSUE_TYPES.IMAGE, '02/13/2020 19:20', 'raugustyn', '/TopicSamples/06_WaterStreamGaps/Err01_FalseGaps.png', null, [
            paragraphLabel(),
            storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 19:20', 'raugustyn', 'False gap', 'caption')
        ]),
        storyItem(ISSUE_TYPES.IMAGE, '02/13/2020 19:20', 'raugustyn', '/TopicSamples/06_WaterStreamGaps/Err02_DeathEnd.png', null, [
            paragraphLabel(),
            storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 19:20', 'raugustyn', 'Death end', 'caption')
        ]),
        storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 18:20', 'raugustyn', `Odsun náspu a zářezu od cesty`, null, [
            headingLabel()
        ]),

])
