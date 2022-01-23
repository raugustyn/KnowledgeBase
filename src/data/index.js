import Issue from "./Issue"
import Story from "./Story"
import StoryItem from "./StoryItem"
import {ISSUE_TYPES} from "./IssueTypes"
import { users } from "./Users"

export const GROUP_TYPE = 'Familiar'

let dataCount = 0

function createData(name, timestamp, closedat = null, originator = 'babnic', story=[]) {
    dataCount += 1
    let result = new Issue(dataCount, name, new Story([
        new StoryItem(ISSUE_TYPES.OPEN, timestamp, originator, 'create'),
        ...story
    ]))

    return result
}

function findUser(userName, createIfNotFound = true) {
    return users.findUser(userName, createIfNotFound)
}

let issues = [
    new Issue(dataCount, 'Odsun náspu a zářezu od cesty',
        new Story([
            new StoryItem(ISSUE_TYPES.COMMENT, '19:30', 'raugustyn', 'V části průběhu liniového prvku kategorie "Komunikace" dochází k souběžnému, nesymetrickému průběhu dvou celých liniových objektů různých typů téže kategorie Terénní reliéf. Prostým vyjádřením průběhů kartografickými znaky, při čemž prioritní objekt komunikací nebude modifikován, by došlo ke kolizím: - čárky smluvené značky zářezu by se dotýkaly nebo překrývaly se značkou lesní cesty a hrana náspu by byla ke značce lesní cesty blíže, než je povolený limit.\n\nPozn.: Vyjádření situace kartografickými znaky po odstranění kolize ovlivní také kresbu liniových objektů terénního reliéfu - vrstevnice.'),
            new StoryItem(ISSUE_TYPES.COMMENT, '18:20', 'raugustyn', `odsun liniových prvků (Z_TerenniRelief_L) od cesty\n![](http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/ThumbnailImages/Situace_01.png)\n[Plné rozlišení](http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/ZM10/Situace_01.png) | [Karta situace](http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_1.html) | [Aktualizuj kartu situace](http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/TB04CUZK001_KnowledgeBase/rest.py/Build/SituationCard/1)\nPoslední komentář před uzavřením Issue, uvozený textem 'Popis situace:',  bude použit jako popis situace!`),
            new StoryItem(ISSUE_TYPES.ASSIGN_TO, '19:20', 'raugustyn', 'raugustyn'),
            new StoryItem(ISSUE_TYPES.ADD_TO_MILESTONE, '19:20', 'raugustyn', 'Popis jednotlivých situací'),
            new StoryItem(ISSUE_TYPES.COMMENT, '19:30', 'droyda', 'Značka terénního stupně je dosunuta na úroveň tresholdu - je nutné dodržet levo/pravostrannost značky.\n\nPři odsunu dochází k paralelizaci průběhu obou prvků.'),
            new StoryItem(ISSUE_TYPES.ADD_LABEL, '19:20', 'zemekjar', 'Pochopil Zem'),
            new StoryItem(ISSUE_TYPES.COMMENT, '18:20', 'raugustyn', `Upřesnění hangout 20.10. kolize s vrstevnicemi je řešena pomocí maskování při vykreslování dat.`),
            new StoryItem(ISSUE_TYPES.ADD_LABEL, '19:20', 'raugustyn', 'Pochopil Aug'),
            new StoryItem(ISSUE_TYPES.ADD_LABEL, '19:20', 'raugustyn', 'Generalizace'),
            new StoryItem(ISSUE_TYPES.COMMENT, '18:20', 'raugustyn', `V části liniového prvku z kategorie Komunikace dochází k souběžnému, nesymetrickému průběhu dvou celých liniových objektů různých typů z téže kategorie Terénní reliéf. Prioritním prvkem v této situaci je komunikace.`),
            new StoryItem(ISSUE_TYPES.ADD_LABEL, '19:20', 'janlangr', 'Pochopil Lan'),
            new StoryItem(ISSUE_TYPES.ADD_TO_MILESTONE, '19:20', 'kocenda', 'Pojmenování jednotlivých situací'),
            new StoryItem(ISSUE_TYPES.ADD_LABEL, '19:20', 'raugustyn', 'M1'),
            new StoryItem(ISSUE_TYPES.IMAGE, '19:20', 'raugustyn', 'http://www.vugtk.cz/TB04CUZK001/03_CartographicSituations/ZM10/Situace_01.png'),
        ])
    ),
    createData('Pixel samples', '4 Nov 2021', null, 'raugustyn', [
        new StoryItem(ISSUE_TYPES.IMAGE, '19:20', 'raugustyn', '/TopicSamples/02_PixelSamples.png'),
    ]),
    createData('Ajoining water areas (riwers) should serve as one cluster', '5 Nov 2021', null,'droyda', [
        new StoryItem(ISSUE_TYPES.IMAGE, '19:20', 'raugustyn', '/TopicSamples/03_AjoiningWaterAreasShouldServeAsOneCluster.png'),
    ]),
    createData('False stream to lake gap', '5 Nov 2021', null, 'raugustyn', [
        new StoryItem(ISSUE_TYPES.IMAGE, '19:20', 'raugustyn', '/TopicSamples/04_FalseStreamToLakeGap.png'),
    ]),
    createData('Apparent data bug', '5 Nov 2021'),
    createData('Lake without outflow must be roots of water network', '5 Nov 2021'),
    createData('Lake outflow marked as inflow', '4 Nov 2021'),
    createData('Ice cream sandwich', '4 Nov 2021'),
    createData('Kanál???', '5 Nov 2021'),
    createData('Neklasifikovana linie', '5 Nov 2021', '6 Nov 2021'),
    createData('endpoint na jezeře nemusí být přítok, ale výtok', '5 Nov 2021'),
    createData('Ústí vysychajících toků je na soutoku', 'Nov 2021'),
    createData('Soutok ústí do jiného toku...', '5 Nov 2021'),
    createData('Gaps na toku', '5 Nov 2021'),
]


export {
    issues,
    users,
    findUser,
    Issue,
    Story,
    StoryItem,
    ISSUE_TYPES
}