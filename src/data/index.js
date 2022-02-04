import Issue, { storyItem, createTopic, getIssueById } from './Issue'
import {ISSUE_TYPES} from './IssueTypes'
import { users } from './Users'

export const GROUP_TYPE = 'Familiar'

function createData(name, timestamp, closedat = null, originator = 'babnic', story=[]) {
    let result = createTopic(name, [
        storyItem(ISSUE_TYPES.OPEN, timestamp, originator, 'create'),
        ...story
    ])

    return result
}

function findUser(userName, createIfNotFound = true) { return users.findUser(userName, createIfNotFound) }

let issues = [
    createTopic( 'Odsun náspu a zářezu od cesty',
        [
            storyItem(ISSUE_TYPES.COMMENT, '01/20/2022 19:30', 'raugustyn', 'V části průběhu liniového prvku kategorie "Komunikace" dochází k souběžnému, nesymetrickému průběhu dvou celých liniových objektů různých typů téže kategorie Terénní reliéf. Prostým vyjádřením průběhů kartografickými znaky, při čemž prioritní objekt komunikací nebude modifikován, by došlo ke kolizím: - čárky smluvené značky zářezu by se dotýkaly nebo překrývaly se značkou lesní cesty a hrana náspu by byla ke značce lesní cesty blíže, než je povolený limit.\n\nPozn.: Vyjádření situace kartografickými znaky po odstranění kolize ovlivní také kresbu liniových objektů terénního reliéfu - vrstevnice.'),
            storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 18:20', 'raugustyn', `odsun liniových prvků (Z_TerenniRelief_L) od cesty\n![](http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/ThumbnailImages/Situace_01.png)\n[Plné rozlišení](http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/ZM10/Situace_01.png) | [Karta situace](http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_1.html) | [Aktualizuj kartu situace](http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/TB04CUZK001_KnowledgeBase/rest.py/Build/SituationCard/1)\nPoslední komentář před uzavřením Issue, uvozený textem 'Popis situace:',  bude použit jako popis situace!`),
            storyItem(ISSUE_TYPES.ASSIGN_TO, '02/13/2020 19:20', 'raugustyn', 'raugustyn'),
            storyItem(ISSUE_TYPES.ASSIGN_TO, '02/13/2020 19:20', 'raugustyn', 'kocenda'),
            storyItem(ISSUE_TYPES.ADD_TO_MILESTONE, '02/13/2020 19:20', 'janlangr', 'Popis jednotlivých situací'),
            storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 19:30', 'droyda', 'Značka terénního stupně je dosunuta na úroveň tresholdu - je nutné dodržet levo/pravostrannost značky.\n\nPři odsunu dochází k paralelizaci průběhu obou prvků.'),
            storyItem(ISSUE_TYPES.ADD_LABEL, '02/13/2020 19:20', 'zemekjar', ['Pochopil Zem', 'Generalization Issue']),
            storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 18:20', 'raugustyn', `Upřesnění hangout 20.10. kolize s vrstevnicemi je řešena pomocí maskování při vykreslování dat.`),
            storyItem(ISSUE_TYPES.ADD_LABEL, '02/13/2020 19:20', 'raugustyn', 'Pochopil Aug'),
            storyItem(ISSUE_TYPES.ADD_LABEL, '02/13/2020 19:20', 'raugustyn', 'Generalizace'),
            storyItem(ISSUE_TYPES.CLOSE, '02/13/2020 19:20', 'raugustyn', 'http://www.vugtk.cz/TB04CUZK001/03_CartographicSituations/ZM10/Situace_01.png'),
            storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 18:20', 'raugustyn', `V části liniového prvku z kategorie Komunikace dochází k souběžnému, nesymetrickému průběhu dvou celých liniových objektů různých typů z téže kategorie Terénní reliéf. Prioritním prvkem v této situaci je komunikace.`),
            storyItem(ISSUE_TYPES.ADD_LABEL, '02/13/2020 19:20', 'janlangr', 'Pochopil Lan'),
            storyItem(ISSUE_TYPES.ADD_TO_MILESTONE, '02/13/2020 19:20', 'kocenda', 'Pojmenování jednotlivých situací'),
            storyItem(ISSUE_TYPES.ADD_LABEL, '02/13/2020 19:20', 'raugustyn', 'M1'),
            storyItem(ISSUE_TYPES.IMAGE, '02/13/2020 19:20', 'raugustyn', 'http://www.vugtk.cz/TB04CUZK001/03_CartographicSituations/ZM10/Situace_01.png'),
            storyItem(ISSUE_TYPES.COLLECTION, '02/13/2020 19:20', 'raugustyn', null, null, [
                storyItem(ISSUE_TYPES.IMAGE, '02/13/2020 19:20', 'raugustyn','http://www.vugtk.cz/TB04CUZK001/03_CartographicSituations/ZM10/Situace_01.png', null, [storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 19:20', 'raugustyn', 'Odsun náspu a zářezu od cesty', 'caption')]),
                storyItem(ISSUE_TYPES.IMAGE, '02/13/2020 19:20', 'raugustyn','http://www.vugtk.cz/TB04CUZK001/03_CartographicSituations/ZM10/Situace_02.png', null, [storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 19:20', 'raugustyn', 'Postupný odsun stromořadí a zářezů od silnice.', 'caption')]),
                storyItem(ISSUE_TYPES.IMAGE, '02/13/2020 19:20', 'raugustyn','http://www.vugtk.cz/TB04CUZK001/03_CartographicSituations/ZM10/Situace_03.png', null, [storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 19:20', 'raugustyn', 'Slícování náspu na lemovku železnice', 'caption')]),
                storyItem(ISSUE_TYPES.IMAGE, '02/13/2020 19:20', 'raugustyn','http://www.vugtk.cz/TB04CUZK001/03_CartographicSituations/ZM10/Situace_04.png', null, [storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 19:20', 'raugustyn', 'Odsun bodových prvků od sebe', 'caption')]),
                storyItem(ISSUE_TYPES.IMAGE, '02/13/2020 19:20', 'raugustyn','http://www.vugtk.cz/TB04CUZK001/03_CartographicSituations/ZM10/Situace_05.png', null, [storyItem(ISSUE_TYPES.COMMENT, '02/13/2020 19:20', 'raugustyn', 'Slícování terénní stupně na hranici užívání', 'caption')]),

            ]),
        ]
    ),
    createData('Pixel samples', '4/10/2021', null, 'raugustyn', [
        storyItem(ISSUE_TYPES.IMAGE, '02/13/2020 19:20', 'raugustyn', '/TopicSamples/02_PixelSamples.png'),
    ]),
    createData('Ajoining water areas (riwers) should serve as one cluster', '5 Nov 2021', null,'droyda', [
        storyItem(ISSUE_TYPES.IMAGE, '02/13/2020 19:20', 'raugustyn', '/TopicSamples/03_AjoiningWaterAreasShouldServeAsOneCluster.png'),
    ]),
    createData('False stream to lake gap', '5 Nov 2021', null, 'raugustyn', [
        storyItem(ISSUE_TYPES.IMAGE, '02/13/2020 19:20', 'raugustyn', '/TopicSamples/04_FalseStreamToLakeGap.png'),
    ]),
    createData('Apparent data bug', '5/112021'),
    createData('Lake without outflow must be roots of water network', '5/11/2021'),
    createData('Lake outflow marked as inflow', '4/11/2021'),
    createData('Ice cream sandwich', '4/11/2021'),
    createData('Kanál???', '5/11/2021'),
    createData('Neklasifikovana linie', '5/11/2021', '6/11/2021'),
    createData('endpoint na jezeře nemusí být přítok, ale výtok', '5/11/2021'),
    createData('Ústí vysychajících toků je na soutoku', 'Nov 2021'),
    createData('Soutok ústí do jiného toku...', '5/11/2021'),
    createData('Gaps na toku', '5/11/2021'),
]

export {
    issues,
    users,
    findUser,
    getIssueById,
    Issue,
    storyItem,
    ISSUE_TYPES
}