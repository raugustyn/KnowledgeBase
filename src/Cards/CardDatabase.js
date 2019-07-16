import drozdosvet from "./Drozdosvet"
import samples from "../Samples/"
import Card from "./Card"

import Discussion from "./Discussion"

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


class CardDatabase  {

    constructor() {
        this.cards = drozdosvet.map(function(cardInfo) {
            let result = new Card(cardInfo.ref, cardInfo.caption, cardInfo.description, discussionExample)
            result.labels.push("Knowledge Item")
            result.childrenRefs = cardInfo.children

            return result
        })

        this.cards = this.cards.concat(samples)
    }

    getCardByRef(ref) {
        return this.cards.filter(card => card.ref === ref)[0]
    }

    childrenRefsTochildren(childrenRefs) {
        return childrenRefs.map(ref => this.getCardByRef(ref))
    }

}

let cardDatabase = new CardDatabase()

export default cardDatabase
