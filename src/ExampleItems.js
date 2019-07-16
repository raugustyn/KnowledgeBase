import bookmarks from "./Bookmarks/Bookmarks"
import BookmarksGallery from "./Bookmarks/BookmarksGallery"
import CardEditor from "./Cards/CardEditor"
import ListControlsBar from "./Cards/ListControlsBar"
import CardNameEditor from "./Cards/CardNameEditor"
import PersonFaceComponent from "./Components/Users/PersonFaceComponent"
import DescriptionEditor from "./Cards/DescriptionEditor"
import { KanbanBoard, KanbanSlot, KanbanCard } from "./Boards/Kanban"
import BaderBoard from "./Boards/BaderBoard/BaderBoard.js";
import Login from "./Components/Users/Login"
import "./ConsoleEnhancements"
import { BadgesPanel } from "./Components/Badges"
import Card from "./Cards/Card"
import Discussion from "./Cards/Discussion"
import CardCollectionComponent from "./Cards/CardCollections/CardCollectionComponent"
import cardDatabase from "./Cards/CardDatabase"
import CheckListPanel from "./Components/CheckListPanel"
import CheckBoxButton from "./Components/CheckBoxButton"
import csvReader from "./Boards/BaderBoard/csvreader"
import { NoteEditor } from "./Components/NoteEditor"
import PreviewGallery from "./Boards/PreviewGallery/PreviewGallery"
import galleryItems from "./Boards/PreviewGallery/data"
//import CardsNavBar from "./Cards/CardCollections/CardsNavBar"
//import AcorrdionOutline from "./Components/AcorrdionOutline"


const discussionExample = [
                        new Discussion('Drozda', 'Oct 8, 2015 at 4:18 PM', "odsun liniových prvků (Z_TerenniRelief_L) od cesty\n" +
                            "![](http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/ThumbnailImages/Situace_01.png)\n" +
                            "\n" +
                            "[Plné rozlišení](http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/ZM10/Situace_01.png) | [Karta situace](http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_1.html) | [Aktualizuj kartu situace](http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/TB04CUZK001_KnowledgeBase/rest.py/Build/SituationCard/1)\n" +
                            "\n" +
                            "Poslední komentář před uzavřením Issue, uvozený textem 'Popis situace:',  bude použit jako popis situace!\n"),
                        new Discussion('Drozda', 'Oct 8, 2015 at 4:18 PM', 'Značka terénního stupně je dosunuta na úroveň tresholdu - je nutné dodržet levo/pravostrannost značky.\n\nPři odsunu dochází k paralelizaci průběhu obou prvků.'),
                        new Discussion('Zemek', 'Mar 19 at 2:22 PM', "Navrhujeme takovým způsobem stručně popisovat každou vybranou situace. Prosím o názory zda je to dostatečně stručné a zda vyhovuje navrhované pojetí:\n" +
                            "\n" +
                            "Situace 01: Odsun souběžných liniových prvků\n" +
                            "Založil: Sedl\n" +
                            "Původní název: Situace 1_ Odsun liniových prvků (Z_TerenniRelief_L) od cesty\n" +
                            "\n" +
                            "Stručný popis problému:\n" +
                            "V části průběhu liniového prvku kategorie Komunikace dochází k souběžnému, nesymetrickému průběhu dvou celých liniových objektů různých typů téže kategorie Terénní reliéf. Prostým vyjádřením průběhů kartografickými znaky, při čemž prioritní objekt komunikací nebude modifikován, by došlo ke kolizím: - čárky smluvené značky zářezu by se dotýkaly nebo překrývaly se značkou lesní cesty a hrana náspu by byla ke značce lesní cesty blíže, než je povolený limit.\n" +
                            "\n" +
                            "Pozn.: Vyjádření situace kartografickými znaky po odstranění kolize ovlivní také kresbu liniových objektů terénního reliéfu - vrstevnice."),
                        new Discussion('Augustyn', 'Apr 12 at 10:16 AM', "Popis situace:V části průběhu liniového prvku kategorie Komunikace dochází k souběžnému, nesymetrickému průběhu dvou celých liniových objektů různých typů téže kategorie Terénní reliéf. Prostým vyjádřením průběhů kartografickými znaky, při čemž prioritní objekt komunikací nebude modifikován, by došlo ke kolizím: - čárky smluvené značky zářezu by se dotýkaly nebo překrývaly se značkou lesní cesty a hrana náspu by byla ke značce lesní cesty blíže, než je povolený limit.\n" +
                            "\n" +
                            "Pozn.: Vyjádření situace kartografickými znaky po odstranění kolize ovlivní také kresbu liniových objektů terénního reliéfu - vrstevnice."),
                        new Discussion('Langr', 'Apr 13 at 10:36 PM', 'V části liniového prvku z kategorie Komunikace dochází k souběžnému, nesymetrickému průběhu dvou celých liniových objektů různých typů z téže kategorie Terénní reliéf. Prioritním prvkem v této situaci je komunikace.')
                    ]

const componentExamples = [
    {
        caption: 'CardNameEditor',
        componentClass: CardNameEditor,
        description: "Component for card name display. After click you can edit card name.",
        props: {name: "My Name..."}
    },
    {
        caption: 'DescriptionComponent',
        componentClass: DescriptionEditor,
        description: "This component edits card description.",
        props: {description: "Description value..."}
    },
    {
        caption: 'PersonFaceComponent',
        componentClass: PersonFaceComponent,
        description: "Person face component.",
        props: {
            personName: "Augustyn",
            showAsFace: true
        }
    },
    {
        caption: "BaderBoard",
        componentClass: BaderBoard,
        description: "This component shows Bader Board.",
        props: {  }
    },
    {
        caption: "BookmarksGallery",
        componentClass: BookmarksGallery,
        description: "This component shows bookmarks gallery.",
        props: {
            bookmarks: bookmarks,
            imagesPath: "bookmarks/"
        }
    },
    {
        caption: "KanbanBoard",
        componentClass: KanbanBoard,
        description: "This component is KanbanBoard. \n\nKanban boards visually depict work at various stages of a process using cards to represent work items and columns to represent each stage of the process. Cards are moved from left to right to show progress and to help coordinate teams performing the work. A Kanban board may be divided into horizontal \"swimlanes\" representing different kinds of work or different teams performing the work.",
        props: {
            title: "Generated Board",
            slots: [
                {
                    title: "ToDo",
                    cards : [
                            { card: new Card(13, "Plain card") },
                            { card: new Card(13, "Card with description", 'Description') },
                            { card: new Card(15, "Card with todo list(s) in progress, done 5 out of 8 todo items."),
                                toDo: {
                                    totalCount: 8,
                                    doneCount: 5
                                }
                            },
                            {
                                card: new Card("Card with todo list(s), all 8 items done."),
                                toDo: {
                                    totalCount: 8,
                                    doneCount: 8
                                }
                            },
                            {
                                card: new Card(12, "Card with 3 discussion items, description and done todo list.", 'Description', discussionExample),
                                toDo: {
                                    totalCount: 8,
                                    doneCount: 8
                                }
                            }
                        ]},
                {
                    title: "Doing",
                    cards: [ { card: new Card(12, "Plain Card") } ]
                },
                { title: "Testing", cards: [] },
                { title: "Done", cards: [] }
            ]
        }
    },
    {
        caption: "KanbanSlot",
        componentClass: KanbanSlot,
        description: "This component is KanbanSlot.",
        props: {
            title: "ToDo",
            cards : [
                    { card: new Card(13, "Plain card") },
                    { card: new Card(13, "Card with description", 'Description') },
                    { card: new Card(15, "Card with todo list(s) in progress, done 5 out of 8 todo items."),
                        toDo: {
                            totalCount: 8,
                            doneCount: 5
                        }
                    },
                    {
                        card: new Card("Card with todo list(s), all 8 items done."),
                        toDo: {
                            totalCount: 8,
                            doneCount: 8
                        }
                    },
                    {
                        card: new Card(12, "Card with 3 discussion items, description and done todo list.", 'Description', discussionExample),
                        toDo: {
                            totalCount: 8,
                            doneCount: 8
                        }
                    }
                ]
        }
    },
    {
        caption: "KanbanCard",
        componentClass: KanbanCard,
        backgroundColor: '#355876',
        description: "This component is KanbanCard.",
        props: {
            discussionCount: 3,
            toDo: {
                totalCount: 8,
                doneCount: 8
            },
            card : new Card(12, 'KanbanCard: 3 položky diskuze a splněných 8 z 8 položek checklist', 'Desc', discussionExample)
        }
    },
    {
        caption: "ListControlsBar",
        componentClass: ListControlsBar,
        description: "This component is ListControlsBar.",
        props: {}
    },
    {
        caption: "BadgesPanel",
        componentClass: BadgesPanel,
        description: "BadgesPanel shows badges list.\n\n" +
            "### Simplified badges on information bar\n" +
            "- each badge has different color and caption.\n" +
            "- badge click expands/collapses showing description",
        props: {
            badges: ['Operátor', 'Strukturální vzor', 'Situation', 'Rule'],
            showCaption: true,
            showAddButton: false
        }
    },
    {
        caption: "CardEditor",
        componentClass: CardEditor,
        multilineProps: true,
        description: "This is very basic card information. Each card is identified by it's identifier. It has a caption and might have description as well.",
        props: {
            card : new Card(345, "Odsun náspu a zářezu od cesty",
                "V části průběhu liniového prvku kategorie **Komunikace dochází** k souběžnému, [nesymetrickému]() průběhu dvou celých _liniových_ objektů různých typů téže kategorie Terénní reliéf. Prostým vyjádřením průběhů kartografickými znaky, při čemž prioritní objekt komunikací nebude modifikován, by došlo ke kolizím: - čárky smluvené značky zářezu by se dotýkaly nebo překrývaly se značkou lesní cesty a hrana náspu by byla ke značce lesní cesty blíže, než je povolený limit.\n" +
                    "\n" +
                    "Pozn.: Vyjádření situace kartografickými znaky po odstranění kolize ovlivní také kresbu liniových objektů terénního reliéfu - vrstevnice.",
                    discussionExample,
                    ['Operátor', 'Strukturální vzor']
                )
        }
    },
    {
        caption: "Login",
        componentClass: Login,
        backgroundColor: '#355876',
        description: "",
        props: {
            userId: "Augustyn"
        }
    },
    {
        caption: "CardCollectionComponent",
        componentClass: CardCollectionComponent,
        props: {
            isDone: false
        }
    },
    {
        caption: "Samples",
        componentClass: CardEditor,
        props: {
            card: cardDatabase.getCardByRef("/SoftwareLibraries/WebGen/WebGen.Operator")
        }
    },
    {
        caption: "CheckListPanel",
        componentClass: CheckListPanel,
        props: {
            enableAddItems: true,
            items: [
                ["Make Caption", true],
                ["Make Description", true],
                ["Understand", true],
                ["Primary Analyse", false]
            ]
        }
    },
    {
        caption: "CheckBoxButton",
        componentClass: CheckBoxButton,
        props: {
            checked: false,
            size: 3
        }
    },
    {
        caption: "NoteEditor",
        componentClass: NoteEditor,
        props: { }
    },
    {
        caption: "PreviewGallery",
        componentClass: PreviewGallery,
        props: {
            items: galleryItems
        }
    },
    {
        caption: "MindMap CSV as BaderBoard",
        componentClass: csvReader,
        props: { }
    },
    {
        caption: "KnowledgeBase",
        componentClass: CardEditor,
        multilineProps: true,
        description: "This is very basic card information. Each card is identified by it's identifier. It has a caption and might have description as well.",
        props: {
            card : new Card(345, "Odsun náspu a zářezu od cesty",
                "V části průběhu liniového prvku kategorie **Komunikace dochází** k souběžnému, [nesymetrickému]() průběhu dvou celých _liniových_ objektů různých typů téže kategorie Terénní reliéf. Prostým vyjádřením průběhů kartografickými znaky, při čemž prioritní objekt komunikací nebude modifikován, by došlo ke kolizím: - čárky smluvené značky zářezu by se dotýkaly nebo překrývaly se značkou lesní cesty a hrana náspu by byla ke značce lesní cesty blíže, než je povolený limit.\n" +
                    "\n" +
                    "Pozn.: Vyjádření situace kartografickými znaky po odstranění kolize ovlivní také kresbu liniových objektů terénního reliéfu - vrstevnice.",
                    discussionExample,
                    ['Operátor', 'Strukturální vzor', 'Rule']
                )
        }
    }
    /*
    {
        caption: "CardsNavBar",
        componentClass: CardsNavBar,
        props: {
            card: cardDatabase.getCardByRef("/SoftwareLibraries/WebGen")
        }
    },
    {
        caption: "AcorrdionOutline",
        componentClass: AcorrdionOutline,
        props: { }
    }*/

];


export default componentExamples

