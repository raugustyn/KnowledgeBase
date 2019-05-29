const drozdosvet = [
    {
        "caption": "Znalosti kartografa",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge",
        "description": "\nToto téma popisuje a logicky uspořádává kartografická pravidla použitá pro tvorbu státních mapových děl (SMD) tak,\naby tato pravidla mohla být využívána pro generalizační algoritmy v rámci projektu TB04CUZK001\nVýzkum a vývoj metod pro kartografickou generalizaci státního mapového díla středních měřítek.\n",
        "childern": [
            "/CartographerKnowledge/CommonRules",
            "/CartographerKnowledge/MapSeries"
        ]
    },
    {
        "caption": "Kolize areál x areál",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/AreaxArea",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice areálu, vypuštění, paralelizace\n\n- ke kolizím hranic areálů dochází při jejich paralelním průběhu nebo při křížení v ostrém ůhlu\n- prioritně podléhá úpravám prvek s nižší váhou\n\n",
        "childern": [
            "/CartographerKnowledge/CommonRules/Collision/AreaxArea/Mask",
            "/CartographerKnowledge/CommonRules/Collision/AreaxArea/Matched",
            "/CartographerKnowledge/CommonRules/Collision/AreaxArea/Moving",
            "/CartographerKnowledge/CommonRules/Collision/AreaxArea/Parallel",
            "/CartographerKnowledge/CommonRules/Collision/AreaxArea/Remove"
        ]
    },
    {
        "caption": "Maskování",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/AreaxArea/Mask",
        "description": "\nproperty Operátory : List = maskování linie\n\n- prvky nejsou v konfliktu, jeden prvek maskuje druhý\n ",
        "childern": []
    },
    {
        "caption": "Slícování",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/AreaxArea/Matched",
        "description": "\nproperty Operátory : List = odsun, odsun části linie nebo hranice areálu, slícování,\n\n- souběžné hranice areálu ve stanoveném okolí / bufferu jsou, pokud to charakter prvků umožňuje, paralelizovány\n- je pralelizován odsunovaný prvek nebo prvek s nížší váhou\n- hranice stejných prvků se slícovávají s offset = 0\n\n`Situace 13 - Slícování dvou chráněných území <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_13.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Odsun hranice areálu nebo její části",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/AreaxArea/Moving",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice areálu\n\n- hranice nebo její část je odsunuta\n- hranice stejných prvků se neodsunují ale slícovávají\n- jsou-li prvky stejné barvy jsou odsunuty na stanovený treshold\n- odsunovaná část je zpravidla paralelizována na vodicí hraniční linii\n ",
        "childern": []
    },
    {
        "caption": "Paralelizace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/AreaxArea/Parallel",
        "description": "\nproperty Operátory : List = paralelizace\n\n- souběžné hranice areálu ve stanoveném okolí / bufferu jsou paralelizovány\n- je pralelizován odsunovaný prvek nebo prvek s nížší váhou\n ",
        "childern": []
    },
    {
        "caption": "Vypuštění areálu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/AreaxArea/Remove",
        "description": "\nproperty Operátory : List = vypuštění\n\n- areálový prvek musí být vypuštěn celý - nelze vypustit pouze část hranice areálového prvku\n- po vypuštění areálu je nutné vyřešit topologii prvků (vyplnění děr po vypuštěných areálech)\n ",
        "childern": []
    },
    {
        "caption": "Kolize prvků",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision",
        "description": "\n- kresby značek prvků (footprinty) se nesmí překrývat\n- podle barev by značky měly být odsunuty o stanovenou hodnotu\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/Collision/AreaxArea",
            "/CartographerKnowledge/CommonRules/Collision/LinexArea",
            "/CartographerKnowledge/CommonRules/Collision/LinexLine",
            "/CartographerKnowledge/CommonRules/Collision/PointxLine",
            "/CartographerKnowledge/CommonRules/Collision/PointxPoint"
        ]
    },
    {
        "caption": "Odsun hranice areálu nebo její části",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexArea/DisplaceArea",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice areálu\n\n- hranice areálu nebo její část je odsunuta od liniového prvku\n- jsou-li prvky stejné barvy jsou odsunuty na stanovený treshold\n- odsunovaná část je zpravidla paralelizována na vodicí linií\n\n`Situace 14 - Odsun části břehovky od hráze <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_14.html>`_\n\n`Situace 28 - Odsun rybníka od dvoučaré komunikace <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_28.html>`_\n\n`Situace 55 - Odsun budov od železnice <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_55.html>`_\n\n`Situace 65 - Odsun vodní lpochy od komunikace <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_65.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Odsun linie nebo její části",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexArea/DisplaceLine",
        "description": "\n- linie nebo její část je odsunuta od hranice areálu\n- jsou-li prvky stejné barvy jsou odsunuty na stanovený treshold\n- odsunovaná část je zpravidla paralelizována s hranicí areálu\n- speciálním případem odsunu je slícování linie na hranici areálu\n\nproperty Operátory : List = odsun, odsun části linie\n\n`Situace 24 - Odsun hráze od vodní plochcy <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_24.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Kolize linie x areál",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexArea",
        "description": "\nproperty Operátory : List = odsun, odsun části linie/hranice areálu, vypuštění, paralelizace, slícování, maskování linie\n\n- ke kolizím linie a hranice areálu dochází při paralelním průběhu jejich částí nebo při křížení pod ostrým úhlem\n- úpravám podléhá zpravidla prvek s nižší váhou\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/Collision/LinexArea/DisplaceArea",
            "/CartographerKnowledge/CommonRules/Collision/LinexArea/DisplaceLine",
            "/CartographerKnowledge/CommonRules/Collision/LinexArea/Mask",
            "/CartographerKnowledge/CommonRules/Collision/LinexArea/Matched",
            "/CartographerKnowledge/CommonRules/Collision/LinexArea/Parallel",
            "/CartographerKnowledge/CommonRules/Collision/LinexArea/Remove"
        ]
    },
    {
        "caption": "Maskování",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexArea/Mask",
        "description": "\nproperty Operátory : List = maskování linie\n\n- prvky nejsou v konfliktu, jeden prvek maskuje druhý\n- kůlna v osové pozici k vlečce nebo železnici není v kolizi - maskuje průběh železnice\n\n`Situace 31 - maskování vlečky kůlnou <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_31.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Slícování",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexArea/Matched",
        "description": "\nproperty Operátory : List = odsun, odsun části linie nebo hranice areálu, slícování,\n\n- souběžné prvky ve stanoveném okolí/bufferu, pokud to charakter prvku umožňuje,  jsou slícovány\n- je slícován odsunovaný prvek nebo prvek s nížší váhou\n- slícování je specifickým případem odsunu\n\n ",
        "childern": []
    },
    {
        "caption": "Paralelizace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexArea/Parallel",
        "description": "\nproperty Operátory : List = paralelizace\n\n- souběžné prvky ve stanoveném okolí / bufferu jsou paralelizovány\n- prioritně je pralelizován odsunovaný prvek nebo prvek s nížší váhou\n\n`Situace 9 - Ztotožnění (paralelizace) obrysu plochy chráněného území s dvoučariou komunikací <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_9.html>`_\n\n`Situace 22 - Ztotožnění (paralelizace) obrysu plochy chráněného území s administrativní hranicí <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_22.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Vypuštění linie nebo areálu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexArea/Remove",
        "description": "\nproperty Operátory : List = vypuštění\n\n- liniový prvek nebo jeho část může být vypuštěna\n- areálový prvek musí být vypuštěn celý - nelze vypustit pouze část hranice areálového prvku\n- při vypuštění areálu je nutné zachovat topologii - vyplnění díry po vypuštěném prvku\n ",
        "childern": []
    },
    {
        "caption": "Odsun linie nebo její části",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexLine/Displace",
        "description": "\nproperty Operátory : List = odsun, odsun části linie,\n\n- liniový prvek nebo jeho část je odsunuta od významnějího prvku\n- podle barvy by značek by linie měly být odsunuty o stanovený treshold\n- odsouvaná linie, nebo její část je parelelizována s vodicím prvkem (- zvláštním přípdadem odsunu je slícování)\n\n`Situace 1 - Odsun terénního stupně od cesty <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_1.html>`_\n`Situace 2 - Postupný odsun liniových prvků <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_2.html>`_\n\n`Situace 21 - Odsun potoka od silnice <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_21.html>`_\n\n`Situace 32 - Odsun a paralelizace terénního stupně s linovými prvky <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_32.html>`_\n\n`Situace 50 - Odsun železnic <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_50.html>`_\n\n`Situace 53 - Odsun železnic <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_53.html>`_\n\n`Situace 54 - Odsun železnic <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_54.html>`_\n\n`Situace 58 - Odsuny terénních stupňů od komunikací <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_58.html>`_\n\n`Situace 67 - Postupný odsun linií <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_67.html>`_\n\n`Situace 72 - Vzájemný odsun komunikací <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_72.html>`_\n\n`Situace 82 - Odsun hanic lesního průseku <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_82.html>`_\n\n`Situace 98 - Odsun el. vedení od komunikace <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_98.html>`_\n\n`Situace 102 - Odsun vodního toku od komunikace <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_102.html>`_\n\n`Situace 109 - Odsun vleček <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_109.html>`_\n\n`Situace 115 - Odsun komunikace od dálnice <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_115.html>`_\n\n",
        "childern": []
    },
    {
        "caption": "Kolize linie x linie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexLine",
        "description": "\nproperty Operátory : List = odsun, odsun části linie, vypuštění, nahrazení sdruženou značkou, paralelizace, slícování, maskování linie\n\n- ke kolizím linií dochází při paralelním průběhu linií nebo jejich částí nebo při křížení linií pod ostrým úhlem\n- úpravám podléhá zpravidla linie s nižší váhou\n",
        "childern": [
            "/CartographerKnowledge/CommonRules/Collision/LinexLine/Displace",
            "/CartographerKnowledge/CommonRules/Collision/LinexLine/Mask",
            "/CartographerKnowledge/CommonRules/Collision/LinexLine/Matched",
            "/CartographerKnowledge/CommonRules/Collision/LinexLine/Parallel",
            "/CartographerKnowledge/CommonRules/Collision/LinexLine/Remove",
            "/CartographerKnowledge/CommonRules/Collision/LinexLine/Substitution"
        ]
    },
    {
        "caption": "Maskování",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexLine/Mask",
        "description": "\nproperty Operátory : List = maskování linie\n\n- liniové prvky nejsou v konfliktu, jeden prvek maskuje druhý\n\n`Situace 29 - Maskování parkové cesty pod lávkou <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_29.html>`_\n\n`Situace 77 - Maskování příčných čátek terénního stupně v místech značek stromořadí <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_77.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Slícování",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexLine/Matched",
        "description": "\nproperty Operátory : List = odsun, odsun části linie, slícování,\n\n- souběžné liniové prvky ve stanoveném okolí/bufferu, pokud to charakter prvku umožňuje,  jsou slícovány\n- je slícován odsunovaný prvek nebo prvek s nížší váhou\n- slícování je specifickým případem odsunu\n\n`Situace 3 - Slícování terénního stupně se železnicí <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_3.html>`_\n\n`Situace 5 - Slícování terénního stupně s hranicí užívání <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_5.html>`_\n\n`Situace 19 - Slícování terénního stupně s dálnicí <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_19.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Paralelizace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexLine/Parallel",
        "description": "\nproperty Operátory : List = paralelizace\n\n- souběžné liniové prvky ve stanoveném okolí / bufferu jsou paralelizovány\n- je pralelizován odsunovaný prvek nebo prvek s nížší váhou\n\n`Situace 1 - Paralelizace terénního stupně s cestou <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_1.html>`_\n\n`Situace 32 - Paralelizace terénního stupně s linovými prvky <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_32.html>`_\n\n`Situace 58 - Paralelizace terénních stupnů s komunikacemi <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_58.html>`_\n\n`Situace 67 - Postupný odsun a papalelizace linií <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_67.html>`_\n\n ",
        "childern": []
    },
    {
        "caption": "Vypuštění linie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexLine/Remove",
        "description": "\nproperty Operátory : List = vypuštění\n\n- liniový prvek s nižší váhou, nebo jeho část, může být vypuštěn\n",
        "childern": []
    },
    {
        "caption": "Nahrazení sdruženou značkou",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/LinexLine/Substitution",
        "description": "\nproperty Operátory : List = nahrazení sdruženou značkou\n\n- souběžné prvky stejného typu, nebo jejich souběžné části ve stanoveném okolí / bufferu, jsou nahrazeny sdruženou značkou\n\n`Situace 10 - Nahrazení dvou terénních stupňů značkou hráze (do 10m šířky)<http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_10.html>`_\n\n`Situace 24 - Nahrazení dvou terénních stupňů značkou hráze (nad 10m šířky<http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_24.html>`_\n\n",
        "childern": []
    },
    {
        "caption": "Změna tvaru značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/PointxLine/Deformation",
        "description": "\n- je upraven tvar bodové značky\n\n     `Situace 25 - Změna propustku na jednostranný <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_25.html>`_\n\n- je upraven tvar značky linie\n\n     `Situace 77 - Vypuštění příčných čátek terénního stupně v místech propustků <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_77.html>`_\n\n",
        "childern": []
    },
    {
        "caption": "Odsun bodu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/PointxLine/Displace",
        "description": "\n- bodový prvek je odsunut tak, aby jeho vztažný bod se nepřekrýval obrysem liniové značky nebo hranicí areálové značky\n- podle barvy by značky měly být odsunuty o stanovený treshold\n- po odsunu nesmí být bodový prvek na jiné straně linie\n- je-li bodový prvek umístěn v areálu, nesmí být odsunut mimo tento areál\n\n`Situace 53 - Odsun stožárů od železnice <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_53.html>`_\n\n`Situace 54 - Odsun kaple od železnice <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_54.html>`_\n\n`Situace 57 - Odsun stožárů od hranice užívání <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_54.html>`_\n\n`Situace 60 - Odsun stožárů <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_60.html>`_\n\n`Situace 64 - Odsun stožárů komunikace <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_64.html>`_\n\n`Situace 65 - Postuponý odsun vodojemu a vrtu od komunikace <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_65.html>`_\n\n`Situace 69 - Odsun kaple od komunikace <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_69.html>`_\n\n`Situace 99 - Odsun stožárů od komunikace <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_99.html>`_\n\n",
        "childern": []
    },
    {
        "caption": "Odsun linie nebo její části",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/PointxLine/DisplaceLine",
        "description": "\n- linie nebo její část je odsunuta od bodového prvku tak aby se vztažný bod bodového prvku nepřekrýval s kresbou liniové značky nebo hranice areálové značky\n- podle barvy by značky měly být odsunuty o stanovený treshold\n- po odsunu nesmí být bodový prvek na jiné straně linie\n- je-li bodový prvek umístěn v areálu, nesmí být odsunut mimo tento areál\n",
        "childern": []
    },
    {
        "caption": "Maskování",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/PointxLine/Mask",
        "description": "\n- bodový prvek není v konfliktu s linií, maskuje její průběh\n\n    `Situace 89 - Trig. bod maskuje komunikaci <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_89.html>`_\n\n",
        "childern": []
    },
    {
        "caption": "Kolize bod x linie nebo hranice areálu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/PointxLine",
        "description": "\nproperty Operátory : List = odsun, odsun části linie, vypuštění, úprava tvaru značky, maskování linie\n\n- vztažný bod bodové značky se překrývá s obrysem liniové značky nebo s hranicí areálové značky\n- úpravám podléhá zpravidla bodový prvek nebo prvek s nižší váhou\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/Collision/PointxLine/Deformation",
            "/CartographerKnowledge/CommonRules/Collision/PointxLine/Displace",
            "/CartographerKnowledge/CommonRules/Collision/PointxLine/DisplaceLine",
            "/CartographerKnowledge/CommonRules/Collision/PointxLine/Mask",
            "/CartographerKnowledge/CommonRules/Collision/PointxLine/RemoveLine",
            "/CartographerKnowledge/CommonRules/Collision/PointxLine/RemovePoint"
        ]
    },
    {
        "caption": "Vypuštění linie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/PointxLine/RemoveLine",
        "description": "\n- liniový nebo areálový prvek je vypuštěn\n\n",
        "childern": []
    },
    {
        "caption": "Vypuštění bodu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/PointxLine/RemovePoint",
        "description": "\n- Bodový prvek je vypuštěn\n\n`Situace 24 - Propustek přes hráz je vypuštěn <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_24.html>`_\n",
        "childern": []
    },
    {
        "caption": "Úprava tvaru značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/PointxPoint/Deformation",
        "description": "\n- u některých prvků mohou být jejich značky graficky upraveny\n\n- vypuštění značky nivelačního bodu a ponechání pouze popisného údaje o nadmořské výšce\n- při kolizi může být vypuštěna jedna strana propustku\n- značka kultury může být zmenšena až na 1/3 své původní velikosti\n\n`Situace 117 - vypuštění značky a ponechání popisného údaje <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_117.html>`_\n\n",
        "childern": []
    },
    {
        "caption": "Odsun bodu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/PointxPoint/Displace",
        "description": "\nJedním z možných řešení kolize dvou bodových prvků je odsunutí kresby jednoho či obou do místa vhodně podle situace.\n\n\n- prvek s nižší váhou je odsunut tak aby se nepřekrývaly kresby značek\n- není-li možné odsunout prvek nižší váhou je osunut prvek s váhou vyšší\n- není-li možné odsunout pouze jeden prvek, je možné odsunout oba prvky\n- podle barvy by značky měly být odsunuty o stanovený treshold\n- je-li bodový prvek umístěn v areálu, nesmí být odsunut mimo tento areál\n\n`Situace 04 - Odsun kříže od věže <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_4.html>`_\n\n`Situace 46 - Odsun bodových značek <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_46.html>`_\n\n`Situace 53 - Odsun stožátů el. vedení <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_53.html>`_\n\n`Situace 59 - Odsun a vypuštění kříže <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_59.html>`_\n\n`Situace 60 - Odsuny stožárů <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_60.html>`_\n\n`Situace 61 - Odsun vysílacího stožáru <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_61.html>`_\n\n`Situace 74 - Odsun kříže <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_74.html>`_\n\n`Situace 75 - Odsuny křížů <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_75.html>`_\n\n`Situace 91 - Odsun kříže <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_91.html>`_\n\n`Situace 92 - Odsun pomníku od tíhového bodu <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_92.html>`_\n\n`Situace 93 - Odsun kříže <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_93.html>`_\n\n`Situace 117 - Odsun vysílačů a rozhledny <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_117.html>`_\n",
        "childern": []
    },
    {
        "caption": "Kolize bod x bod",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/PointxPoint",
        "description": "\nproperty Operátory : List = odsun, vypuštění, nahrazení sdruženou značkou, úprava tvaru značky Operátory@@\n\n- úpravám podléhá bodový prvek s nižší váhou\n- kresby značek (obrysy) se nesmí překrývat\n- značky stejných darev musí být odsunuty o stavený threshold\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/Collision/PointxPoint/Deformation",
            "/CartographerKnowledge/CommonRules/Collision/PointxPoint/Displace",
            "/CartographerKnowledge/CommonRules/Collision/PointxPoint/Remove",
            "/CartographerKnowledge/CommonRules/Collision/PointxPoint/Substitution"
        ]
    },
    {
        "caption": "Vypuštění bodu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/PointxPoint/Remove",
        "description": "\n- prvek s nižší váhou je vypuštěn\n- není-li možné vypustit prvek s nižší váhou, je vypoštěn prvek s váhou vyšší\n- ve vyjímečných situacích je možné vypustit oba prvky\n\n`Situace 24 - Vypuštění propustku <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_24.html>`_\n\n`Situace 46 - Vypuštění značek <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_46.html>`_\n\n`Situace 59 - Vypuštění a osun kříže <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_59.html>`_\n\n`Situace 68 - Vypuštění kříže <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_68.html>`_\n\n`Situace 93 - Vypuštění jednoho z kžížů <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_93.html>`_\n\n`Situace 117 - Vypuštění vysílače <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_117.html>`_\n\n- je-ji v kolizi značka kostela (105) a věž na budově (120), značka věže je vypuštěna a její pozici je umístěna značka kostela\n\n`Situace 91 - Vypuštění věže kostela <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_91.html>`_\n",
        "childern": []
    },
    {
        "caption": "Nahrazení sdruženou značkou",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Collision/PointxPoint/Substitution",
        "description": "\n- věžovité prvky a geodetické body jsou nahrazeny sdruženou značkou na pozici geodetického bodu\n\n`Situace 91 - Vypuštění věže kostela <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_91.html>`_",
        "childern": []
    },
    {
        "caption": "Barevnost mapy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/CommonRules.Cartographic/CommonRules.Cartographic.Collor",
        "description": "\n\n- barevné zaplnění mapy musí odpovídat typu mapy a jejímu účelu,\n- prvky stejných nebo opticky podobných barev musí být zobrazeny s dostatečným thresholdem,\n- jednotlivé barvy sousedních prvků musí být dobře rozlišitelné\n- při velkém optickém zaplnění mapy jsou postupně vypouštěny méně významné prvky,\n\n ",
        "childern": []
    },
    {
        "caption": "Kartografická pravidla",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/CommonRules.Cartographic",
        "description": "\n\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/CommonRules.Cartographic/CommonRules.Cartographic.Collor",
            "/CartographerKnowledge/CommonRules/CommonRules.Cartographic/CommonRules.Cartographic.Readable"
        ]
    },
    {
        "caption": "Čitelnost mapy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/CommonRules.Cartographic/CommonRules.Cartographic.Readable",
        "description": "\n\n- zaplnění mapy musí odpovídat typu mapy a jejímu účelu,\n- každý jednotlivý prvkek musí být rozlišitelný od ostatních prvků (slévání a překrývání prvků)\n- při velkém zaplnění jsou postupně vypouštěny méně významné prvky,\n\n`Situace 112 - Odstranění kresby liniového prvku Doplňková linie <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_112.html>`_\n\n ",
        "childern": []
    },
    {
        "caption": "Obecná pravidla",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules",
        "description": "\nObecná kartografická pravidla platná při\ntvorbě Základních map.  Vzhledem k tomu, že v žádné dostupné literatuře nejsou systematicky\npopsána všechna tato pravidla, byl sestaven tým zkušených kartografů, kteří se v minulosti podíleli\nna tvorbě státního mapového díla, a to jak civilního tak i vojenského. Účelem bylo popsat\njednotlivé činnosti a postup rozhodování kartografů při řešení rozdílných kartografických situací.\n\nJedná se převážně o kartografická pravidla určená ke zlepšení čitelnosti a přehlednosti\nzaplněných částí mapy, vyjádření charakteristických mapových prvků a řešení kolizí mezi prvky.\n\nV závislosti na charakteru kartografické situace jsou používány rozdílné kartografické\npostupy.\n",
        "childern": [
            "/CartographerKnowledge/CommonRules/Collision",
            "/CartographerKnowledge/CommonRules/CommonRules.Cartographic",
            "/CartographerKnowledge/CommonRules/Feature",
            "/CartographerKnowledge/CommonRules/FeatureRelations",
            "/CartographerKnowledge/CommonRules/FeatureSelection",
            "/CartographerKnowledge/CommonRules/StructuralPatterns",
            "/CartographerKnowledge/CommonRules/TopologicalConstraints"
        ]
    },
    {
        "caption": "Tvar prvku",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature",
        "description": " ",
        "childern": [
            "/CartographerKnowledge/CommonRules/Feature/FeatureShape",
            "/CartographerKnowledge/CommonRules/Feature/MinimalPart",
            "/CartographerKnowledge/CommonRules/Feature/MinimalSize"
        ]
    },
    {
        "caption": "Tvar prvku",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/FeatureShape",
        "description": "\n- některé areálové prvky jsou tvarově zjednodušeny\n- prvky po zjednodušení by měly mít podobnou plochu jako před zjednodušením\n- prvky po zjednodušení by měly mít podobný tvar jako před zjednodušením\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/Feature/FeatureShape/Ortogonalization",
            "/CartographerKnowledge/CommonRules/Feature/FeatureShape/Simplification"
        ]
    },
    {
        "caption": "Ortogonalizace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/FeatureShape/Ortogonalization",
        "description": "\n\n- budovy a stavební objekty (bazény, usazovací nádrže, odkaliště, kůlny, skleníky a pod.) jejichž tvar je podobný obdélníku jsou ortogonalizovány\n\n`Situace 37 - Typifikace shluku pločných prvků voda - ortogonalizace sádek <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_37.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Zjednodušení tvaru",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/FeatureShape/Simplification",
        "description": "\n\n- Složitější tvary prvků mohou být zjednodušeny zjednodušen\n\n`Situace 120 - Zjednodušení tvarů porostů a povrchu půdy <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_120.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Vykreslení malé části prvku nadmíru",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalPart/Exaggeration",
        "description": "\nproperty Operátory : List = kresba nadmíru\n\n- pokud část prvku nedosahuje stanovené velikosti ale jedná se o charakteristický prvek je vykreslen nadmíru\n\n`Situace 124 - Řešení kresby budov nadmíru (viz šipka 1) <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_124.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Minimální velikost části prvku",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalPart",
        "description": "\nproperty Operátory : List = vyhlazení, kresba nadníru\n\n- pokud část prvku nedosahuje stanovené velikosti - kartografického rozlišení - je část prvku vypuštěna nebo zjednodušena nebo vykreslena nadmíru\n- výstupky na liniích a hranicích areálu menší než 1x1 mm jsou vypuštěny - zahlazení linie\n- pokud linie nebo hranice areálu osciluje v stanoveném okolí (buffer) linie se vyhlazuje\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/Feature/MinimalPart/Exaggeration",
            "/CartographerKnowledge/CommonRules/Feature/MinimalPart/Omitt",
            "/CartographerKnowledge/CommonRules/Feature/MinimalPart/Smooth"
        ]
    },
    {
        "caption": "Vypuštění malé části prvku",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalPart/Omitt",
        "description": "\nproperty Operátory : List = vyhlazení\n\n- pokud část prvku nedosahuje stanovené velikosti - kartografického rozlišení - je část prvku vypuštěna\n- výstupky na liniích a hranicích areálu menší než 1x1 mm jsou vypuštěny - zahlazení linie\n\n`Situace 124 - Vypuštění výklenků budov (poblíž textu 335,4) <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_124.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Vyhlazení linie/hranice areálu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalPart/Smooth",
        "description": "\nproperty Operátory : List = vyhlazení\n\n- pokud linie/hranice areálu nebo její část v určitém průběhu osciluje ve stanoveném bufferu dojde k jejímu vyhlazení\n\n`Situace 119 - Zjednodušení (vyhlazení) tvaru vodního toku <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_119.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Plošné prvky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Area",
        "description": "\n\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Area/Exaggeration",
            "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Area/Remove",
            "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Area/Substitution"
        ]
    },
    {
        "caption": "Kresba nadmíru",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Area/Exaggeration",
        "description": "\nproperty Operátory : List = Kresba nadníru\n\n- areálové prvky, které nedosahují stanovené minimální jsou vykresleny nadmíru\n\n`Situace 124 - Řešení kresby budov nadmíru <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_124.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Vypuštění",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Area/Remove",
        "description": "\nproperty Operátory : List = vypuštění\n\n- areálové prvky nedosahující stanovené minimální velikosti jsou vypuštěny\n- po vypuštění areálu je nutné vyřešit topologii prvků (vyplnění děr po vypuštěných areálech)\n\n`Situace 40 - Vypuštění objektu malého lesa <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_40.html>`_\n\n`Situace 42 - Vypuštění objektu malého ostrova <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_42.html>`_\n\n`Situace 126 - Vypuštění objektu (budovy) <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_126.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Nahrazení značkou",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Area/Substitution",
        "description": "\nproperty Operátory : List = nahrazení značkou\n\n- areálové prvky, které nedosahující stanovené minimální velikosti jsou nahrazeny bodovou značkou\n- areálové prvky nedosahující stanovené šířky (čitelnost mapy) mohou být nahrazeny liniovou značkou\n- po vypuštění areállového prvku je nutné vyřešit topologii prvků (vyplnění děr po vypuštěných areálech)\n\n`Situace 39 - Nahrazení úzké hranice užívání polní cestou <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_39.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Kresba nadmíru",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Line/Exaggeration",
        "description": "\nproperty Operátory : List = Kresba nadníru\n\n- důležité liniové prvky, které nedosahují stanovené minimální délky jsou vykresleny nadmíru\n\n`Situace 87 - Zvýraznění krátkého jezu <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_87.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Liniové prvky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Line",
        "description": "\n\n- pokud liniový prvek stanovené velikosti - kartografického rozlišení - je prvek vypuštěn, nahrazen značkou nebo vykreslena nadmíru\n\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Line/Exaggeration",
            "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Line/Remove",
            "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Line/Substitution"
        ]
    },
    {
        "caption": "Vypuštění",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Line/Remove",
        "description": "\nproperty Operátory : List = vypuštění\n\n- liniové prvky, které nedosahující stanovené minimální délky, jsou vypuštěny\n\n`Situace 36 - Vypuštění stromořadí podlimitní délky <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_36.html>`_\n\n`Situace 38 - Vypuštění terénního stupně podlimitní délky <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_38.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Nahrazení značkou",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Line/Substitution",
        "description": "\nproperty Operátory : List = vypuštění\n\n- liniové prvky, které nedosahující stanovené minimální délky, nahrazeny bodovou značkou\n\n`Situace 8 - Symbolizace terénního stupně značkou jámy <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_8.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Minimální velikost prvku",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/Feature/MinimalSize",
        "description": "\nproperty Operátory : List = vypuštění, kresba nadmíru, nahrazení značkou\n\n- liniové a areálové prvky mají stanovenou svoji minimální velikost\n- pokud prvek nedosahuje minimální velikosti je vypuštěn, vykreslen nadmíru nebo nahrazen značkou\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Area",
            "/CartographerKnowledge/CommonRules/Feature/MinimalSize/Line"
        ]
    },
    {
        "caption": "Sdružení prvků - agregace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureRelations/Aggregation",
        "description": "\n\n- je-li v dané oblasti více stejných nebo podobnývh areálových prvků mohou být sdruženy do jednoho prvku,\n- výběr musí být proveden tak, aby zůstal zachován původní plošný rozsah sjednocených prvků,\n- při sjednocení prvků je nutné řešit topologii - vyplnění děr po areálech a průšečíky hranic s liniovými prvky,\n- v případě, že v ploše výsledného areálu byly bodové prvky vázané na výskyt v určitém areálu, je nutné dořešit jejich topologii\n\n`Situace 107 - Redukce zobrazení hranic mezi kulturami <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_107.html>`_\n\n`Situace 121 - Agregace/typizace a odsun podměrečných ploch sádek <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_121.html>`_\n\n`Situace 122 - Blokování zástavby v sídle <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_122.html>`_\n\n`Situace 123 - Příklad blokování nesouvislé zástavby <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_123.html>`_\n\n`Situace 127 - Sloučení/sdružení budov <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_127.html>`_\n\n",
        "childern": []
    },
    {
        "caption": "Konce linií",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureRelations/EndCaps",
        "description": "\n- je-li pro liniovou značkou definována počáteční a/nebo koncová značka, musí linie touto značkou začínat a/nebo končit\n- je-li pro liniovou značkou definována vazba na pokračující značku, musí linie touto značkou pokračovat (říční síť, silniční síť apod.)\n- je-li definován koncový úhel linie ve vztahu k jinému prvku, je při ukončení linie na tomto prvku nutné stanovený úhel dodržet (vodní tok musí navazovaz na propustek osově)\n\n`Situace 21 - Odsun průběhu potoka a dalších prvků v návaznosti na kresbu silnice nad míru <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_21.html>`_\n`Situace 57 - Sloupy el. vedení <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_57.html>`_\n`Situace 64 - Odsun značky sloupu i vedení při kresbě nad míru <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_64.html>`_\n`Situace 83 - Umazání kresby když není možné využít maskování <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_83.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Vztahy prvků",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureRelations",
        "description": "\n\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/FeatureRelations/Aggregation",
            "/CartographerKnowledge/CommonRules/FeatureRelations/EndCaps",
            "/CartographerKnowledge/CommonRules/FeatureRelations/FeatureRelationsFollowLink",
            "/CartographerKnowledge/CommonRules/FeatureRelations/Fill",
            "/CartographerKnowledge/CommonRules/FeatureRelations/LinkSymbols",
            "/CartographerKnowledge/CommonRules/FeatureRelations/SymbolRotation",
            "/CartographerKnowledge/CommonRules/FeatureRelations/SymbolShape",
            "/CartographerKnowledge/CommonRules/FeatureRelations/Topology"
        ]
    },
    {
        "caption": "Pokračování linií",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureRelations/FeatureRelationsFollowLink",
        "description": "\n\n- je-li v okolí konce linie počáteční/koncový bod linie stejného typu, mohou být linie sloučeny do jedinné linie\n- může být definováno pravidlo pro přechod jednoho typu liniového prvku do liniového prvku jiného typu,\n\n`Situace 19 - Postupný přechod délky příčných čárek terénního stupně <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_19.html>`_\n`Situace 105 - Speciální vykreslení mostu <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_105.html>`_\n\n ",
        "childern": []
    },
    {
        "caption": "Výplně areálů",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureRelations/Fill",
        "description": "\n\n- bodová značka označující areál je umístěna do vztažného bodu areálu,\n- není-li nožné ji unístit do vztažního bodu, je umístěna v těžišti areálu\n- není-li nožné ji unístit do těžište, je umístěna vhodně kdekoliv v areálu\n\n- máli být areál vyplněnk rastrem značek, jednotlivé výskyty zanačky musí být úplné\n\n- bodová značka na linii je umístěna do jejího středu, pokud není stanoveno jinak\n- není-li nožné ji unístit do středu, je umístěna kdekoliv na linii co nejblíže jejímu středu\n\n`Situace 23 - Specializovaná kresba nesjízdné ulice. <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_23.html>`_\n`Situace 30 - Symbolizace areálu zemního vodojemu bodovou značkou <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_30.html>`_\n`Situace 33 - Symbolizace atributu značkou a její umístění. <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_33.html>`_\n`Situace 34 - Volba velikosti bodové značky druhu kultury při nedostatku místa <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_34.html>`_\n`Situace 35 - Umístění bodové značky druhu kultury mimo sektor s použitím šipky <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_35.html>`_\n`Situace 66 - Vyplnění intravilánu průjezdnou komunikací <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_66.html>`_\n`Situace 100 - Odsun symbolu přívozu <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_100.html>`_\n\n ",
        "childern": []
    },
    {
        "caption": "Svázání prvků",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureRelations/LinkSymbols",
        "description": "\n\n- má-li prvek vazbu na pozici jiného prvku, je jeho poloha svázáha s polohou tohoto prvku\n- při modifikaci jenoho z nich je nutné stejné operátory aplikovat i na druhý prvek\n\n`Situace 31 - Kůlna na vlečce <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_31.html>`_\n`Situace 99 - Odsun liniového prvku Elektrické vedení a incidujícího bodového prvku Sloup od liniového prvku Silnice <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_99.html>`_\n\n ",
        "childern": []
    },
    {
        "caption": "Rotace značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureRelations/SymbolRotation",
        "description": "\n\n- má-li prvek vazbu na orientaci jiného liniového prvku, je jeho orientace  upravována podle průběhu tohoto prvku\n- má-li prvek vazbu na pozici jiného prvku, je jeho orientace upravována podle polohy tohoto prvku\n\n`Situace 21 - Odsun průběhu potoka a dalších prvků v návaznosti na kresbu silnice nad míru <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_21.html>`_\n`Situace 16 - Rotace propustků <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_16.html>`_\n`Situace 111 - Umístění bodového prvku Nádraží na liniový prvek železnice <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_111.html>`_\n\n ",
        "childern": []
    },
    {
        "caption": "Změna tvaru značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureRelations/SymbolShape",
        "description": "\n\n- má-li prvek vazbu na šířku značky jiného liniového prvku, je jeho tvar (šířka) upravována podle značky tohoto prvku\n- má-li prvek vazbu na šířku jiného areálového prvku, je jeho tvar (šířka) upravována podle šířky tohoto prvku\n- část prvku (jedna strana prvku) může bý vypuštěna, pokud to vlastnosti prvku umožňují\n\n`Situace 21 - Odsun průběhu potoka a dalších prvků v návaznosti na kresbu silnice nad míru <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_21.html>`_\n`Situace 18 - Nastavení parametrů symbolu v závislosti na situaci <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_18.html>`_\n`Situace 19 - Komplexní souběh liniových elementů <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_19.html>`_\n`Situace 105 - Speciální vykreslení mostu <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_105.html>`_\n\n ",
        "childern": []
    },
    {
        "caption": "Umístění prvků - topologie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureRelations/Topology",
        "description": "\n\n- pokud je modifikován prvek s vazbou topologickou vazbou a jiný prvek je nutné současně řešit i tento prvek\n- má-li bodový prvek vazbu na liniový prvek, při modifikaci jenoho z nich je nutné stejné operátory aplikovat i na druhý prvek\n- je-li bodový prvek uvnitř areálu, po modifikaci jednoho z nich musí být bodový prvek opět uvnitř areálu.\n- má-li bodový prvek vazbu na areálový prvek, a ten je vypuštěn, musí být vypuštěn i bodový prvek\n\n\n`Situace 40 - Redukce plošného prvku, který je zároveň dírou v jiném plošném prvku <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_40.html>`_\n\n`Situace 42 - Vyplnění díry po vypuštění ostrovak <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_42.html>`_\n\n`Situace 44 - Symbolizace při souběhu prvkůe <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_44.html>`_\n\n\n ",
        "childern": []
    },
    {
        "caption": "Výběr areálových prvků",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureSelection/Area",
        "description": "\n\n- při výběru zpravidla zůstávají zachovány okrajové areály\n\n`Situace 37 - Typifikace shluku plošných prvků voda - výběr sádek <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_37.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Výběr prvků",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureSelection",
        "description": "\n\n- je-li v dané oblasti více stejných prvků nebo skupin prvků, může být proveden jejich výběr,\n- výběr musí být proveden tak, aby zůstal zachován původní plošný rozsah,\n- výběr musí být proveden tak, aby zůstalo zachováno původní rozložení hustoty prvků,\n- v případě, že jsou vybírány rozdílné prvky, měl by být zachován i jejich původní poměr,\n- množství vybraných prvků by mělo odpovídat zaplnění mapy.\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/FeatureSelection/Area",
            "/CartographerKnowledge/CommonRules/FeatureSelection/Lines",
            "/CartographerKnowledge/CommonRules/FeatureSelection/Points"
        ]
    },
    {
        "caption": "Výběr liniových prvků",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureSelection/Lines",
        "description": "\n\n- při výběru zpravidla zůstávají zachovány okrajové linie\n ",
        "childern": [
            "/CartographerKnowledge/CommonRules/FeatureSelection/Lines/Railway"
        ]
    },
    {
        "caption": "Výběr železnice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureSelection/Lines/Railway",
        "description": "\n\n- při výběru kolejí v areálu nádraží musí být zachovány průjezdné koleje,\n- výběrem kolejí nesmí být porušena struktura kolejiště.\n\n`Situace 109 - Redukce vlečky <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_109.html>`_\n\n`Situace 116 - Redukce železnic <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_109.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Výběr bodových prvků",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/FeatureSelection/Points",
        "description": "\n\n`Situace 46 - Odsuny a vypuštění bodových zanček <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_46.html>`_\n\n`Situace 94 - Vypuštění křížů výběrem <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_94.html>`_\n\n`Situace 95 - Vypuštění komínů výběrem <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_95.html>`_\n\n`Situace 118 - Vypuštění jeskyní výběrem <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_118.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Rybářské sádky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/FishPond",
        "description": "\nSoustava vzájemně propojených obdélníkových nádrží pro chov ryb, zpravidla umístěných na vodním toku\n\n`Situace 37 - Typifikace shluku plošných prvků voda <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_37.html>`_\n\n\n ",
        "childern": []
    },
    {
        "caption": "Roštový typ",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/GridType",
        "description": "\nVodní toky v jednom směru vytvářejí delší zhruba rovnoběžné úseky, zatímco jejich kolmé přítoky jsou kratší\n ",
        "childern": []
    },
    {
        "caption": "Labyrintový typ",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/LabyrintType",
        "description": "\nŘeky vytvářejí spletitou nepřehlednou soustavu, která propojuje bažinatá území a jezerní nebo rybničnatá území v nížinách a pánvích\n ",
        "childern": []
    },
    {
        "caption": "Rybničnaté oblasti",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/Ponds",
        "description": "\nOlast je typická mnoha malými vodními plochami, které většinou nedosahují ploch potřebné pro zobrazení v mapě.\n ",
        "childern": []
    },
    {
        "caption": "Vějiřový typ",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/PunkaType",
        "description": "\nHustá síť přítoků vějířovitě uspořádaných k hlavnímu toku\n ",
        "childern": []
    },
    {
        "caption": "Radiální typ",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/RadialType",
        "description": "\nŘíční síť se paprskovitě excentricky rozbíhá z vrcholové části nebo se koncentricky sbíhá do pánve\n ",
        "childern": []
    },
    {
        "caption": "Prstencový typ",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/RingType",
        "description": "\n ",
        "childern": []
    },
    {
        "caption": "Říční síť",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork",
        "description": " ",
        "childern": [
            "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/FishPond",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/GridType",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/LabyrintType",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/Ponds",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/PunkaType",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/RadialType",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/RingType",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/RootType",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/TreeType"
        ]
    },
    {
        "caption": "Kořínkový typ",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/RootType",
        "description": "\nHlavní řeka protéká sníženinou mezi vyvýšenými částmi terénu a přijímá z obou stran poměrně krátké přítoky\n ",
        "childern": []
    },
    {
        "caption": "Stromový typ",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork/TreeType",
        "description": "\nŘíční síť je pravidelně se rozvětvující, hlavní tok a jeho soutoky tvoří síť podobnou větvím stromu, je charakteristická pro rozsáhlé nížiny.\n ",
        "childern": []
    },
    {
        "caption": "Strukturální vzory",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns",
        "description": " ",
        "childern": [
            "/CartographerKnowledge/CommonRules/StructuralPatterns/RiverNetvork",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/StructuralPatterns.MultipleFeature",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/StructuralPatterns.RoadNetvork",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea"
        ]
    },
    {
        "caption": "Mnohočetné prvky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/StructuralPatterns.MultipleFeature",
        "description": "\n\nCharakteristické shluky stejných značek rozmístěných podle určitých pravidel nebo zvyklostí\n  - křížové cesty\n    `Situace 94 - Typizace zobrazení křížové cesty <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_94.html>`_\n\n  - tovární komíny a chladicí věže\n    `Situace 95 - Typizace shluku bodových prvků Komín <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_95.html>`_\n\n  - Plynové zásobníky, sila, apod.\n    `Situace 96 - Usazovací nádrž, součástí ČOV <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_96.html>`_\n\n ",
        "childern": []
    },
    {
        "caption": "Komunikace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/StructuralPatterns.RoadNetvork",
        "description": " ",
        "childern": [
            "/CartographerKnowledge/CommonRules/StructuralPatterns/StructuralPatterns.RoadNetvork/StructuralPatterns.RoadNetvork.HighwayCross",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/StructuralPatterns.RoadNetvork/StructuralPatterns.RoadNetvork.RailStation",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/StructuralPatterns.RoadNetvork/StructuralPatterns.RoadNetvork.RampCross"
        ]
    },
    {
        "caption": "Dálniční křížení",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/StructuralPatterns.RoadNetvork/StructuralPatterns.RoadNetvork.HighwayCross",
        "description": "\nSystém minoúrovňových nájezdů a podjezdů umožňující bez úrovňového křížení\n\nSituace 113 - Souběh a křížení liniových prvků s přemostěním a dálničními sjezdy a nájezdy <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_113.html>`_\nSituace 114 - mimoúrovňovém křížení liniových prvků Dálnice se sjezdy, nájezdy a přemostěním <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_114.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Železniční nádraží",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/StructuralPatterns.RoadNetvork/StructuralPatterns.RoadNetvork.RailStation",
        "description": "\nAreál železniční stanice, sloužící jako seřaďovací nádraží.\nCharakteristiká olast s nekolika desítkami rovnoběžných kolejí a vleček vzájemně propojených\nZpravidla bývá několik kolejí průběžných\n\n`Situace 116 - Železniční nádraží <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_116.html>`_\n ",
        "childern": []
    },
    {
        "caption": "Mimoúrovňové křížení",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/StructuralPatterns.RoadNetvork/StructuralPatterns.RoadNetvork.RampCross",
        "description": "\nSystém ramp a přivaděčů umožňující nájez a sjedz z komunikací vyšších tříd, nájezdy na mosty a složité křižovatky ve městech.\n\n ",
        "childern": []
    },
    {
        "caption": "Sídlo uličního typu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/AlongRoad",
        "description": "\n- vesnická zástavba umístěná jednostraně nebo oboustraně podél komunikace (bez kolmých ulic)\n",
        "childern": []
    },
    {
        "caption": "Souvislá zástavba",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Coherent",
        "description": "\n- uzavřené bloky (řady) nízkopodlažních i vícepodlažních obytných a neobytných budov\n\n- pro zachvání blokového charekteru zástavby se drobné budovy a kůlny z vnitrobloku vypouštějí\n",
        "childern": []
    },
    {
        "caption": "Roztroušená zástavba",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Dispersed",
        "description": " ",
        "childern": []
    },
    {
        "caption": "Rostlá zástavba- historické jádro",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Historical",
        "description": "\n- historická zástavba specifická úzkými, křivolakými uličkami a nepravidelnými domy\n",
        "childern": []
    },
    {
        "caption": "Vilová zástavba",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Residential",
        "description": "\n- jednotlivé vily nebo rodinné domy umístěné v zahradách\n- zpravidla na okrajích měst nebo v jejich okolí\n\n`Situace 122 - Blokování zástavby v sídle <http://www.vugtk.cz/euradin/TB04CUZK001/03_CartographicSituations/web/Situation_122.html>`_\n\n\n",
        "childern": []
    },
    {
        "caption": "Rozptýlená zástavba",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Scattered",
        "description": "\n- vícepodlažní obytné budovy se sadovou nebo bez sadové úpravy se vzdáleností mezi budovami větší než 50 m\n",
        "childern": []
    },
    {
        "caption": "Oddělená zástavba",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Spaced",
        "description": "\n- bloky (řady) nízkopodlažních i vícepodlažních obytných a neobytných budov se vzdáleností mezi budovami větší než 50 m\n\n- pro zachvání blokového charekteru zástavby se drobné budovy a kůlny z vnitrobloku vypouštějí\n",
        "childern": []
    },
    {
        "caption": "Uliční čára",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/StreelLine",
        "description": "\n- samostatně stojící budovy rozptýlené a vilové zástavby podél ulic (v rozsabu bufferu) jsou zarovnány na uliční čáru\n",
        "childern": []
    },
    {
        "caption": "Sídla",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea",
        "description": " ",
        "childern": [
            "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/AlongRoad",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Coherent",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Dispersed",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Historical",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Residential",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Scattered",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Spaced",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/StreelLine",
            "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Village"
        ]
    },
    {
        "caption": "Sídlo návesního typu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/StructuralPatterns/UrbanArea/Village",
        "description": "\n- vesnická zástavba umístěná kolmo k centrální návsi / náměstí\n",
        "childern": []
    },
    {
        "caption": "Lícování",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/TopologicalConstraints/Colinearity",
        "description": "Lícování",
        "childern": []
    },
    {
        "caption": "Minimální vzdálenost kreseb",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/TopologicalConstraints/MinimalRenderingDistance",
        "description": "\n- pokud jsou okraje obou kreseb ve stejné barvě, neměla by být hodnota nulová (výjimka pokud se nejedná o slícování liniových kreseb nebo o maskování bodového prvku vůči liniovému prvku)\n\n- pokud jsou okraje kresby ve výrazně odlišné barvě, může být hodnota nulová (výjimka pokud liniové prvky nemají stejný průběh)\n\n- pokud není možné dodržet minimální vzdálenost - vypouští se nejméně důležitý prvek\n\n- u složených symbolů liniových prvků (zeď, terénní stupeň apod.) lze průběh nahradit pouze jejich základní linií\n\n- pokud je vzdálenost souběžně jdoucích liniových prvků ve stanovené délce v rozmezí <0,x*minimální vzdálenost> dochází k jejich zesouladění.\n\n- Při odsunu prvků musí být dodržena topologie\n",
        "childern": []
    },
    {
        "caption": "Topologické",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/CommonRules/TopologicalConstraints",
        "description": " ",
        "childern": [
            "/CartographerKnowledge/CommonRules/TopologicalConstraints/Colinearity",
            "/CartographerKnowledge/CommonRules/TopologicalConstraints/MinimalRenderingDistance"
        ]
    },
    {
        "caption": "Mapové produkty",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries",
        "description": "\nPravidla vázaná na použitý značkový klíč -\npravidla a vlastnosti všech prvků mapy jim přiřazených již při návrhu a zpracování značkového klíče.\nJde především o tvar, velikost a barvu jednotlivých značek. Dále pak o výběrová pravidla pro jednotlivé\nprvky ve vztahu k účelu a použití daného mapového díla (hustota a minimální velikost jednotlivých prvků)\na v neposlední řadě i pořadí zobrazování prvků a jejich vztahy včetně vlastností konkrétních mapových značek.",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10",
            "/CartographerKnowledge/MapSeries/ZM25"
        ]
    },
    {
        "caption": "Administrativní hranice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Boders/Administrative",
        "description": "\nproperty Color : Color = violet\nproperty Weight : Integer = 110\nproperty Category : Category = line\nproperty Symbols : List = 501, 503, 504, 509, 505, 506\n\n- překrývají-li se správní hranice, je zbrazována vždy ta vyššího správního celku\n ",
        "childern": []
    },
    {
        "caption": "Hranice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Boders",
        "description": "\n\nproperty Třída přesnosti : Precision = B\n\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Boders/Administrative",
            "/CartographerKnowledge/MapSeries/ZM10/Boders/Natural",
            "/CartographerKnowledge/MapSeries/ZM10/Boders/State",
            "/CartographerKnowledge/MapSeries/ZM10/Boders/Vague",
            "/CartographerKnowledge/MapSeries/ZM10/Boders/Vegetation"
        ]
    },
    {
        "caption": "Hranice přírodních rezervací",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Boders/Natural",
        "description": "\nproperty Operátory : List = odsun, paralelizace, vypuštění\nproperty Color : Color = green\nproperty Weight : Integer = 400\nproperty Category : Category = area\nproperty Třída přesnosti : Precision = C\nproperty Symbols : List = 507a, 507b\n ",
        "childern": []
    },
    {
        "caption": "Státní hranice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Boders/State",
        "description": "\nproperty Color : Color = violet\nproperty Weight : Integer = 50\nproperty Category : Category = line\nproperty Symbols : List = 501\n\n- překrývají-li se hranice je zbrazována vždy státní hranice\n- státní hranice nesmí být upravována\n ",
        "childern": []
    },
    {
        "caption": "Přibližná hranice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Boders/Vague",
        "description": "\nproperty Operátory : List = odsun, paralelizace, vypuštění, vypuštění části\nproperty Color : Color = Violet\nproperty Weight : Integer = 700\nproperty Category : Category = line\nproperty Symbols : List = 511\n ",
        "childern": []
    },
    {
        "caption": "Hranice prostu a užívání půdy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Boders/Vegetation",
        "description": "\nproperty Operátory : List = odsun, paralelizace, vypuštění, vypuštění části\nproperty Color : Color = black\nproperty Weight : Integer = 700\nproperty Třída přesnosti : Precision = C\nproperty Category : Category = linea\nproperty Symbols : List = 508\n\n- není v kolizi s prvky 541, 543, 544, 545. Hranice užívámí se v daném úseku přeruší.\n ",
        "childern": []
    },
    {
        "caption": "Letiště",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Airport",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění, zjednodušení tvaru\nproperty Weight : Integer = 280\nproperty Minimální velikost : Area = 2000m2\nproperty Symbols : List = 142\n",
        "childern": []
    },
    {
        "caption": "Budovy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Buildings",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění části, nahrazení značkou, kresba nadmíru\nproperty Weight : Integer = 220\nproperty Minimální velikost : Area = 50m2, pro zobrazení značkou 16m2\nproperty Symbols : List = 101 01, 101 02, 101 03, 101 04, 101 05, 101 06, 101 07, 101 08, 101 09, 101 10, 101 11, 101 12, 101 13, 101 14, 137, 148\nproperty Třída přesnosti : Precision = B\n\n- budovy `menší` než 50m2 jsou 'nahrazeny' bodovou značkou nebo vykresleny nadmíru\n- budovy menší než 50 m2 a větší než 16m2 se zobrazují pouze v případech\n    1) pokud u nich existuje adresní bod - lze nalézt v RÚAN\n    2) pokud jsou v terénu osamělé - v okolí cca 5cm v mapě nejsou jiné shluky budov\n    3) charakter okolní zástavby je chatová nebo zahrádkářská kolonie - viz diskuze vilová zástavba\n    4) mají navázané jméno Geonames - to by měl být parametr v ZABAGEDě\n- budovy `menší` než4x4 m (plocha ≥ 16 m2) se vypouštění, výjimku tvoří malá kaple, drobná ČSPH a meteorologická stanice, které se zobrazují bodově.\n- při nahrazení značkou se 'značka orientuje podle skutečné polohy budovy'\n- u `dlouhých úzkých budov` (nad 10 m) je nutné dodržet menší rozměr minimálně 5m\n- `složitější tvary` budov mohu být zjednodušeny - výklenky pod 3 m se vypouští, nebo vykreslí nadmíru (min 4m)\n- budovy `stejného způsobu užívání` se slučují, ignorují se mezery menší než 3 m.\n- v případě, že mezi dvěma budovami `vzdálenými` < 4 m vede ulice, mezera se rozšíří nad 4 m.\n- odsun budovy se provádí pouze `při kolizi kresby` s železnicí a komunikací\n- podměrečné budovy se ponechávají\n",
        "childern": []
    },
    {
        "caption": "Budovy zobrazené plochou",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings",
        "description": "\nproperty Color : Color = black\nproperty Category : Category = area\nproperty Třída přesnosti : Precision = B\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Airport",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Buildings",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Cementary",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Gassstation",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Grainery",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/GreenHouse",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/ParkingLot",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Ruins",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Shed"
        ]
    },
    {
        "caption": "Hřbitov",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Cementary",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění, zjednodušení tvaru, vyplnění značkou\nproperty Weight : Integer = 300\nproperty Minimální velikost : Area = 2000 m2\nproperty Symbols : List = 127\n\n- celý areál je vyplněn značkou v rastru\n- v malých hřbitovech odstraňujeme parkové cesty\n",
        "childern": []
    },
    {
        "caption": "Čerpací stanice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Gassstation",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění, zjednodušení tvaru, vyplnění značkou\nproperty Weight : Integer = 250\nproperty Symbols : List = 136\n",
        "childern": []
    },
    {
        "caption": "Silo Válcové nádrže, zásobníky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Grainery",
        "description": "\nproperty Color : Color = braun\nproperty Operátory : List = odsun, vypuštění, agregace, zjednodušení tvaru, nahrazení značkou\nproperty Weight : Integer = 260\nproperty Minimální velikost : Area = ≥ 50 m2\nproperty Symbols : List = 118 01, 118 02, 119 01, 119 02\nproperty Třída přesnosti : Precision = B\n\n- objekty pod 50m2 se znázorňují bodovou značkou\n",
        "childern": []
    },
    {
        "caption": "Skleníky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/GreenHouse",
        "description": "\nproperty Color : Color = green\nproperty Operátory : List = odsun, vypuštění, agregace, zjednodušení tvaru\nproperty Weight : Integer = 350\nproperty Minimální velikost : Area = ≥ 100 m2, výjimka pro samostatné a orientačně významné - plocha ≥ 70 m2\nproperty Symbols : List = 132\nproperty Třída přesnosti : Precision = B\n\n- podle poměru stran se použije značka 132 nebo 132a\n- složitější tvary než obdélník se generalizují\n- více úzkých skleníků vedle sebe se sloučí v jeden skleník\n",
        "childern": []
    },
    {
        "caption": "Parkoviště",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/ParkingLot",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění, zjednodušení tvaru\nproperty Weight : Integer = 350\nproperty Symbols : List = 138\n\n- značka se umístí do středu areálu\n",
        "childern": []
    },
    {
        "caption": "Rozvalina, zřícenina",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Ruins",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění části, zjednodušení tvaru, kresba nadmíru\nproperty Weight : Integer = 350\nproperty Minimální velikost : Area = 150m2 16m2\nproperty Symbols : List = 103,\nproperty Třída přesnosti : Precision = C\n\n- budovy menší než 150m2 a větší než 4x4 m (plocha ≥ 16 m2) se zobrazují pouze v případě pokud mají definiční bod adresního místa\n- u dlouhých úzkých budov (nad 10 m) je nutné dodržet menší rozměr minimálně 5m\n- složitější tvary budov mohu být zjednodušeny - výklenly pod 3 m se vypouští, nebo vykreslí nadmíru (min 4m)\n ",
        "childern": []
    },
    {
        "caption": "Kůlna",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings/Shed",
        "description": "\nproperty Color : Color = braun\nproperty Operátory : List = odsun, vypuštění, kresba nadmíru\nproperty Weight : Integer = 350\nproperty Minimální velikost : Area = 1x0,7 mm v měřítku mapy\nproperty Symbols : List = 131\nproperty Třída přesnosti : Precision = B\n\n- kůlny menší než 1x0,7 mm v měřítku mapy v zatavěné části se vypouštějí\n- kůlny menší než 1x0,7 mm v měřítku mapy mimo zastavěné části se zvětší 1 x 0,7 mm\n- kůlny složitějšího tvaru než obdélník se generalizují\n- pokud se vdele sebe vyskytne více kůlen menších než 1 x 0,7 mm sloučíse do jedné o minimální velikosti 1 x 0,7 mm\n- kůlny v areálu čerpací stanice, autobusového nádraží a železniční stanice se vypouštějí\n- kůlna v kolejišti se ponechává a ose železnice není s železnicí v kolizi - maskuje ji\n",
        "childern": []
    },
    {
        "caption": "Budovy a jednotlivé objekty",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects",
        "description": " ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Buildings",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points"
        ]
    },
    {
        "caption": "Dopravníkový pás",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures/conveyor",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 250\nproperty Minimální velikost : Length = 150 m\nproperty Symbols : List = 135\n",
        "childern": []
    },
    {
        "caption": "Elektrické vedení",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures/ElectricPowerLine",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 200\nproperty Minimální velikost : Length = 20 m\nproperty Symbols : List = 129\n\n- musí začínat na budově nebo značkou stožáru el. vedení (značka 128)\n- je odsunováno při kolizi s komunikacemi(železnicí ???),\n- při kolizi se značkou stromořadí nebo příčných čárek terénního stupně je ponechán bez úptav\n- v ostatních případech je přednostně odsunován kolizní prvek\n",
        "childern": []
    },
    {
        "caption": "Liniové značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures",
        "description": "\nproperty Category : Category = line\nproperty Třída přesnosti : Precision = B\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures/conveyor",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures/ElectricPowerLine",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures/Pasage",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures/Pipeline",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures/Rampart",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures/Wall"
        ]
    },
    {
        "caption": "Průjezd",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures/Pasage",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění, úprava tvaru značky\nproperty Weight : Integer = 350\nproperty Symbols : List = 104\n\n- šíře průjezdu se upraví podle tvaru budovy\n",
        "childern": []
    },
    {
        "caption": "Produktovod",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures/Pipeline",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění, kresba nadmíru\nproperty Weight : Integer = 300\nproperty Minimální velikost : Length = 70 m\nproperty Symbols : List = 134\n\n- úseky kratší než 7mm se prodlužují na tento rozměr\n- na krátkých úsecích musí být zobrazeno alespoň jedno kolečko\n",
        "childern": []
    },
    {
        "caption": "Historická hradba",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures/Rampart",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění, slícování, zjednodušení tvaru, změna tvaru značky\nproperty Weight : Integer = 280\nproperty Minimální velikost : Length = 50 m\nproperty Symbols : List = 171b\n\n- v průběhu nahrazuje hranici užívání\n",
        "childern": []
    },
    {
        "caption": "Kamenná zeď",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/LinearFeatures/Wall",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění, slícování, zjednodušení tvaru\nproperty Weight : Integer = 280\nproperty Minimální velikost : Length = 50 m\nproperty Symbols : List = 171a,\n\n\n- v průběhu nahrazuje hranici užívání\n- není-li možné zobrazit značku nahrazuje se pouhou čárou\n- je druhým vypouštěným prvkem (po stromořadí)\n- u vodních ploch menších 5x5mm se vypouští\n   ",
        "childern": []
    },
    {
        "caption": "Kaple",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Chapel",
        "description": "\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\nproperty Operátory : List = odsun, vypuštění, nahrazení sdruženou značkou\nproperty Weight : Integer = 240\nproperty Symbols : List = 106\n\n- je-li na kapli zaměřen bod polohového pole, je bod nahrazen sdruženou značkou a značka kaple je vypuštěna\n",
        "childern": []
    },
    {
        "caption": "Komín",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Chimney",
        "description": "\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\nproperty Operátory : List = odsun, vypuštění, nahrazení sdruženou značkou\nproperty Weight : Integer = 250\nproperty Symbols : List = 107\n\n- je-li na komínu zaměřen bod polohového pole, je bod nahrazen sdruženou značkou a značka komína je vypuštěna\n- jsou-li komíny v rámci areálu v překrytu, provede se výběr aby zůstal zachován plošný rozsah\n",
        "childern": []
    },
    {
        "caption": "Kostel",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Church",
        "description": "\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\nproperty Operátory : List = odsun, vypuštění, nahrazení sdruženou značkou\nproperty Weight : Integer = 230\nproperty Symbols : List = 105\n\n- umisťuje se v areálu značky 422 - kostel\n- je-li na kostele zaměřen bod polohového pole, je bod nahrazen sdruženou značkou a značka kostela je vypuštěna\n- má-li areálová značka kostele věž, je značka kostele umístěna na její polohu a věž vypuštěna\n- je-li na kostele více věží, umístí se značka kostela místo jedné z nich\n",
        "childern": []
    },
    {
        "caption": "Kříž, sloup kult. významu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Cross",
        "description": "\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 250\nproperty Symbols : List = 126\n\n- při velké hustotě může být počet zgeneralizován tak aby byl zachován plošný rozsah\n- vztažný bod kžíže nesmí zasahovat do komunikací a vodních ploch (železnic ???)\n- při kolizi s kostelem, kaplí nebo pomníkem, pokud nejde odsunout, vypustí se.\n",
        "childern": []
    },
    {
        "caption": "Těžní věž",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/DrillingTower",
        "description": "\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\nproperty Operátory : List = odsun, vypuštění, nahrazení sdruženou značkou\nproperty Weight : Integer = 250\nproperty Symbols : List = 112\n\n- je-li na těžní věži zaměřen bod polohového pole, je bod nahrazen sdruženou značkou a značka těžní věže je vypuštěna\n",
        "childern": []
    },
    {
        "caption": "Stožár el. vedení",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Electric",
        "description": "\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\n\" hrefproperty Operátory : List = odsun, vypuštění, umístění značky1\nproperty Weight : Integer = 200\nproperty Symbols : List = 128\n\n- značka je vždy unístěna na elektrickém vedení 129\n- je odsouván pouze v případě kolize s komunikacemi a vodními plochami\n- kolize s kolečky stromořadí nebo kolmými čárkami terénního stupně není kolizí\n- liniových prvků se mohou dotýtat tečně\n\n",
        "childern": []
    },
    {
        "caption": "Čerpací stanice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/FillingStation",
        "description": "\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\n\" hrefproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 250\nproperty Symbols : List = 136\n\n- v areálu se značka umisťuje na budovu, pokud je budova u hranice areálu, umístí se značka do středu areálu\n- je-li v areálu více budov umístí se značka do středu areálu\n",
        "childern": []
    },
    {
        "caption": "Přístaviště",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Marina",
        "description": "\nproperty Color : Color = blue\nproperty Třída přesnosti : Precision = B\n\" hrefproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 250\nproperty Symbols : List = 139\n\n- značka je umístěna ve vodní ploše\n",
        "childern": []
    },
    {
        "caption": "Mohyla, pomník",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Monument",
        "description": "\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 250\nproperty Symbols : List = 125\n\n- v kolizi s kostelem nebo kaplí, pokud nejde odsunout, se vypustí\n- v kolizi s křížem, pokud nejde odsunout, vypustí se kříž\n- při velké hustotě může být počet zgeneralizován tak aby byl zachován plošný rozsah\n- je-li na kříži zaměřen bod polohového pole, je bod nahrazen sdruženou značkou a značka kříž je vypuštěn\n",
        "childern": []
    },
    {
        "caption": "Průjezd",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Passage",
        "description": "\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\nproperty Operátory : List = odsun, vypuštění, úprava tvaru značky\nproperty Weight : Integer = 350\nproperty Symbols : List = 104\n\n- šíře průjezdu se upraví podle tvaru budovy\n",
        "childern": []
    },
    {
        "caption": "Bodové značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Points",
        "description": "\n\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 250\nproperty Symbols : List = 101, 110, 111, 116, 117, 118, 119, 124, 136, 137, 138,  147, 148\n",
        "childern": []
    },
    {
        "caption": "Bodové značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points",
        "description": "\nproperty Category : Category = point\nproperty Třída přesnosti : Precision = B\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Chapel",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Chimney",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Church",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Cross",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/DrillingTower",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Electric",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/FillingStation",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Marina",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Monument",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Passage",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Points",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/SkiJump",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Tower",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/ZM10.BuildingsPointsToweronBuilding"
        ]
    },
    {
        "caption": "Lyžařský můstek",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/SkiJump",
        "description": "\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 250\nproperty Symbols : List = 122\n\n- lyžařský můstek se vždy umisťuje otevřeným tvarem po svahu\n",
        "childern": []
    },
    {
        "caption": "Věžové stavby",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/Tower",
        "description": "\nproperty Color : Color = black\n\nproperty Třída přesnosti : Precision = B\nproperty Operátory : List = odsun, vypuštění, nahrazení sdruženou značkou\nproperty Weight : Integer = 250\nproperty Symbols : List = 149, 150, 151\n\n- je-li na těžní věži zaměřen bod polohového pole, je bod nahrazen sdruženou značkou a značka těžní věže je vypuštěna\n",
        "childern": []
    },
    {
        "caption": "Věžovitá stavba, věž na budově",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects/Points/ZM10.BuildingsPointsToweronBuilding",
        "description": "\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\nproperty Operátory : List = odsun, vypuštění, nahrazení sdruženou značkou\nproperty Weight : Integer = 250\nproperty Symbols : List = 120\n\n- v areálu značky kostel (422) může být nahrazena značkou kostela (405)\n- je-li v areálu více věží může být počet zgeneralizován tak aby byl zachován plošný rozsah\n- je-li na věži zaměřen bod polohového pole, je bod nahrazen sdruženou značkou a značka věže je vypuštěna\n",
        "childern": []
    },
    {
        "caption": "Základní body sítě",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/ControlPoints/Basic",
        "description": "\nproperty Symbols : List = 801\nproperty Weight : Integer = 10\n\n- body maskují liniové a areálové prvky\n- výšková kóta může být při kolizi vypuštěna za předpokladu ponechání výškového údaje\n\n ",
        "childern": []
    },
    {
        "caption": "Geodetické body",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/ControlPoints",
        "description": "\nproperty Category : Category = points\nproperty Color : Color = černá\nproperty Třída přesnosti : List = A\n\n- mohou maskovat liniové a areálové prvky stejné barvy se stanoveným tresholdem (se světýlkem)\n\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/ControlPoints/Basic",
            "/CartographerKnowledge/MapSeries/ZM10/ControlPoints/Elevation",
            "/CartographerKnowledge/MapSeries/ZM10/ControlPoints/Geodetic",
            "/CartographerKnowledge/MapSeries/ZM10/ControlPoints/Gravimetric",
            "/CartographerKnowledge/MapSeries/ZM10/ControlPoints/Permanent"
        ]
    },
    {
        "caption": "Nivelační body",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/ControlPoints/Elevation",
        "description": "\nproperty Operátory : List = vypuštění\nproperty Symbols : List = 811\nproperty Weight : Integer = 30\n\n- bod není v kolizi a mostem (symbol 281), bod maskuje most\n ",
        "childern": []
    },
    {
        "caption": "Geodetické, zhušťovací a přidružené body",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/ControlPoints/Geodetic",
        "description": "\nproperty Operátory : List = vypuštění, nahrazení sdruženou značkou\nproperty Symbols : List = 802, 805, 808\nproperty Weight : Integer = 70\n\n- body maskují liniové a areálové prvky\n\n",
        "childern": []
    },
    {
        "caption": "Bod tíhového pole",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/ControlPoints/Gravimetric",
        "description": "\nproperty Operátory : List = vypuštění\nproperty Symbols : List = 814\nproperty Weight : Integer = 20\n\n- body maskují liniové a areálové prvky v černé barvě\n ",
        "childern": []
    },
    {
        "caption": "Geodetické, zhušťovací a přidružené body trvale signalizované",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/ControlPoints/Permanent",
        "description": "\nproperty Operátory : List = vypuštění\nproperty Symbols : List = 809, 810, 813\nproperty Weight : Integer = 90\n    ",
        "childern": []
    },
    {
        "caption": "Terénní reliéf",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Elevation",
        "description": "\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Elevation/Point",
            "/CartographerKnowledge/MapSeries/ZM10/Elevation/Step"
        ]
    },
    {
        "caption": "Terénní reliéf - bodové prvky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Elevation/Point",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Color : Color = Black\nproperty Weight : Integer = 530\nproperty Třída přesnosti : Precision = C\n\" hrefproperty Category : Category = point\nproperty Symbols : List = 607a,624,626, 627\n ",
        "childern": []
    },
    {
        "caption": "Terénní stupeň",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Elevation/Step",
        "description": "\nproperty Operátory : List = odsun, vypuštění, paralelizace, slícování, vypuštění části, maskování, změna tvaru značky, nahrazení sdruženou značkou\nproperty Color : Color = Black\nproperty Weight : Integer = 600\nproperty Category : Category = line\nproperty Třída přesnosti : List = B - artifical, C - natural\nproperty Minimal size : List = ve volném terénu min délka > 50 m, stupně vázané na liniové objekty (komunikace, hráze rybníků) délka > 20 m,  v mapě terénní stupeň musí mít alespoň dvě příčné čárky\nproperty Symbols : List = 606\n\n- při kolizi dvou souběžných terénních stupňů hranami k sobě je průběh nahrazen značkou 314a (vzdálenost hran do 10m), nebo značkou 314b (vzdálenost hran nad 10m)\n- terénní stupně ve tvaru jámy do šířky 15m jsou nahrazeny bodovou značkou 607\n- příčné čárky terénního stupně mohou být zkráceny, vymaskovány nebo vypuštěny, nesmí však být narušena linka (horní hrana)\n- minimální vzdálenost terénního stupně od ostatních linií je 0,2 mm\n- pokud je vzdálenost menší než 0,2mm nebo při kolizi hranou k prvku slícovává se s hranicí užívání, železnicí, dvoučarou komunikací, budovou a parkovou cestou, v opačném případě se paralelizuje\n- pokud je vzdálenost menší než 0,2mm nebo při kolizi s ostatními liniovými prvky se s nimi paralelizuje\n- při kolizi s budovou se terénní stupeň odstraní\n- při kolizi příčných čárek a budov jsou příčné čárky maskovány budovou\n- v místech kolize příčných čárek s jiným terénním stupněm je ponechána pouze základna (příčné čárky se vypustí)\n- v místech generalizace je terénní stupeň druhým prvkem (po stromořadí), který se vypouští\n- při kolizi terénního stupně s objekty na komunikaci (propustek, most, lávka apod.), terénní stupeň se přeruší nebo zkrátí\n- terénní stupeň se zaměřenou dolní hranou na komunikaci z obou stran mostu, nezkracují se jeho příčné čárky\n- pokud terénní stupeň se zaměřenou dolní hranou navazuje na obyčejný terénní stupeň, délka příčných dílků plynule přechází na základní délku\n- vzájemná poloha terénních stupňů a ostatních prvků se zachovává\n\n ",
        "childern": []
    },
    {
        "caption": "Ochranné pásmo - buffer",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Parameters/Bufers",
        "description": " ",
        "childern": []
    },
    {
        "caption": "Barvy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Parameters/Colors",
        "description": "\n- black\n- gray\n- blue\n- violet\n- green\n    ",
        "childern": []
    },
    {
        "caption": "Parametry",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Parameters",
        "description": " ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Parameters/Bufers",
            "/CartographerKnowledge/MapSeries/ZM10/Parameters/Colors",
            "/CartographerKnowledge/MapSeries/ZM10/Parameters/Treshold"
        ]
    },
    {
        "caption": "Prahová hranice (treshold)",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Parameters/Treshold",
        "description": "\n====== ====== ===== ===== ====== ======\nc/c    black  grey  blue  violet green\n------ ------ ----- ----- ------ ------\nblack  0,2    0,2   0,0   0,0    0,0\ngray   0,2    0,2   0,0   0,0    0,0\nblue   0,0    0,0   0,2   0,0    0,0\nviolet 0,0    0,0   0,0   0,2    0,0\ngreen  0,0    0,0   0,0   0,0    0,2\n====== ====== ===== ===== ====== ======\n ",
        "childern": []
    },
    {
        "caption": "Areálové značky (komunikace)",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/Area",
        "description": "\nproperty Třída přesnosti : Precision = B\n\" hrefproperty Category : Category = Area\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/Area/RailwayStation"
        ]
    },
    {
        "caption": "Železniční stanice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/Area/RailwayStation",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednorušení tvaru, ortogomalizace\nproperty Weight : Integer = 100\nproperty Symbols : List = 220\n ",
        "childern": []
    },
    {
        "caption": "Most",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Bridge",
        "description": "\nproperty Operátory : List = odsun, vypuštění, maskování, změna tvaru značky, nahrazení sdruženou značkou\nproperty Weight : Integer = 120\nproperty Minimální velikost : Length = minimálně 1mm rovného úseku\nproperty Symbols : List = 216, 281, 282, 283\n\n- šíře značky se upravuje podle druhu komunikace, v sídlech podle šíře intravilánu\n- lemovky mostů se posouvaví podle úhlu přemostěného prvku\n- souběžné mosty na stejných komunikacích je možno sdružit do jedné značky\n- nelze spojit mosty na různých komunikacích do jednoho, lze však jeden z nich změnit na jednostranný\n- výškový bod maskuje značku mostu\n",
        "childern": []
    },
    {
        "caption": "Liniové komunikace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines",
        "description": "\nproperty Třída přesnosti : Precision = B\n\" hrefproperty Category : Category = line\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Bridge",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Culvert",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/DirtRoad",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/FootBridge",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Parkway",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Pathway",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/RailRoad",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Railway",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/RailwaySideTrack",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Ramp",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Roundabout",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/SecondClassRoad",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Street",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/ThirdClassRoad",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Tunnel"
        ]
    },
    {
        "caption": "Propustek, podchod",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Culvert",
        "description": "\nproperty Operátory : List = odsun, vypuštění, změna tvaru značky, rotace značky\nproperty Weight : Integer = 500\nproperty Třída přesnosti : Precision = C\nproperty Symbols : List = 285\n\n- při nedostatku místa je možné jednu stranu propustku vypustit\n- šíře značky se upravuje podle šířky komunikace nebo podle šíře kolejiště\n- značka propustku rotuje podle vodního toku\n- na ktátkých hrázích (do 5 m) je propustek vypuštěn\n- výškový bod maskuje značku propustku\n- na podzemním toku se propustek vypouští\n",
        "childern": []
    },
    {
        "caption": "Polní cesta",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/DirtRoad",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení průběhu,\nproperty Weight : Integer = 200\nproperty Symbols : List = 247\n\n- v areálu čerpacích stanic a garáží se vypouští\n- v areálech ZP, PP, skladech, zámcích, nemocnic a sport. areálech je prováděn výběr podle zaplnění mapy.\n",
        "childern": []
    },
    {
        "caption": "Lávka, nadchod",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/FootBridge",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Třída přesnosti : Precision = C\nproperty Weight : Integer = 500\nproperty Minimální velikost : Length = minimálně 1mm rovného úseku\nproperty Symbols : List = 284\n",
        "childern": []
    },
    {
        "caption": "Pěšina, parková cesta",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Parkway",
        "description": "\nproperty Operátory : List = odsun, zjednodušení průběhu, vypuštění\nproperty Weight : Integer = 500\nproperty Třída přesnosti : Precision = C\nproperty Symbols : List = 249\n\n- Parková cesta uvnitř areálu je ukončena před hranicí užívání (areál musí zůstat uzavřený)\n- v malých hřbitovech jsou parkové cesty vypuštěny\n- ve velkých hřbitovech jsou ponechány hlavní cesty\n- dílky kratší než 0,7mm se vypustí\n- pěšiny v parcích širší než 5m se vykreslují dvoučaře\n",
        "childern": []
    },
    {
        "caption": "Polní cesta  neudržovaná",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Pathway",
        "description": "\nproperty Operátory : List = odsun, zjednodušení průběhu, vypuštění\nproperty Weight : Integer = 500\nproperty Třída přesnosti : Precision = C\nproperty Symbols : List = 248\n\n- dílky kratší než 0,7mm se vypustí\n- v areálu čerpacích stanic a garáží se vypouští\n- v areálech ZP, PP, skladech, zámcích, nemocnic a sport. areálech je prováděn výběr podle zaplnění mapy.\n",
        "childern": []
    },
    {
        "caption": "Železnice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/RailRoad",
        "description": "\nproperty Operátory : List = odsun, vypuštění, paralelizace, nahrazení sdruženou značkou, zjednodušení průběhu,\nproperty Weight : Integer = 100\nproperty Minimální velikost : Area = 40m\nproperty Symbols : List = 201, 202, 203, 204, 205\n\n- železnice ve stavbě se vyjadřují příslušnou značkou, která je v daném úseku přerušovaná (207)\n",
        "childern": []
    },
    {
        "caption": "Lanovky, tramvaje metro",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Railway",
        "description": "\nproperty Operátory : List = odsun, vypuštění, paralelizace, zjednodušení průběhu,\nproperty Weight : Integer = 200\nproperty Minimální velikost : Length = 40 m\nproperty Symbols : List = 222 01, 222 02, 223, 225, 226, 227\n",
        "childern": []
    },
    {
        "caption": "Vlečky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/RailwaySideTrack",
        "description": "\nproperty Operátory : List = odsun, vypuštění, paralelizace, nahrazení sdruženou značkou, zjednodušení průběhu,\nproperty Weight : Integer = 170\nproperty Minimální velikost : Length = 40 m\nproperty Symbols : List = 206\n\n- pokud je vlečka v areálu prům. podniku, kolejiště a pod. v kolizi s kůlnou nebo budovou (osově) budova maskuje vlečku\n ",
        "childern": []
    },
    {
        "caption": "Nájezd, větev křižovatky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Ramp",
        "description": "\nproperty Operátory : List = odsun, zjednodušení průběhu, vypuštění, kresba nadmíru\nproperty Weight : Integer = 160\nproperty Symbols : List = 254\n",
        "childern": []
    },
    {
        "caption": "Kruhový objezd",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Roundabout",
        "description": "\nproperty Operátory : List = odsun, zjednodušení průběhu, změna značky, kresba nadmíru\nproperty Weight : Integer = 150\nproperty Symbols : List = 251\n\n- je vždy vyjádřen v celém průběhu nejvyšším typem komunikace\n",
        "childern": []
    },
    {
        "caption": "Dálnice, silnice I a II třídy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/SecondClassRoad",
        "description": "\nproperty Operátory : List = odsun, zjednodušení průběhu, změna značky\nproperty Weight : Integer = 130\nproperty Symbols : List = 240, 241, 242, 243\n\n- průtahy přes sídla se zobrazují zvláštní značkou\n- úseky ve stavbě se zobrazují přerušovaně (značkou 246)\n",
        "childern": []
    },
    {
        "caption": "Ulice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Street",
        "description": "\nproperty Operátory : List = odsun, zjednodušení průběhu, změna značky\nproperty Weight : Integer = 150\nproperty Symbols : List = 250 01, 250 02\n\n- jsou tvořeny hranicí užívání\n- v místě napojení na silnici je ulice otevřena (odmaskována)\n- nesjízdnost je vyjádřena kolmými čárkami\n",
        "childern": []
    },
    {
        "caption": "Silnice III třídy a neevidované",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/ThirdClassRoad",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení průběhu, změna značky\nproperty Weight : Integer = 150\nproperty Symbols : List = 244, 245\n\n- sídla zobrazená hranicí užívání maskují silnice III. třídy\n- úseky ve stavbě se zobrazují přerušovaně (značkou 246)\n",
        "childern": []
    },
    {
        "caption": "Tunel silniční",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines/Tunnel",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení průběhu, úprava tvaru značky\nproperty Weight : Integer = 140\nproperty Symbols : List = 258\n\n- šíře značky se upravuje podle druhu siniční komunikace\n",
        "childern": []
    },
    {
        "caption": "Hraniční přechody",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/Point/BorderCrossing",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 150\nproperty Symbols : List = 270\n",
        "childern": []
    },
    {
        "caption": "Stožár lanové dráhy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/Point/CableCarPole",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 200\nproperty Symbols : List = 229\n\n- pokud chybí na konci lanové dráhy musí být doplněn\n",
        "childern": []
    },
    {
        "caption": "Bodové značky (komunikace)",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/Point",
        "description": "\nproperty Třída přesnosti : Precision = B\n\" hrefproperty Category : Category = Point\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/Point/BorderCrossing",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/Point/CableCarPole",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/Point/RailRoadStation",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/Point/SubwayStation"
        ]
    },
    {
        "caption": "Železniční zastávka",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/Point/RailRoadStation",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 100\nproperty Symbols : List = 220\n\n- značka je umístěna osově na železnici\n ",
        "childern": []
    },
    {
        "caption": "Zastávka metra",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation/Point/SubwayStation",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 140\nproperty Symbols : List = 228\n\n- značka je umístěna v ose metra\n- jsou-li výstupy dva, značka se umístí 2x v místě výstupů\n",
        "childern": []
    },
    {
        "caption": "Komunikace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Transportation",
        "description": "\nproperty Color : Color = black\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/Area",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/CommunicationLines",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation/Point"
        ]
    },
    {
        "caption": "Využití půdy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area",
        "description": "\nproperty Category : Category = area\nproperty Třída přesnosti : Precision = B, C\n\n- Hranicí užívání může být také komunikace, vodstvo a zdi\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area/AssignedType",
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area/Marsh",
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area/Peatbog",
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area/Quarry",
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area/UnassignedType",
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area/Utility"
        ]
    },
    {
        "caption": "Využití půdy - se značkou",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area/AssignedType",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 2000 m2\nproperty Minimální velikost : Width = 10m\nproperty Weight : Integer = 730\nproperty Symbols : List = 402, 403, 404, 406, 408, 409, 415\n\nproperty Color : Color = black\n\n- druh využití půdy je vyznačen značkou, pokud není dostatek místa může být značka zmenšena až na 1/3, případně přišipkována\n- u velmi malých areálů, kde v okolí převládá stanovená plodina je možné značku vynechat\n- značku je možné vynechat u malých ploch parků a zahrad v zástavbě\n ",
        "childern": []
    },
    {
        "caption": "Využití půdy - bažina",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area/Marsh",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 600 m2\nproperty Weight : Integer = 750\nproperty Symbols : List = 417\n\nproperty Color : Color = blue\n\n- Značka bažin se uvolňuje přes vodní toky na vzdálenost 0,5mm\n ",
        "childern": []
    },
    {
        "caption": "Využití půdy - rašeliniště",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area/Peatbog",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 600 m2\nproperty Weight : Integer = 750\nproperty Symbols : List = 114\n\nproperty Color : Color = black\n\n- areál rašeliniště se zobrazuje s barevnou výplní porostu půdy\n- značku lze umístit vzhledem k velikosti areálu vícekrát\n ",
        "childern": []
    },
    {
        "caption": "Povrchový lom, halda",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area/Quarry",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Weight : Integer = 750\nproperty Symbols : List = 423\nproperty Color : Color = black\n\n- pokud je lom v provozu má areál hnědou výplň\n- není-li lom v provozu jde o ostatní půdu (401) areál je bez výplně\n ",
        "childern": []
    },
    {
        "caption": "Využití půdy - bez značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area/UnassignedType",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 2000 m2\nproperty Minimální velikost : Width = 10m\nproperty Weight : Integer = 790\nproperty Symbols : List = 401, 405\n\nproperty Color : Color = black\n ",
        "childern": []
    },
    {
        "caption": "Účelové areály",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area/Utility",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 600m2\nproperty Weight : Integer = 730\nproperty Symbols : List = 420, 421, 422\n\nproperty Color : Color = black\n ",
        "childern": []
    },
    {
        "caption": "Stromořadí, úzký pruh lesa",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Line/Alley",
        "description": "\nproperty Operátory : List = odsun, vypuštění, vypuštění části\nproperty Minimální velikost : Length = 100m\nproperty Weight : Integer = 900\nproperty Symbols : List = 412\n\n\n- stromořadí a úzký pruh lesa je nezobrazuje v lesní půdě (406), křovinatém porostu (408), kosodřevině(409) a v okrasné zahradě (415)\n- stromořadí maskuje příčné čárky terénního stupně\n- musí být zobrazeny alespoň dvě značky\n\n ",
        "childern": []
    },
    {
        "caption": "Živý plot",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Line/Fence",
        "description": "\nproperty Operátory : List = odsun, vypuštění, vypuštění části, zjednodušení průběhu\nproperty Minimální velikost : Length = 100m\nproperty Weight : Integer = 730\nproperty Symbols : List = 543\n\n- musí být zobrazeny alespoň tři značky\n- v průběhu nahrazuje hranici užívání\n ",
        "childern": []
    },
    {
        "caption": "Průsek",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Line/FirebreakOrCorridor",
        "description": "\nproperty Operátory : List = odsun, vypuštění, úprava tvaru\nproperty Minimální velikost : Width = šířra min 1,5 m nax 20 m\nproperty Weight : Integer = 740\nproperty Symbols : List = 414\n\n- pokud v průseku vede více el. vedení, lanovek a pod. upraví se šíře průseku.\n- průsek se přeruší (maskuje) přes terénní stupně a skály,\n- průsek se nezobrazuje v  křovinatém porostu (408) a v kosodřevině(409)\n- pokud koncová nebo počáteční značka průseku je menší než 0,7 mm odstraňuje se\n- je-ji průsek širší než 20 m, musí být vykreslen pomocí areálů - vyzžití půdy\n ",
        "childern": []
    },
    {
        "caption": "Aleje, ploty, průseky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Line",
        "description": "\nproperty Category : Category = line\nproperty Color : Color = black\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Line/Alley",
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Line/Fence",
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Line/FirebreakOrCorridor"
        ]
    },
    {
        "caption": "Osamělý strom, lesík",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Trees",
        "description": "\nproperty Category : Category = point\nproperty Operátory : List = odsun, vypuštění\n\nproperty Color : Color = black\n\nproperty Weight : Integer = 750\nproperty Symbols : List = 410, 411\n ",
        "childern": []
    },
    {
        "caption": "Porost a využití půdy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Vegetation",
        "description": "\nproperty Třída přesnosti : Precision = C\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Area",
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Line",
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation/Trees"
        ]
    },
    {
        "caption": "Vodní plochy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Area",
        "description": "\nproperty Třída přesnosti : Precision =350\n\" hrefproperty Category : Category = area\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Water/Area/Reservoir",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Area/WaterArea"
        ]
    },
    {
        "caption": "Nádrž, odkaliště",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Area/Reservoir",
        "description": "\nproperty Operátory : List = odsun, vypuštění, vypuštění části, úprava tvaru, ortogonalizace\nproperty Color : Color = black\nproperty Weight : Integer = 370\nproperty Minimální velikost : Area = 70 m2\nproperty Symbols : List = 334 01, 334 02\nproperty Třída přesnosti : Precision = B, C\n\n- plochy blízké obdélníku se ortogonalizují\n- pokud je v areálu definována vodní plocha břehovkou, je výplň bílá a je změněna barva břehovky na černou 334 02\n- pokud není v areaálu definována vodní plocha břehovkou, je výplň modrá 334 01\n ",
        "childern": []
    },
    {
        "caption": "Vodní plocha",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Area/WaterArea",
        "description": "\nproperty Operátory : List = odsun, odsun části, vypuštění\nproperty Color : Color = blue\nproperty Weight : Integer = 350\nproperty Minimální velikost : Area = 70 m2\nproperty Symbols : List = 333\n ",
        "childern": []
    },
    {
        "caption": "zřídlo, vrt, kašna",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Points/PointObjects",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Symbols : List = 327, 328\n",
        "childern": []
    },
    {
        "caption": "Bodové prvky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Points",
        "description": "\nproperty Třída přesnosti : Precision = B\nproperty Color : Color = blue\nproperty Category : Category = points\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Water/Points/PointObjects",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Points/Reservoir",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Points/Tower",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Points/Waterfall",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Points/Well"
        ]
    },
    {
        "caption": "Zemní vodojem",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Points/Reservoir",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 320\nproperty Třída přesnosti : Precision = C\nproperty Symbols : List = 336\n\n- v areálu vodojemu se značka umístí na budovu,\n- pokud tam budova není, umístí se značka do těžiště sreálu\n- pokud nelze umístit do těžiště, umístí se značka vhodně do prostoru\n",
        "childern": []
    },
    {
        "caption": "Věžový vodojem",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Points/Tower",
        "description": "\nproperty Operátory : List = odsun, vypuštění, nahrazení sdruženou značkou\nproperty Weight : Integer = 310\nproperty Třída přesnosti : Precision = B\nproperty Symbols : List = 335\n\n- je-li na vodojemu zaměřen bod polohového pole, je bod nahrazen sdruženou značkou a značka vodojemu je vypuštěna\n",
        "childern": []
    },
    {
        "caption": "Vodopád",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Points/Waterfall",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 335\nproperty Třída přesnosti : Precision = C\nproperty Symbols : List = 321 01\n\n\n- na jednočarém vodním toku se umisťuje kolmo\n",
        "childern": []
    },
    {
        "caption": "Pramen, studánka",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Points/Well",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 310\nproperty Třída přesnosti : Precision = C\nproperty Symbols : List = 301\n\n- pokud v okolí pramene (3mm v měřítku mapy) začínaá vodní tok, protáhneme jej k značce\n",
        "childern": []
    },
    {
        "caption": "Akvadukt",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Aqueduct",
        "description": "\nproperty Operátory : List = odsun, vypuštění, úprava tvaru značky\nproperty Color : Color = black\nproperty Weight : Integer = 240\nproperty Symbols : List = 325 01, 325 02\n\n- šířka akvaduktu se upravuje podle šířky vodního toku\n- pro šířku do 5 m je značka 325 01\n- pro šířku nad 5 m je značka 325 02\n ",
        "childern": []
    },
    {
        "caption": "Ochranná hráz",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Dam",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení, paralelizace\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\nproperty Weight : Integer = 280\nproperty Minimální velikost : Other = alespoň dvě kolmé čárky\nproperty Symbols : List = 311 01, 311 02\n\n- příčné čárky hráze mohou být zkráceny, vymaskovány nebo vypuštěny, nesmí však být narušena linka (horní hrana)\n- příčné čárky hráze jsou vždy orientovány po směru toku\n- jde-li po hrázi komunikace, ponechává se ofset 0,2 mm\n",
        "childern": []
    },
    {
        "caption": "Přehradní hráz s komunikací",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/DamWithComunication",
        "description": "\nproperty Operátory : List = odsun,  vypuštění, kresba nadmíru\nproperty Color : Color = black\nproperty Třída přesnosti : Precision = B\nproperty Weight : Integer = 315\nproperty Minimální velikost : Length = 3 kolmé čárky\nproperty Symbols : List = 315\n\n- přehradní hráz s komunikací maskuje most na komunikaci\n- musí být umístěn na vodním toku\n",
        "childern": []
    },
    {
        "caption": "Přívoz",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Ferry",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Color : Color = black\nproperty Weight : Integer = 300\nproperty Symbols : List = 323\n\n- značka se umisťuje na stranu, kde je méně kresby\n- v případě kolize na obou stranách je značka umístěna doprostred vodního toku\n- musí být umístěn na vodním toku\n ",
        "childern": []
    },
    {
        "caption": "Plavební komora",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/FloodGate",
        "description": "\nproperty Operátory : List = odsun, vypuštění, kresba nadmíru\nproperty Color : Color = blue\nproperty Třída přesnosti : Precision = B\nproperty Weight : Integer = 250\nproperty Minimální velikost : Width = šířka 10m\n\n- musí být umístěn na vodním toku\n- umístění plavebí komory je závislé na směru vodního toku\n   ",
        "childern": []
    },
    {
        "caption": "Brod",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Ford",
        "description": "\nproperty Operátory : List = odsun, vypuštění, úprava tvaru značky\nproperty Color : Color = black\nproperty Weight : Integer = 350\nproperty Třída přesnosti : Precision = C\nproperty Symbols : List = 324 01, 324 02\n\n- pro jednočarý tok je značka 324 01\n- pro dvoučarý tok je značka 324 02\n- musí být umístěn na vodním toku\n ",
        "childern": []
    },
    {
        "caption": "Vodní tok ponorný, občasný",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/LostRiwer",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení, paralelizace\nproperty Color : Color = blue\nproperty Třída přesnosti : Precision = C\nproperty Weight : Integer = 310\nproperty Minimální velikost : Length = 10 m\nproperty Symbols : List = 303, 304\n\n- musí navazovat na vodní tok nebo vodní plochu\n",
        "childern": []
    },
    {
        "caption": "Vodní tok",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Riwer",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení, paralelizace\nproperty Color : Color = blue\nproperty Weight : Integer =\nproperty Minimální velikost : Length = 10 m\nproperty Symbols : List = 302 01, 302 02\n\n- vodní tok užší než 5m má v celém průběhu stejně silnou čáru\n- musí navazovat na vodní tok nebo vodní plochu\n",
        "childern": []
    },
    {
        "caption": "Břehová čára",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Shoreline",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení, paralelizace\nproperty Color : Color = blue\nproperty Weight : Integer = 310\nproperty Symbols : List = 306\n",
        "childern": []
    },
    {
        "caption": "Jez s lávkou",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Sluice",
        "description": "\nproperty Operátory : List = odsun, vypuštění, úprava tvaru značky, slícování\nproperty Color : Color =\nproperty Třída přesnosti : Precision = B\nproperty Weight : Integer = 500\nproperty Minimální velikost : Length = 3 kolmé čárky\nproperty Symbols : List = 316\n\n- délka jezu se upravuje podle šířky vodního toku\n- lávka se s jezem slícuje, polud není dostatečne místa pro samostatné značky jez a lávka\n- příčné čárky hráze jsou vždy orientovány po směru toku\n- musí být umístěn na vodním toku\n",
        "childern": []
    },
    {
        "caption": "Liniové prvky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream",
        "description": "\nproperty Třída přesnosti : Precision = B\n\" href\nproperty Category : Category = line\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Aqueduct",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Dam",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/DamWithComunication",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Ferry",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/FloodGate",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Ford",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/LostRiwer",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Riwer",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Shoreline",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Sluice",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Syphon",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Waterfall",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/ZM10WaterLineWaterDam1",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/ZM10WaterLineWaterDam2"
        ]
    },
    {
        "caption": "Shybka",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Syphon",
        "description": "\nproperty Operátory : List = odsun, vypuštění, úprava tvaru značky\nproperty Color : Color = blue\nproperty Weight : Integer = 245\nproperty Třída přesnosti : Precision = B\nproperty Symbols : List = 326 01, 326 02\n\n- u shybky do šíře 5m je použita jednočará značka\n- u shybky nad 5m šíře je použita dvoučará značky\n- musí být umístěn na vodním toku\n ",
        "childern": []
    },
    {
        "caption": "Vodopád",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/Waterfall",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Symbols : List = 321 01\n\n- na jednočarém vodním toku se umisťuje kolmo\n- příčné čárky hráze jsou vždy orientovány po směru toku\n- musí být umístěn na vodním toku\n",
        "childern": []
    },
    {
        "caption": "Přehradní hráz",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/ZM10WaterLineWaterDam1",
        "description": "\nproperty Operátory : List = odsun,\nproperty Color : Color = black\nproperty Weight : Integer = 150\nproperty Minimální velikost : Other = alespoň dvě kolmé čárky\nproperty Symbols : List = 312 01, 312 02\n",
        "childern": []
    },
    {
        "caption": "Jez",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water/Stream/ZM10WaterLineWaterDam2",
        "description": "\nproperty Operátory : List = odsun,  vypuštění, kresba nadmíru\nproperty Color : Color = black\nproperty Weight : Integer = alespoň dvě kolmé čárky\nproperty Minimální velikost : Length = 3 čárky3 kolmé čárky\nproperty Symbols : List = 313\n\n- na jednočarém vodním toku se umisťuje kolmo,\n- na dvoučarém toku je umístěn mezi břehovkami\n- pokud je menší než tři čárky, je vykreslena nadmíru\n- příčné čárky hráze jsou vždy orientovány po směru toku\n- musí být umístěn na vodním toku\n",
        "childern": []
    },
    {
        "caption": "Vodstvo",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10/Water",
        "description": "\nproperty Třída přesnosti : Precision = B - umělé (manmade), C - přírodní\n\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Water/Area",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Points",
            "/CartographerKnowledge/MapSeries/ZM10/Water/Stream"
        ]
    },
    {
        "caption": "ZM 1:10 000",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM10",
        "description": "\nTato struktura popisuje značkový klíč ZM 10 a jeho pravidla\n\nKaždý prvek nebo třída (skupina) prvků musí být popsána jeho vlastnostmi:\n\n- číslo/čísla prvků podle značkového klíče\n- barva prvku (barva outline)\n- typ prvku (bod/linie/areál)\n- povolené operátory\n- třída přesnosti\n- váha prvku\n- minimální velikost prvku (pouze linie a areály)\n\nPrvky nebo třídy mohou mít i další vlastnosti\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM10/Boders",
            "/CartographerKnowledge/MapSeries/ZM10/BuildingsAndManmadeObjects",
            "/CartographerKnowledge/MapSeries/ZM10/ControlPoints",
            "/CartographerKnowledge/MapSeries/ZM10/Elevation",
            "/CartographerKnowledge/MapSeries/ZM10/Parameters",
            "/CartographerKnowledge/MapSeries/ZM10/Transportation",
            "/CartographerKnowledge/MapSeries/ZM10/Vegetation",
            "/CartographerKnowledge/MapSeries/ZM10/Water"
        ]
    },
    {
        "caption": "Správní budovy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Administrative",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění části, nahrazení značkou, kresba nadmíru\nproperty Weight : Integer = 220\nproperty Minimální velikost : Area = 50 m2\nproperty Symbols : List = 101 12, 101 13, 137 03, 137 04\nproperty Třída přesnosti : Precision = B\n\n- budovy 'menší' než 50m2 jsou `nahrazeny` bodovou značkou\n- při nahrazení značkou se 'značka orientuje podle skutečné polohy budovy'\n- složitější tvary budov mohu být zjednodušeny\n- odsun budovy se provádí pouze při kolizi s železnicí a komunikací\n ",
        "childern": []
    },
    {
        "caption": "Letiště",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Airport",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění, zjednodušení tvaru, kresba nadmíru\nproperty Weight : Integer = 280\nproperty Minimální velikost : Area = 2000 m2\nproperty Symbols : List = 142 01, 142 02\nproperty Třída přesnosti : Precision = B\n",
        "childern": []
    },
    {
        "caption": "Budovy areálové",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols",
        "description": "\n\nproperty Category : Category = area\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Administrative",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Airport",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Buildings",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Cementary",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Greenhouse",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/ParkingLot",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Ruins",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Shed"
        ]
    },
    {
        "caption": "Budovy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Buildings",
        "description": "\nproperty Color : Color = braun\nproperty Operátory : List = odsun, vypuštění části, nahrazení značkou, kresba nadmíru\nproperty Weight : Integer = 250\nproperty Minimální velikost : Area = 50 m2\n\" hrefproperty Symbols : List = 101, 118 02, 119 02, 137 01, 137 02\nproperty Třída přesnosti : Precision = B\n\n- budovy 'menší' než 50m2 jsou `nahrazeny` bodovou značkou\n- při nahrazení značkou se 'značka orientuje podle skutečné polohy budovy'\n- složitější tvary budov mohu být zjednodušeny\n- odsun budovy se provádí pouze při kolizi s železnicí a komunikací\n ",
        "childern": []
    },
    {
        "caption": "Hřbitov",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Cementary",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění, zjednodušení tvaru, vyplnění značkou, kresba nadmíru\nproperty Weight : Integer = 300\nproperty Minimální velikost : Area = 2000 m2\nproperty Symbols : List = 127\nproperty Třída přesnosti : Precision = B\n\n- celý areál je vyplněn značkou v rastru\n- v malých hřbitovech odstraňujeme parkové cesty\n ",
        "childern": []
    },
    {
        "caption": "Skleník",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Greenhouse",
        "description": "\nproperty Color : Color = green\nproperty Operátory : List =  odsun, vypuštění, agregace, zjednodušení tvaru, kresba nadmíru\nproperty Weight : Integer = 350\nproperty Minimální velikost : Area = 1350 m2\nproperty Symbols : List = 132\nproperty Třída přesnosti : Precision = B\n\n- složitější tvary než obdélník se generalizují\n- více úzkých skleníků vedle sebe se sloučí v jeden skleník (větší než 1350m2), který bude umístěn v místě podměrečných objektů a bude vhodně vyjadřovat situaci\n ",
        "childern": []
    },
    {
        "caption": "Parkoviště",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/ParkingLot",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění, zjednodušení tvaru, kresba nadmíru\nproperty Weight : Integer = 350\nproperty Minimální velikost : Area = 2000 m2\nproperty Symbols : List = 138\nproperty Třída přesnosti : Precision = B\n",
        "childern": []
    },
    {
        "caption": "Rozvalina, zřícenina",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Ruins",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění části, zjednodušení ttvaru, kresba nadmíru, vypuštění\nproperty Weight : Integer = 350\nproperty Minimální velikost : Area = 600 m2\nproperty Symbols : List = 103,\nproperty Třída přesnosti : Precision = C\n\n- složitější tvary budov mohu být zjednodušeny\n ",
        "childern": []
    },
    {
        "caption": "Kůlna",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols/Shed",
        "description": "\nproperty Color : Color = braun\nproperty Operátory : List =  odsun, vypuštění, agregace, zjednodušení tvaru, kresba nadmíru\nproperty Weight : Integer = 350\nproperty Minimální velikost : Area = 1350 m2\nproperty Symbols : List = 131\nproperty Třída přesnosti : Precision = B\n\n- složitější tvary než obdélník se generalizují\n- více malých kůlen vedle sebe se sloučí v jednu kůlnu (větší než 1350m2), která bude umístěna v místě podměrečných objektů a bude vhodně vyjadřovat situaci\n ",
        "childern": []
    },
    {
        "caption": "Budovy a jednotlivé objekty",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects",
        "description": " ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/AreaSymbols",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/LineSymbols",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols"
        ]
    },
    {
        "caption": "Doplňková linie / hranice užívání",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/LineSymbols/AuxiliaryLine",
        "description": "\nproperty Color : Color = grey\nproperty Weight : Integer = 800\nproperty Symbols : List = 172\nproperty Třída přesnosti : Precision = C\n\n- ponechávají se tak, jak jsou v ZABAGED\n   ",
        "childern": []
    },
    {
        "caption": "Elektrické vedení",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/LineSymbols/ElectricPowerLine",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, vypuštění,\nproperty Weight : Integer = 200\nproperty Symbols : List = 129\n\n- musí začínat na budově nebo značkou stožáru el. vedení (značka 128)\n- je odsunováno při kolizi s komunikacemi(železnicí ???),\n- při kolizi se značkou příčných čárek terénního stupně je ponechán bez úprav\n- v ostatních případech je přednostně odsunován kolizní prvek\n- musí se zobrazit alespoň dve dlouhé čárky\n ",
        "childern": []
    },
    {
        "caption": "Liniové značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/LineSymbols",
        "description": "\nproperty Category : Category = line\nproperty Třída přesnosti : Precision = B\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/LineSymbols/AuxiliaryLine",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/LineSymbols/ElectricPowerLine",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/LineSymbols/Pipeline",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/LineSymbols/Skijump",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/LineSymbols/Wall"
        ]
    },
    {
        "caption": "Produktovod",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/LineSymbols/Pipeline",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění, kresba nadmíru\nproperty Weight : Integer = 300\nproperty Minimální velikost : Length = 7 mm\nproperty Symbols : List = 134\n\n- úseky kratší než 7mm se prodlužují na tento rozměr\n- na krátkých úsecích musí být zobrazeno alespoň jedno kolečko\n",
        "childern": []
    },
    {
        "caption": "Lyžařský můstek",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/LineSymbols/Skijump",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění, kresba nadmíru\nproperty Weight : Integer = 250\nproperty Symbols : List = 122\n\n- lyžařský můstek se vždy umisťuje otevřeným tvarem po svahu\n ",
        "childern": []
    },
    {
        "caption": "Kamenná zeď",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/LineSymbols/Wall",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění, vypuštění části, slícování, zjednodušení tvaru\nproperty Weight : Integer = 280\nproperty Minimální velikost : Length = 100 m\nproperty Symbols : List = 171 01, 171 02\n\n- minimální vzdálenost od ostatních prvků je 0,3 mm,\n- pokud je vzdálenost menší než 0,3 mm zeď se nalícuje (silnice, železnice hranice užívání budova, parková cesta) v ostatních případech se odsune.\n- v průběhu nahrazuje hranici užívání\n- není-li možné zobrazit značku nahrazuje se pouhou čárou nebo se zeď vypouští\n- při kolizi s mostem nebo s propustkem se kolizní část zdi vypouští\n   ",
        "childern": []
    },
    {
        "caption": "Správní budova",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/AdministrativeBuilding",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, rotace\nproperty Weight : Integer = 220\nproperty Symbols : List = 101 12, 101 13, 137 03, 137 04\n\n- poloha budovy je neměnná, lze ji odsunout v případě kolize se silnicí a železnicí\n- je-li bodvá značka budovy výsledkem kolapsu areálové značky, je orientována podle poměru stran původního areálu\n ",
        "childern": []
    },
    {
        "caption": "Budovy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Building",
        "description": "\nproperty Color : Color = grey\nproperty Operátory : List = odsun, rotace\nproperty Weight : Integer = 250\nproperty Symbols : List = 101, 118 01, 119 01, 137 01, 137 02\n\n- poloha budovy je neměnná, lze ji odsunout v případě kolize se silnicí a železnicí\n- je-li bodvá značka budovy výsledkem kolapsu areálové značky, je orientována podle poměru stran původního areálu\n ",
        "childern": []
    },
    {
        "caption": "Kaple",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Chapel",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 240\nproperty Symbols : List = 106\n\n- je-li značka kaple v kolizi s věží je značka kaple umídtěna na pozici věže a věž vypuštěna\n- je-ji referenční bod značky kaple mimo footprint liniové značky nebo hranice areálu, není s touto značkou v kolizi. V opačném případě je značka (referenční bod značky) odsunut mimo footprint liniové značky nebo značky hranice areálu.\n",
        "childern": []
    },
    {
        "caption": "Komín",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Chimney",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 250\nproperty Symbols : List = 107\n\n- zobrazují se komíny, které výrazně převyšují okolní zástavbu\n- jsou-li komíny v rámci areálu v překrytu, provede se výběr tak, aby zůstal zachován plošný rozsah\n- je-ji referenční bod značky komín mimo footprint liniové značky nebo hranice areálu, není s touto značkou v kolizi. V opačném případě je značka (referenční bod značky) odsunut mimo footprint liniové značky nebo značky hranice areálu.\n",
        "childern": []
    },
    {
        "caption": "Kostel",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Church",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 230\nproperty Symbols : List = 105\n\n- umisťuje se v areálu značky 422 - kostel\n- má-li areálová značka kostel věž, je značka kostela umístěna na její polohu a věž vypuštěna\n- v případě průčelí s dvěma vežemi je značka kostela umístěná na střed průčelí a věže vypuštěny\n- v případě katedrál, vyřešených v rámci ZM 10, se situace ponechává\n- je-ji referenční bod značky kostela mimo footprint liniové značky nebo hranice areálu, není s touto značkou v kolizi. V opačném případě je značka (referenční bod značky) odsunut mimo footprint liniové značky nebo značky hranice areálu.\n ",
        "childern": []
    },
    {
        "caption": "Kříž, sloup kult. významu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Cross",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění,\nproperty Weight : Integer = 250\nproperty Symbols : List = 126\n\n- při velké hustotě může být počet zgeneralizován tak aby byl zachován plošný rozsah\n- při kolizi s kostelem, kaplí nebo pomníkem, pokud nejde odsunout, vypustí se\n- je-ji referenční bod značky věžovitá stavba mimo footprint liniové značky nebo hranice areálu, není s touto značkou v kolizi. V opačném případě je značka (referenční bod značky) odsunut mimo footprint liniové značky nebo značky hranice areálu.\n",
        "childern": []
    },
    {
        "caption": "Stožár el. vedení",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/ElectricPowerPole",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění, umístění značky\nproperty Weight : Integer = 200\nproperty Symbols : List = 128\n\n- značka je vždy unístěna na elektrickém vedení 129\n- značka se může dotýkat všech liniových prvků a hranic areálů tečně.\n- značka není v kolizi s příčnými čárkami terénného stupně\n- značka se odsouvá když zasahuje do vodní plochy nebo do komunikace, v ostatních případech se přednostně odsouvá kolizní prvek\n- při odsunu značky musíme odsunout i elektrické vedení (značka 129)\n   ",
        "childern": []
    },
    {
        "caption": "Čerpací stanice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/FillingStation",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 250\nproperty Symbols : List = 136\n\n- v areálu se značka umisťuje na budovu, pokud je budova u hranice areálu, umístí se značka do středu areálu\n- je-li v areálu více budov umístí se značka do středu areálu\n- je-ji referenční bod značky čerpací stanice mimo footprint liniové značky nebo hranice areálu, není s touto značkou v kolizi. V opačném případě je značka (referenční bod značky) odsunut mimo footprint liniové značky nebo značky hranice areálu.\n",
        "childern": []
    },
    {
        "caption": "Přístaviště",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Marina",
        "description": "\nproperty Color : Color = blue\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 250\nproperty Symbols : List = 139\n\n- značka je umístěna ve vodní ploše\n",
        "childern": []
    },
    {
        "caption": "Mohyla, pomník",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Monument",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění,\nproperty Weight : Integer = 250\nproperty Symbols : List = 125\n\n- v kolizi s kostelem nebo kaplí, pokud nejde odsunout, se vypustí\n- v kolizi s křížem, pokud nejde odsunout, vypustí se kříž\n- při velké hustotě může být počet zgeneralizován tak aby byl zachován plošný rozsah\n- je-ji referenční bod značky věžovitá stavba mimo footprint liniové značky nebo hranice areálu, není s touto značkou v kolizi. V opačném případě je značka (referenční bod značky) odsunut mimo footprint liniové značky nebo značky hranice areálu.\n",
        "childern": []
    },
    {
        "caption": "Parkoviště",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/ParkingLot",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 350\nproperty Symbols : List = 138\n\n- v areálu se značka umisťuje  do středu\n- je-ji referenční bod značky parkoviště mimo footprint liniové značky nebo hranice areálu, není s touto značkou v kolizi. V opačném případě je značka (referenční bod značky) odsunut mimo footprint liniové značky nebo značky hranice areálu.\n",
        "childern": []
    },
    {
        "caption": "Bodové značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/PointSymbols",
        "description": "\n\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 270\nproperty Symbols : List =  110, 111, 112 01, 112 02, 116, 117, 124, 147, 148, 149\n\n- je-ji referenční bod bodové značky mimo footprint liniové značky nebo hranice areálu, není s touto značkou v kolizi. V opačném případě je značka (referenční bod značky) odsunut mimo footprint liniové značky nebo značky hranice areálu.\n ",
        "childern": []
    },
    {
        "caption": "Bodové značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols",
        "description": "\nproperty Category : Category = point\nproperty Třída přesnosti : Precision = B\n\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/AdministrativeBuilding",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Building",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Chapel",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Chimney",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Church",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Cross",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/ElectricPowerPole",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/FillingStation",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Marina",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Monument",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/ParkingLot",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/PointSymbols",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Tower",
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Transmitter"
        ]
    },
    {
        "caption": "Věžovitá stavba, věž na budově",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Tower",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 250\nproperty Symbols : List = 120\n\n- v areálu značky kostel (422) může být nahrazena značkou kostela (405)\n- je-li v areálu více věží může být počet zgeneralizován tak aby byl zachován plošný rozsah\n- je-ji referenční bod značky věžovitá stavba mimo footprint liniové značky nebo hranice areálu, není s touto značkou v kolizi. V opačném případě je značka (referenční bod značky) odsunut mimo footprint liniové značky nebo značky hranice areálu.\n",
        "childern": []
    },
    {
        "caption": "Vysílač",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects/PointSymbols/Transmitter",
        "description": "\nproperty Color : Color = black\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 270\nproperty Symbols : List = 150, 151\n\n- značka se umístí na budovu v areálu, není-li tam budova tak doprostřed areálu.\n- je-li v areálu i bodový vysílač, zůstane pouze značka bodového vysílače\n- je-ji referenční bod bodové značky mimo footprint liniové značky nebo hranice areálu, není s touto značkou v kolizi. V opačném případě je značka (referenční bod značky) odsunut mimo footprint liniové značky nebo značky hranice areálu.\n\n",
        "childern": []
    },
    {
        "caption": "Administrativní hranice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Borders/ZM25.Borders.Admin",
        "description": "\nproperty Operátory : List = odsun části hranice\nproperty Color : Color = violet\nproperty Weight : Integer = 100\nproperty Category : Category = line\nproperty Symbols : List = 503, 504, 505, 506, 507, 512\n\n- překrývají-li se správní hranice je zbrazována vždy ta vyššího správního celku\n- hranice, které nesledují žádný liniový prvek, ponecháváme bezezměny\n- administrativní hranice nesmí procházet budovou\n- administrativní hranice může být upravována pouze v případě, že je upravován vodicí prvek (pozemní komunikace nebo vodní tok)\n- zjednodušení hranice se provádí pouze vypuštěním lomových bodů linie\n ",
        "childern": []
    },
    {
        "caption": "Hranice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Borders",
        "description": "\n\nproperty Třída přesnosti : Precision = B\n\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Borders/ZM25.Borders.Admin",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Borders/ZM25.Borders.NarurPoint",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Borders/ZM25.Borders.Natural",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Borders/ZM25.Borders.State",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Borders/ZM25.Borders.Vegetation"
        ]
    },
    {
        "caption": "Přírodní rezervace - bodová značka",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Borders/ZM25.Borders.NarurPoint",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Color : Color = green\nproperty Weight : Integer = 400\nproperty Category : Category = point\nproperty Symbols : List = 522 01\n\n- pro území plošně malé, kde by značka nebyla čitelná, se použije bodová značka\n ",
        "childern": []
    },
    {
        "caption": "Hranice přírodních rezervací",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Borders/ZM25.Borders.Natural",
        "description": "\nproperty Operátory : List = odsun, paralelizace, vypuštění\nproperty Color : Color = green\nproperty Weight : Integer = 400\nproperty Category : Category = area\nproperty Minimální velikost : Area = 600 m2\nproperty Symbols : List = 522 01\n\n- pokud hranice chráněného území probíhá  po komunikaci nebo správní hranici posune ce hranice chráněného území směrem dovnitř a s vodicím prvkem se paralelizuje\n- pro území plošně malé, kde by značka nebyla čitelná, se použije bodová značka\n ",
        "childern": []
    },
    {
        "caption": "Státní hranice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Borders/ZM25.Borders.State",
        "description": "\nproperty Operátory : List = odsun části hranice\nproperty Color : Color = violet\nproperty Weight : Integer = 10\nproperty Category : Category = line\nproperty Symbols : List = 501\n\n- překrývají-li se hranice je zbrazována vždy státní hranice\n- státní hranice smí být upravována pouze v případě, že je upravován vodicí prvek (pozemní komunikace nebo vodní tok)\n ",
        "childern": []
    },
    {
        "caption": "Hranice prostu a užívání půdy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Borders/ZM25.Borders.Vegetation",
        "description": "\nproperty Operátory : List = odsun, paralelizace,  vypuštění části\nproperty Color : Color = black\nproperty Weight : Integer = 700\nproperty Category : Category = line\nproperty Symbols : List = 521\n\n- není v kolizi s prvky 171 01, 171 02, 625, tyto prvky ji nahrazují a hranice užívámí se v daném úseku přeruší.\n ",
        "childern": []
    },
    {
        "caption": "Komunikace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication",
        "description": "\nproperty Color : Color = black\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Point"
        ]
    },
    {
        "caption": "Most",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Bridge",
        "description": "\nproperty Operátory : List = odsun, vypuštění, maskování, změna tvaru značky, nahrazení sdruženou značkou\nproperty Weight : Integer = 160\nproperty Minimální velikost : Length = minimálně 1mm rovného úseku\nproperty Symbols : List = 216 01, 216 02, 281 01, 281 02, 281 03, 281 04, 281 05, 281 06, 281 07, 281 08, 282, 283\n\n- šíře značky se upravuje podle druhu komunikace, v sídlech podle šíře intravilánu\n- lemovky mostů se posouvaví podle úhlu přemostěného prvku\n- souběžné mosty na stejných komunikacích je možno sdružit do jedné značky\n- nelze-li spojit mosty na různých komunikacích do jednoho lze jeden z nich změnit na jednostranný (značka 283)\n",
        "childern": []
    },
    {
        "caption": "Liniové komunikace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line",
        "description": "\nproperty Třída přesnosti : Precision = B\nproperty Category : Category = line\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Bridge",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Culvert",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Delivery",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.FootBridge",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Funicular",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Lonnin",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.ParkPathway",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Pathway",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Railway",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Ramp",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Roads",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Roads3",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.RoadTunnel",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Street",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Tunnel"
        ]
    },
    {
        "caption": "Propustek, podchod",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Culvert",
        "description": "\nproperty Operátory : List = odsun, vypuštění, změna tvaru značky, rotace značky\nproperty Weight : Integer = 500\nproperty Symbols : List = 285\n\n- propustky jsou zobrazovány pouze na silnicích a železnicích mimo intravilán (na cestách, hrázích a ostatích prvcích jsou vypuštěny)\n- v intravilánu se propustky nevykreslují a jsou pouze masky do vod\n- při nedostatku místa je možné jednu stranu propustku vypustit\n- šíře značky se upravuje podle šířky komunikace nebo podle šíře kolejiště\n- značka propustku rotuje podle vodního toku\n",
        "childern": []
    },
    {
        "caption": "Vlečky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Delivery",
        "description": "\nproperty Operátory : List = odsun, vypuštění, paralelizace, nahrazení sdruženou značkou, zjednodušení průběhu,\nproperty Weight : Integer = 170\nproperty Minimální velikost : Length = 100 m\nproperty Symbols : List = 206 01, 206 02\n\n- pokud je vlečka v areálu prům. podniku, kolejiště a pod. v kolizi s kůlnou nebo budovou (osově,) budova maskuje vlečku\n ",
        "childern": []
    },
    {
        "caption": "Lávka, nadchod",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.FootBridge",
        "description": "\nproperty Operátory : List = odsun, vypuštění, nahrazení sdruženou značkou\nproperty Weight : Integer = 500\nproperty Minimální velikost : Length = minimálně 1mm\nproperty Symbols : List = 284\n\n- lávky a nadchod na parkové cestě nebo ulici je maskuje na světlost 0,2 mm\n",
        "childern": []
    },
    {
        "caption": "Lanovky, tramvaje metro",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Funicular",
        "description": "\nproperty Operátory : List = odsun, vypuštění, paralelizace, zjednodušení průběhu,\nproperty Weight : Integer = 200\nproperty Minimální velikost : Length = 100 m\nproperty Symbols : List = 222 01, 222 02, 223, 225, 226, 227\n",
        "childern": []
    },
    {
        "caption": "Polní cesta",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Lonnin",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení průběhu,\nproperty Weight : Integer = 200\nproperty Symbols : List = 247\n\n- v areálu čerpacích stanic a garáží se vypouští\n- v areálech ZP, PP, skladech, zámcích, nemocnic a sport. areálech je prováděn výběr podle zaplnění mapy.\n",
        "childern": []
    },
    {
        "caption": "Pěšina, parková cesta",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.ParkPathway",
        "description": "\nproperty Operátory : List = odsun, zjednodušení průběhu, vypuštění\nproperty Třída přesnosti : Precision = C\nproperty Weight : Integer = 500\nproperty Symbols : List = 249 01, 249 02\n\n- Pěšiny (248 01) se zobrazují výběrem\n- Parková cesta (248 02) uvnitř areálu je ukončena před hranicí užívání (areál musí zůstat uzavřený)\n- v malých hřbitovech jsou parkové cesty vypuštěny\n- ve velkých hřbitovech jsou ponechány hlavní cesty\n- dílky kratší než 0,7 mm se vypustí\n- pěšiny v parcích širší než 5m se vykreslují dvoučaře\n",
        "childern": []
    },
    {
        "caption": "Polní cesta  neudržovaná",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Pathway",
        "description": "\nproperty Operátory : List = odsun, zjednodušení průběhu, vypuštění\nproperty Třída přesnosti : Precision = C\nproperty Weight : Integer = 500\nproperty Minimální velikost : Length = 0,7 mm\nproperty Symbols : List = 248\n\n- dílky kratší než 0,7 mm se vypustí\n- zobrazují se výběrem\n",
        "childern": []
    },
    {
        "caption": "Železnice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Railway",
        "description": "\nproperty Operátory : List = odsun, vypuštění, paralelizace, nahrazení sdruženou značkou, zjednodušení průběhu,\nproperty Weight : Integer = 100\nproperty Minimální velikost : Length = 100 m\nproperty Symbols : List = 201, 202, 203, 204, 205\n\n- neprovozované železnice se vyjadřují stejnou značkou jako provozované železnice\n",
        "childern": []
    },
    {
        "caption": "Nájezd, větev křižovatky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Ramp",
        "description": "\nproperty Operátory : List = odsun, zjednodušení průběhu, vypuštění, kresba nadmíru\nproperty Weight : Integer = 130\nproperty Symbols : List = 254 01, 254 02, 254 03, 254 04, 254 05\n",
        "childern": []
    },
    {
        "caption": "Dálnice, silnice I a II třídy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Roads",
        "description": "\nproperty Operátory : List = odsun, zjednodušení průběhu, změna značky\nproperty Weight : Integer = 130\nproperty Symbols : List = 240, 241, 242, 243\n\n- průtahy přes sídla se zobrazují zvláštní značkou 02\n- úseky ve stavbě se zobrazují přerušovaně bez výplně (značkou 246)\n",
        "childern": []
    },
    {
        "caption": "Silnice III třídy a neevidované",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Roads3",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení průběhu, změna značky\nproperty Weight : Integer = 150\nproperty Symbols : List = 244, 245\n\n- sídla zobrazená hranicí užívání maskují silnice III. třídy a neevidované silnice\n- úseky ve stavbě se zobrazují přerušovaně (značkou 246)\n",
        "childern": []
    },
    {
        "caption": "Tunel silniční",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.RoadTunnel",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení průběhu, úprava tvaru značky\nproperty Weight : Integer = 140\nproperty Symbols : List = 258 01, 258 02, 258 03, 258 04, 258 05\n\n- šíře značky se upravuje podle druhu železnice\n- tunel maskuje procházející komunikaci\n",
        "childern": []
    },
    {
        "caption": "Ulice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Street",
        "description": "\nproperty Operátory : List = odsun, zjednodušení průběhu, změna značky\nproperty Weight : Integer = 160\nproperty Symbols : List = 250 01, 250 02, 250 05, 250 06\n\n- v sídlech jsou tvořeny hranicí užívání (250 01)\n- v sídlech v místě napojení na silnici je ulice otevřena (odmaskována) (250 01)\n- při vymezování hranice ulice v sídlech se zachovává její minimální šířka 4 m\n- v sídlech nesjízdnost je vyjádřena kolmými čárkami (250 02) mimo sídlo značkou 250 06\n",
        "childern": []
    },
    {
        "caption": "Tunel železniční",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Line/ZM25.Communication.Line.Tunnel",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení průběhu, úprava tvaru značky\nproperty Weight : Integer = 110\nproperty Symbols : List = 215 01, 215 02\n\n- šíře značky se upravuje podle druhu železnice\n- tunel maskuje procházející komunikaci\n",
        "childern": []
    },
    {
        "caption": "Bodové značky (komunikace)",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Point",
        "description": "\n\nproperty Category : Category = Point\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Point/ZM25.Communication.Point.Culvert",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Point/ZM25.Communication.Point.FootBridge",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Point/ZM25.Communication.Point.MetroStation",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Point/ZM25.Communication.Point.RailwayStation",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Point/ZM25.Communication.Point.RailwayStop"
        ]
    },
    {
        "caption": "Propustek",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Point/ZM25.Communication.Point.Culvert",
        "description": "\nproperty Operátory : List = odsun, vypuštění, změna tvaru značky, rotace značky\nproperty Třída přesnosti : Precision = B\nproperty Weight : Integer = 500\nproperty Symbols : List = 285 02\n\n- zobrazují se propustky pouze na silnicích a železnicích\n- propustky na cestách a hrázích se vypouští\n- propustky v intravilánech se vypouští\n- je-li footprint v kolizi s vodní plochou vypouští se\n- při nedostatku místa je možné jednu stranu propustku vypustit\n- šíře značky se upravuje podle šířky komunikace nebo podle šíře kolejiště\n- značka propustku rotuje podle vodního toku\n- výškový bod maskuje značku propustku\n- bodovou značkou jsou zobrazeny propustky kratší než 10 m\n",
        "childern": []
    },
    {
        "caption": "Lávka, nadchod",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Point/ZM25.Communication.Point.FootBridge",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Třída přesnosti : Precision = B\nproperty Weight : Integer = 500\nproperty Symbols : List = 284 02\n\n- pokud je lávka na parkové cestě nebo komunikaci maskuje ji se světlostí 0,2 mm\n",
        "childern": []
    },
    {
        "caption": "Zastávka metra",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Point/ZM25.Communication.Point.MetroStation",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Třída přesnosti : Precision = E\nproperty Weight : Integer = 140\nproperty Symbols : List = 228\n\n- značka je umístěna v ose metra\n- jsou-li výstupy dva, značka se umístí 2x v místě výstupů\n",
        "childern": []
    },
    {
        "caption": "Železniční stanice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Point/ZM25.Communication.Point.RailwayStation",
        "description": "\nproperty Operátory : List = odsun, vypuštění, rotace\nproperty Třída přesnosti : Precision = C\nproperty Weight : Integer = 100\nproperty Symbols : List = 219\n\n- značka je umístěna osově na železnici  před budovu\n- značka je otočena směrem k budově železniční stanice\n ",
        "childern": []
    },
    {
        "caption": "Železniční zastávka",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication/ZM25.Communication.Point/ZM25.Communication.Point.RailwayStop",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Třída přesnosti : Precision = B\nproperty Weight : Integer = 220\nproperty Symbols : List = 220\n\n- značka je umístěna osově na železnici před budovu nebo přístřešek\n ",
        "childern": []
    },
    {
        "caption": "ZM 1:25 000",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25",
        "description": "\nTato struktura popisuje značkový klíč ZM 25 a jeho pravidla\n\nKaždý prvek nebo třída (skupina) prvků musí být popsána jeho vlastnostmi:\n\n- číslo/čísla prvků podle značkového klíče\n- barva prvku (barva outline)\n- typ prvku (bod/linie/areál)\n- povolené operátory\n- třída přesnosti\n- váha prvku\n- minimální velikost prvku (pouze linie a areály)\n\nPrvky nebo třídy mohou mít i další vlastnosti\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/BuildingsAndManmadeObjects",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Borders",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Communication",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water"
        ]
    },
    {
        "caption": "Orná půda, ostatní plocha",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Arable",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 600 m2\nproperty Weight : Integer = 790\nproperty Symbols : List = 401 01, 401 02\nproperty Color : Color = black\n\n- minimální šířka je 10 m\n ",
        "childern": []
    },
    {
        "caption": "Lesní půda s kosodřevinou",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Busch",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 2000 m2\nproperty Weight : Integer = 750\nproperty Symbols : List = 404 01\nproperty Color : Color = grey\n\n- minimální šířka je 10 m\n- druh využití půdy je vyznačen značkou, pokud není dostatek místa může být značka přišipkována\n- u velmi malých areálů, kde v okolí převládá stanovená plodina je možné značku vynechat\n ",
        "childern": []
    },
    {
        "caption": "Porost a využití půdy - plochy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area",
        "description": "\nproperty Category : Category = area\n\n- Hranicí užívání může být také komunikace, vodstvo, budovy, zdi apod.\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Arable",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Busch",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Grass",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Industry",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Moorland",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Query",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Sign",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Utilities",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.UtilitiesSign",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.WeekendHouse",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Woods"
        ]
    },
    {
        "caption": "Louka, pastvina",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Grass",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 2000m2\nproperty Weight : Integer = 780\nproperty Symbols : List = 403\nproperty Color : Color = black\n\n- minimální šířka je 10 m\n ",
        "childern": []
    },
    {
        "caption": "Průmyslové objekty",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Industry",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 600 m2\nproperty Weight : Integer = 420\nproperty Symbols : List = 421 01, 421 02, 421 03\nproperty Color : Color = grey\n\n- minimální šířka je 10 m\n- druh využití areálu je vyznačen barevnou výplní areálu\n ",
        "childern": []
    },
    {
        "caption": "Využití půdy - rašeliniště",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Moorland",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 600 m2\nproperty Weight : Integer = 750\nproperty Symbols : List = 415, 116\nproperty Color : Color = blue\n\n- areál rašeliniště se zobrazuje barevnou výplní (rastrem)\n- Značka bažin a rašelinišť se uvolňuje přes terénní stupně\n- Značka bažin a rašelinišť se uvolňuje přes vodní toky na vzdálenost 0,5mm\n ",
        "childern": []
    },
    {
        "caption": "Lomy, haldy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Query",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 600 m2\nproperty Weight : Integer = 750\nproperty Symbols : List = 423 01, 423 02\nproperty Color : Color = grey\n\n- minimální šířka je 10 m\n ",
        "childern": []
    },
    {
        "caption": "Chmelnice , vinice, zahrady, park",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Sign",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 600 m2\nproperty Weight : Integer = 730\nproperty Symbols : List = 402 01, 402 02, 402 03 402 04\n\nproperty Color : Color = black\n\n- minimální šířka je 10 m\n- druh využití půdy je vyznačen značkou, pokud není dostatek místa může být značka přišipkována\n- u velmi malých areálů, kde v okolí převládá stanovená plodina je možné značku vynechat\n- značku je možné vynechat u malých ploch parků a zahrad v zástavbě\n ",
        "childern": []
    },
    {
        "caption": "Účelové areály",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Utilities",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 600 m2\nproperty Weight : Integer = 730\nproperty Symbols : List = 420 06, 420 36, 420 16, 420 35, 420 04, 420 12, 420 18, 420 19, 420 31, 420 01, 420 41, 420 02, 420 07, 420 40, 420 10, 420 34, 420 15, 420 22, 420 23, 420 42, 420 43, 420 44, 420 45, 420 24, 420 25, 420 26, 420 38, 420 39, 420 30, 420 32,420 33\nproperty Color : Color = grey\n\n- minimální šířka je 10 m\n- druh využití půdy je vyznačen barevnou výplní areálu\n ",
        "childern": []
    },
    {
        "caption": "Účelové areály se značkou",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.UtilitiesSign",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 600 m2\nproperty Weight : Integer = 730\nproperty Symbols : List = 420 03, 420 05, 420 08, 420 11, 420 14, 420 17, 420 27, 420 28\nproperty Color : Color = black\n\n- minimální šířka je 10 m\n- druh využití půdy je vyznačen barevnou výplní areálu a značkou umístěnou uvnitř areálu, pokud není dostatek místa může být značka přišipkován\n ",
        "childern": []
    },
    {
        "caption": "Chatová oblast",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.WeekendHouse",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 600 m2\nproperty Weight : Integer = 730\nproperty Symbols : List = 420 09\nproperty Color : Color = black\n\n- druh využití půdy je vyznačen rastrovou výplní areálu\n ",
        "childern": []
    },
    {
        "caption": "Lesní půda",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area/ZM25.Vegetation.Area.Woods",
        "description": "\nproperty Operátory : List = odsun, odsun části hranice, vypuštění, úprava tvaru\nproperty Minimální velikost : Area = 2000 m2\nproperty Weight : Integer = 750\nproperty Symbols : List = 404 02, 404 03\nproperty Color : Color = grey\n\n- minimální šířka je 10 m\n ",
        "childern": []
    },
    {
        "caption": "Porost a využití půdy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation",
        "description": "\nproperty Třída přesnosti : Precision = C, B\n\n- základní hodnota třídy přesnosti je C\n- pokud hranice užívání je totožná s jiným prvkem (osa komunikace, hrana budovy apod.) přejímá prvek jeho třídu přesnosti\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Area",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Trees"
        ]
    },
    {
        "caption": "Osamělý stron, lesík",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Vegetation/ZM25.Vegetation.Trees",
        "description": "\nproperty Category : Category = point\nproperty Třída přesnosti : Precision = C\nproperty Operátory : List = odsun, vypuštění\nproperty Color : Color = black\nproperty Weight : Integer = 750\nproperty Symbols : List = 410, 411\n\n- vzdálenost od lesní půdy minimálně 100m\n- nezobrazuje se v lesní půdě (404 02), křovinatém porostu (404 03), kosodřevině(404 01) a v okrasné zahradě (402 02)\n ",
        "childern": []
    },
    {
        "caption": "Vodní plochy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Area",
        "description": "\nproperty Třída přesnosti : Precision = umělé B, přírodní C,\n\" hrefproperty Category : Category = area\n ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Area/ZM25.Water.Area.Vat",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Area/ZM25.Water.Area.Water"
        ]
    },
    {
        "caption": "Nádrž, odkaliště",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Area/ZM25.Water.Area.Vat",
        "description": "\nproperty Operátory : List = odsun, vypuštění, úprava tvaru, ortogonalizace\nproperty Color : Color = black, blue\nproperty Weight : Integer = 370\nproperty Minimální velikost : Area = 70 m2\nproperty Symbols : List = 334 01, 334 02\nproperty Třída přesnosti : Precision = B, C\n\n- plochy blízké obdélníku se ortogonalizují\n- pokud je v areálu definována vodní plocha břehovkou, je výplň bílá a je změněna barva břehovky na černou 334 02\n- pokud není v areaálu definována vodní plocha břehovkou, je výplň modrá 334 01\n ",
        "childern": []
    },
    {
        "caption": "Vodní plocha",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Area/ZM25.Water.Area.Water",
        "description": "\nproperty Operátory : List = odsun, odsun části, vypuštění\nproperty Color : Color = blue\nproperty Weight : Integer = 350\nproperty Minimální velikost : Area = 70 m2\nproperty Třída přesnosti : Precision = B, C\nproperty Symbols : List = 333\n\n- hranice vodní plochy je vždy vymezena břehovou čárou (306)\n- ostrov se ohraničuje jedině břehovou čárou\n\n ",
        "childern": []
    },
    {
        "caption": "Vodstvo",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water",
        "description": " ",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Area",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Points"
        ]
    },
    {
        "caption": "Akvadukt",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Aqueduct",
        "description": "\nproperty Operátory : List = odsun, vypuštění, úprava tvaru značky\nproperty Color : Color = black\nproperty Weight : Integer = 245\nproperty Minimální velikost : Length = 5m\nproperty Symbols : List = 325 01, 325 02\n\n- šířka akvaduktu se upravuje podle šířky vodního toku\n- pro šířku do 5 m je značka 325 01\n- pro šířku nad 5 m je značka 325 02\n ",
        "childern": []
    },
    {
        "caption": "Liniové prvky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line",
        "description": "\nproperty Třída přesnosti : Precision = B\nproperty Category : Category = line\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Aqueduct",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Dam",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Dam2",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Dam3",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.DamWithComunication",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Floodgate",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Riwer",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.RiwerTemporary",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.RiwerUntergroung",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.ShoreLine",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Syphon",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.WaterFall",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.WaterFerry",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.WaterFord",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.WaterSluice"
        ]
    },
    {
        "caption": "Ochranná hráz",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Dam",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení, paralelizace\nproperty Color : Color = black\nproperty Weight : Integer = 280\nproperty Minimální velikost : Length = 2mm\nproperty Symbols : List = 311 01, 311 02\n\n- šíře ochranné hráze do 10m - značka 311 01\n- šíře ochranné hráze více než 10m - značka 311 02\n- příčné čárky hráze mohou být zkráceny, vymaskovány nebo vypuštěny, nesmí však být narušena linka (horní hrana)\n- jde-li po hrázi komunikace ponechává se ofset 0,2 mm\n",
        "childern": []
    },
    {
        "caption": "Přehradní hráz",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Dam2",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Color : Color = black\nproperty Weight : Integer = 280\nproperty Minimální velikost : Other = 2 kolmé čárky\nproperty Symbols : List = 312 01, 312 02\n\n- kolmé čárky jsou vždy po směru vodního toku\n",
        "childern": []
    },
    {
        "caption": "Jez",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Dam3",
        "description": "\nproperty Operátory : List = odsun,  vypuštění, kresba nadmíru, nahrazení sdruženou značkou\nproperty Color : Color = black\nproperty Weight : Integer = 330\nproperty Minimální velikost : Other = 2 kolmé čárky\nproperty Symbols : List = 313\n\n- kolmé čárky jsou vždy po směru vodního toku\n- na jednočarém vodním toku se umisťuje kolmo,\n- na dvoučarém toku je umístěn mezi břehovkami\n- pokud je na jednočarém vodním toku menší než tři čárky, je vykreslena nadmíru se třemi kolmými čárkami\n",
        "childern": []
    },
    {
        "caption": "Přehradní hráz s komunikací",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.DamWithComunication",
        "description": "\nproperty Operátory : List = odsun,  vypuštění, kresba nadmíru\nproperty Color : Color = black\nproperty Weight : Integer = 150\nproperty Minimální velikost : Other = 2 čárky\nproperty Symbols : List = 315 01, 315 02, 315 03, 315 04, 315 05\n\n- kolmé čárky jsou vždy po směru vodního toku\n- na dvoučarém toku je umístěn mezi břehovkami\n- přehradní hráz s komunikací maskuje most na komunikaci\n- šíře značky se upravuje podle šíře komunikace\n",
        "childern": []
    },
    {
        "caption": "Plavební komora",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Floodgate",
        "description": "\nproperty Operátory : List = odsun, vypuštění, kresba nadmíru\nproperty Color : Color = black\nproperty Weight : Integer = 250\nproperty Symbols : List = 322\n\n- je vždy umístěna hrotem proti směru vodního toku\n   ",
        "childern": []
    },
    {
        "caption": "Vodní tok",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Riwer",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení, paralelizace\nproperty Color : Color = blue\nproperty Třída přesnosti : Precision = C\nproperty Weight : Integer =310\nproperty Minimální velikost : Length = 10 m\nproperty Symbols : List = 302 01, 302 02\n\n- vodní tok užší než 5m má v celém průběhu stejně silnou čáru\n- začátek vodního toku může být nasnepován na zdroj podzemních vod v okruhu 3 mm od vodního zdroje\n- křížení se železnicí a silnicí musí být ošetřeno značkou propustku\n- minimální vzdálenost mezi dvěma přítoky je minimálně 2 m\n- Třída přesnosti : Precision = B - umělá koryta\n- Třída přesnosti : Precision = C - přirozená koryty\n- Třída přesnosti : Precision = E - vodní toky přes močály a bažiny\n",
        "childern": []
    },
    {
        "caption": "Vodní tok občasný",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.RiwerTemporary",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení, paralelizace\nproperty Color : Color = blue\nproperty Třída přesnosti : Precision = D\nproperty Weight : Integer = 400\nproperty Minimální velikost : Length = 30m\nproperty Symbols : List = 304\n",
        "childern": []
    },
    {
        "caption": "Vodní tok ponorný",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.RiwerUntergroung",
        "description": "\nproperty Operátory : List = odsun, vypuštění, zjednodušení\nproperty Color : Color = blue\nproperty Třída přesnosti : Precision = E\nproperty Weight : Integer = 390\nproperty Minimální velikost : Length = 10m\nproperty Symbols : List = 303\n",
        "childern": []
    },
    {
        "caption": "Břehová čára",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.ShoreLine",
        "description": "\nproperty Operátory : List = odsun, zjednodušení, paralelizace\nproperty Color : Color = blue\nproperty Weight : Integer =310\nproperty Symbols : List = 306\n\n- Třída přesnosti : Precision = B - zpevněné břehy a nábřeží\n",
        "childern": []
    },
    {
        "caption": "Shybka",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.Syphon",
        "description": "\nproperty Operátory : List = odsun, vypuštění, úprava tvaru značky\nproperty Color : Color = blue\nproperty Weight : Integer = 245\nproperty Minimální velikost : Length = 5m\nproperty Symbols : List = 326 01, 326 02\n\n- šířka značky se upravuje podle vodního toku\n- u shybky do šíře 5m je použita jednočará značka\n- u shybky nad 5m šíře je použita dvoučará značky\n ",
        "childern": []
    },
    {
        "caption": "Vodopád",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.WaterFall",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Třída přesnosti : Precision = C\nproperty Color : Color = blue\nproperty Weight : Integer = 330\nproperty Minimální velikost : Length = 5m\nproperty Symbols : List = 321 02\n\n- na jednočarém vodním toku se umisťuje kolmo\n",
        "childern": []
    },
    {
        "caption": "Přívoz",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.WaterFerry",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Color : Color = black\nproperty Weight : Integer = 300\nproperty Symbols : List = 323\n\n- značka se umisťuje na stranu, kde je méně kresby\n- v případě kolize na obou stranách je značka umístěna doprostřed vodního toku\n ",
        "childern": []
    },
    {
        "caption": "Brod",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.WaterFord",
        "description": "\nproperty Operátory : List = odsun, vypuštění, úprava tvaru značky\nproperty Color : Color = black\nproperty Weight : Integer = 350\nproperty Minimální velikost : Length = 5m\nproperty Symbols : List = 324 01, 324 02\n\n- pro jednočarou komunikaci tok je značka 324 01\n- pro dvoučarou komunikaci tok je značka 324 02\n- šířka značky se upravuje podle šíře komunikace\n ",
        "childern": []
    },
    {
        "caption": "Jez s lávkou",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Line/ZM25.Water.Line.WaterSluice",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Color : Color = black\nproperty Weight : Integer = 500\nproperty Minimální velikost : Other = 2 čárky\nproperty Symbols : List = 316\n\n- jde o sdruženou značku jezu a lávky,\n- pokud je lávka součástí jezu jsou nahrazeny sdruřenou značkou\n- kolmé čárky jsou vždy po směru vodního toku\n- délka jezu se upravuje podle šířky vodního toku\n",
        "childern": []
    },
    {
        "caption": "Bodové prvky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Points",
        "description": "\nproperty Třída přesnosti : Precision = B\nproperty Color : Color = blue\nproperty Category : Category = points\n",
        "childern": [
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Points/ZM25.Water.Points.Points",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Points/ZM25.Water.Points.Reservoir",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Points/ZM25.Water.Points.Tower",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Points/ZM25.Water.Points.WaterFall",
            "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Points/ZM25.Water.Points.Well"
        ]
    },
    {
        "caption": "Zřídlo, kašna",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Points/ZM25.Water.Points.Points",
        "description": "\nproperty Třída přesnosti : Precision = C\nproperty Operátory : List = odsun, vypuštění\nproperty Weight : Integer = 260\nproperty Symbols : List = 327,\n",
        "childern": []
    },
    {
        "caption": "Zemní vodojem",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Points/ZM25.Water.Points.Reservoir",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Symbols : List = 336\nproperty Weight : Integer = 320\n\n- v areálu vodojemu se značka umístí na budovu pokud tam budova není umístí se značka vhodně do prostoru\n",
        "childern": []
    },
    {
        "caption": "Věžový vodojem",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Points/ZM25.Water.Points.Tower",
        "description": "\nproperty Třída přesnosti : Precision = C\nproperty Operátory : List = odsun, vypuštění\nproperty Symbols : List = 335\nproperty Weight : Integer = 260\n",
        "childern": []
    },
    {
        "caption": "Vodopád",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Points/ZM25.Water.Points.WaterFall",
        "description": "\nproperty Třída přesnosti : Precision = C\nproperty Operátory : List = odsun, vypuštění, rotace značky\nproperty Weight : Integer = 310\nproperty Symbols : List = 321 01\n\n- na jednočarém vodním toku se umisťuje kolmo\n",
        "childern": []
    },
    {
        "caption": "Pramen, studánka",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographerKnowledge/MapSeries/ZM25/ZM25.Water/ZM25.Water.Points/ZM25.Water.Points.Well",
        "description": "\nproperty Operátory : List = odsun, vypuštění\nproperty Symbols : List = 301\n\n- pokud v okolí pramene (3 mm v měřítku mapy) začíná vodní tok, protáhneme jej k značce\n",
        "childern": []
    },
    {
        "caption": "Kartografické reprezentace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographicRepresentations",
        "description": "\nZjednodušené kartografické reprezentace v souladu s potřebami jednotlivých generalizačních strategií.\n ",
        "childern": [
            "/CartographicRepresentations/FeatureClass",
            "/CartographicRepresentations/Rule",
            "/CartographicRepresentations/StyledLayerDescriptor"
        ]
    },
    {
        "caption": "Feature Class",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographicRepresentations/FeatureClass",
        "description": "  ",
        "childern": [
            "/CartographicRepresentations/FeatureClass/Filter"
        ]
    },
    {
        "caption": "Filter",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographicRepresentations/FeatureClass/Filter",
        "description": "  ",
        "childern": []
    },
    {
        "caption": "Rule",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographicRepresentations/Rule",
        "description": "  ",
        "childern": []
    },
    {
        "caption": "Styled Layer Descriptor",
        "cardType": "KnowledgeBaseCard",
        "ref": "/CartographicRepresentations/StyledLayerDescriptor",
        "description": "\nA Styled Layer Descriptor (SLD) is an XML schema specified by the Open Geospatial Consortium (OGC) for describing the\nappearance of map layers. It is capable of describing the rendering of vector and raster data. A typical use of SLDs is\nto instruct a Web Map Service (WMS) of how to render a specific layer.\n\nIn August 2007 the SLD specification was split up into two new OGC implementation specifications:[1]\n\nSymbology Encoding (SE)\nStyled Layer Descriptor (SLD)\nStyled Layer Descriptor specification now only contains the protocol for communicating with a WMS about how to style\na layer. The actual description of the styling is now exclusively described in the symbology encoding implementation\nspecification.\n\n        http://www.opengeospatial.org/standards/sld\n\nPříklad symbologie ZM10 uložené pomocí SLD je například\n`terénní reliéf <https://github.com/raugustyn/TB04CUZK001_TestDataSets/blob/master/02_Symbology/z_terennirelief_l.sld>`_.\n\nPoužitá pravdila SLD:\n\n* barva stroke\n\n* tloušťka čáry stroke-width\n\n* spojení segnentů stroke-linejoin\n\n* ukončení čáry stroke-linecap\n\n    ",
        "childern": []
    },
    {
        "caption": "Generalizace",
        "cardType": "KnowledgeBaseCard",
        "ref": "",
        "description": "",
        "childern": [
            "/CartographerKnowledge",
            "/CartographicRepresentations",
            "/Operators",
            "/Properties",
            "/Situations",
            "/SoftwareLibraries",
            "/StructuralPatterns",
            "/VectorData"
        ]
    },
    {
        "caption": "Agregace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Aggregation",
        "description": "Kombinování a slučování blízkých nebo sousedících prvků do nového plošného prvku. Např. Vytváření bloku zastavěné oblasti ze shluku budov, spojování malých políček do větší oseté plochy.",
        "childern": []
    },
    {
        "caption": "Klasifikace a symbolizace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/ClassificationAndSymbolization",
        "description": "Seskupování a třídění prvků podobných geografických charakteristik do nové skupiny prvků reprezentované novým symbolem.",
        "childern": [
            "/Operators/ClassificationAndSymbolization/Lineelementsjoin",
            "/Operators/ClassificationAndSymbolization/Pointsymbolorientation",
            "/Operators/ClassificationAndSymbolization/Symbolfussion",
            "/Operators/ClassificationAndSymbolization/Symbolsizebyelement"
        ]
    },
    {
        "caption": "|Napojení dvou liniových prvků",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/ClassificationAndSymbolization/Lineelementsjoin",
        "description": "",
        "childern": []
    },
    {
        "caption": "Orientace bodové/liniové značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/ClassificationAndSymbolization/Pointsymbolorientation",
        "description": "",
        "childern": []
    },
    {
        "caption": "Splynutí značek",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/ClassificationAndSymbolization/Symbolfussion",
        "description": "",
        "childern": []
    },
    {
        "caption": "Nastavení délky/šířky symbolu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/ClassificationAndSymbolization/Symbolsizebyelement",
        "description": "Nastavení velikosti symbolu podle velikosti značky jiného, případně dle kontextu.\n\n            Typicky šířka či délka mostu dle šířky komunikace či železnice. Hloubka propustku podle konfigurace rybník-hráz.",
        "childern": []
    },
    {
        "caption": "Kolaps",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Collapse",
        "description": "Pomocí kolapsu harmonizujeme obsah mapy změnou rozměru elementu nebo způsobu reprezentace, například změnou plošného prvku na liniový nebo bodový, dvoučarého prvku na jednočarý apod.",
        "childern": []
    },
    {
        "caption": "|Plocha od linie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Displacement-ConflictResolution/Areafromline",
        "description": "",
        "childern": []
    },
    {
        "caption": "Odsun",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Displacement-ConflictResolution",
        "description": "Detekování konfliktů mezi prvky a následné přesunutí méně důležitých prvků, případně přizpůsobení rozměru prvků za účelem splnění dosažení určité meze viditelné vzdálenosti mezi prvky nebo jiných kartografických parametrů.",
        "childern": [
            "/Operators/Displacement-ConflictResolution/Areafromline",
            "/Operators/Displacement-ConflictResolution/Line",
            "/Operators/Displacement-ConflictResolution/Linesatthesamelayer",
            "/Operators/Displacement-ConflictResolution/Linesfromlines",
            "/Operators/Displacement-ConflictResolution/Linesfrompolygon",
            "/Operators/Displacement-ConflictResolution/Point",
            "/Operators/Displacement-ConflictResolution/Pointfromline",
            "/Operators/Displacement-ConflictResolution/Pointfrompoint",
            "/Operators/Displacement-ConflictResolution/Symbolinarea",
            "/Operators/Displacement-ConflictResolution/Symboltooutline"
        ]
    },
    {
        "caption": "|Linie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Displacement-ConflictResolution/Line",
        "description": "",
        "childern": []
    },
    {
        "caption": "|Linie ve stejné vrstvě",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Displacement-ConflictResolution/Linesatthesamelayer",
        "description": "",
        "childern": []
    },
    {
        "caption": "|Linie od linie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Displacement-ConflictResolution/Linesfromlines",
        "description": "",
        "childern": []
    },
    {
        "caption": "|Linie od areálu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Displacement-ConflictResolution/Linesfrompolygon",
        "description": "",
        "childern": []
    },
    {
        "caption": "|Bod",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Displacement-ConflictResolution/Point",
        "description": "",
        "childern": []
    },
    {
        "caption": "|Bod od linie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Displacement-ConflictResolution/Pointfromline",
        "description": "",
        "childern": []
    },
    {
        "caption": "|Bod od bodu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Displacement-ConflictResolution/Pointfrompoint",
        "description": "Na první pohled výpočetně nejjednodušší odsun prvků. Odsunujeme vztažné body jednotlivých prvků tak, aby se jejich kresba nepřekrývala, případně aby vzniklo světlo v definovaných barvách. Celá úloha se stává složitější ve chvíli, kdy se snažíme nezakrýt kresbu objektů pod bodovými značkami.",
        "childern": []
    },
    {
        "caption": "|Symbol v ploše",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Displacement-ConflictResolution/Symbolinarea",
        "description": "",
        "childern": []
    },
    {
        "caption": "|Symbol k obrysu (přišipkování)",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Displacement-ConflictResolution/Symboltooutline",
        "description": "",
        "childern": []
    },
    {
        "caption": "Vypuštění",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Elimination",
        "description": "Vypouštění prvků kresby, které jsou příliš malé, krátké nebo příliš nedůležité aby byly zobrazeny v mapě; například malé ostrovy, krátké cesty, malé vesnice apod.",
        "childern": [
            "/Operators/Elimination/Partofline"
        ]
    },
    {
        "caption": "Vypuštění části linie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Elimination/Partofline",
        "description": "",
        "childern": []
    },
    {
        "caption": "Zvýraznění",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Exaggeration",
        "description": "Zvětšení rozměru zobrazení prvku za účelem zvýraznění a zvýšení čitelnosti; například zvětšení velikosti ostrova, který by jinak byl příliš malý nebo vypuštěný.",
        "childern": []
    },
    {
        "caption": "Operátory",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators",
        "description": "\nOperátory jsou základním stavebním kamenem generalizace. Jedná se o činnosti, kterými řešíme jednotlivé generalizační situace.\nNapříklad operátor Vylepšení (refinement) může být provedem operací (postupem) ztotožnení lemovky lesa se okrajovou čarou náspu.\nTo je poté v digitální podobě provedeno pomocí algoritmu ztotožnení, implementovaného například v knihovně WebGen.\n\nOperátor je tedy mechanismus transformace skupiny ( 0..n) kartografickych objektů na jinou skupinu kartografických objektů (0..m). Operátorem může být i změna použitého symbolu.\n\nOperátory generalizace jsou postupy, pomocí kterých kartograf řeší problémové situace, které vznikly při vykreslení obsahu mapy v určitém měřítku.\nPoužití operátorů není pevně dané, závisí na konkrétní situaci a kartograf se snaží zvolit tu nejvhodnější variantu.\nZatímco při ruční práci kartograf využívá pouze znalosti jednotlivých operátorů, při automatizované generalizaci je potřeba\noperátory implementovat na konkrétní platformě. Například při použití operátoru odsunu na budovu kartograf odsune celou její kresbu,\naniž by změnil její tvar, orientaci či velikost, tzn. provede posun všech vrcholů.\nV případě odsunu okraje lesa posune dostatečně vrcholy které kolidují a postupně i další vrcholy v okolí,\ntak aby grafický vzhled odpovídal požadavkům na mapové dílo.\n\nV automatizované generalizaci tyto operátory realizujeme pomocí algoritmů operátorů, respektive jejich jednotlivých implementací\na strukturálních vzorů, které určují situace (context) kdy je možné či nutné některý z nich použít.\n\n",
        "childern": [
            "/Operators/Aggregation",
            "/Operators/ClassificationAndSymbolization",
            "/Operators/Collapse",
            "/Operators/Displacement-ConflictResolution",
            "/Operators/Elimination",
            "/Operators/Exaggeration",
            "/Operators/Refinement",
            "/Operators/Simplification",
            "/Operators/Typification"
        ]
    },
    {
        "caption": "Vyplnění díry po prvku",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Refinement/Infillholeafterfillelementelimination",
        "description": "",
        "childern": []
    },
    {
        "caption": "|Vyhlazení linie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Refinement/LineSmoothing",
        "description": "",
        "childern": []
    },
    {
        "caption": "Vymaskování části linie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Refinement/Linetolinemask",
        "description": "",
        "childern": []
    },
    {
        "caption": "Ortogonalizace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Refinement/Orthogonalization",
        "description": "",
        "childern": []
    },
    {
        "caption": "Ztotožnění průběhu linie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Refinement/Paralelization/Colinearization",
        "description": "\nKe ztotožnění průběhu linie prvků dochází u liniových kreseb ve stejné barvě ve stejné tloušťce.\n\nNa našem příkladu vidíme ztotožnění průběhu kresby hrany terénního reliéfu s průběhem kresby okraje druhu využití půdy.\n\nVe výsledné kresbě dojde k tomu, že první a poslední vrchol kresby hrany terénního reliéfu bude přichycen na osu kresby okraje druhu využití půdy. V ostatním průběhu převezme přímo vrcholy jeho kresby.\n\nVe složitějších variantách ztotožnění již nedochází k přebírání průběhu geometrie, ale ke ztotožnění průběhu o určitou vzdálenost - offset. Jednotlivé varianty se potom liší pouze způsobem stanovení tohoto offsetu.\n                ",
        "childern": []
    },
    {
        "caption": "Ztotožnění průběhu hrany kresby",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Refinement/Paralelization/Colinearizationofmargins",
        "description": "\nKe ztotožnění průběhu hrany kresby dochází u liniových prvků kresby ve stejné barvě, které jsou součástí složitějšího symbolu kde splynutí linie není na závadu čitelnosti závislého prvku. Tloušťka čáry závislého prvku musí být menší nebo stejná než okrajová tloušťka čáry kresby prvku hlavního, případně může být vymaskována výplní prvků hlavního.\n\nHodnotu offsetu vypočteme podle jednoduchého vztahu\n\nOffset=(MasterWidth-SlaveWidth)/2\n\nkde MasterWidth značí maximální šířku kresby vodícího elementu a SlaveWidth tloušťku čáry kresby závislého elementu.\n\n                ",
        "childern": []
    },
    {
        "caption": "Ztotožnění průběhu linie na dotyk",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Refinement/Paralelization/Colinearizationtotouch",
        "description": "\nKe ztotožnění průběhu linie na dotyk kresby dochází u dvou kreseb v různé barvě, kde jsou barvy od sebe v dané síle čáry a při použitém symbolu výrazně odlišitelné.\n\nHodnotu offsetu vypočteme podle jednoduchého vztahu\n\nOffset=(MasterWidth+SlaveWidth)/2\n\nkde MasterWidth značí maximální šířku kresby vodícího elementu a SlaveWidth tloušťku čáry kresby závislého elementu.\n\n                ",
        "childern": []
    },
    {
        "caption": "Ztotožnění průběhu linie s rozestupem",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Refinement/Paralelization/Colinearizationwithtreshold",
        "description": "\nKe ztotožnění průběhu linie s rozestupem dochází u dvou kreseb v různé barvě, kde nejsou barvy od sebe v dané síle čáry a při použitém symbolu výrazně odlišitelné.\n\nHodnotu offsetu vypočteme podle jednoduchého vztahu\n\nOffset=Treshold + (MasterWidth+SlaveWidth)/2\n\nkde MasterWidth značí maximální šířku kresby vodícího elementu, SlaveWidth tloušťku čáry kresby závislého elementu a Treshold hodnotu rozestupu mezi kresbami.\n\n                ",
        "childern": []
    },
    {
        "caption": "Ztotožnění průběhu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Refinement/Paralelization",
        "description": "\nZtotožnění průběhu je jednou z metod jak zlepšit čitelnost mapy, často zároveň vede ke snížení jejího grafického zaplnění. V menších měřítcích se kresby obou prvků k sobě přibližují natolik, že drobné oscilace v jejich průběhu jsou patrné, nepřinášejí přidanou či důležitou informaci a působí rušivě.\nKe ztotožnění průběhu kartograf přistupuje u prvků, které mají ve své části podobný průběh. Je typické u prvků, jejichž kresba není v terénu přesně ohraničena, případně nejsou z hlediska účelu mapy jejich tvar a polohová přesnost podstatné. Typickým příkladem prvky, na který je uplatňována, jsou liniové prvky mikroreliéfu.\nPři realizaci rozlišujeme prvek hlavní, respektive vodící  a prvek závislý . Průběh vodícího prvku zůstává nezměněn, naopak průběh prvku závislého je mu přizpůsoben.\n\nZ grafického hlediska rozlišujeme čtyři varianty ztotožnění:\n\n-\tztotožnění průběhu linie\n\n-\tztotožnění průběhu hrany kresby\n\n-\tztotožnění průběhu linie na dotyk\n\n-\tztotožnění průběhu linie s rozestupem\n\n# Použitelné algoritmy\n\nZ dostupných knihoven je oblast ztotožnění průběhu částečně řešena na platformě ESRI ArcGIS. Je zde dostupná poměrně pokročilá funkcionalita pro ztotožnění průběhu, určená pro začištění vektorových dat velkého měřítka. Je schopna precizně ztotožnit průběh kresby tam, kde závislý element vede v celém svém průběhu podél elementu hlavního. Detaily řešení jsou patrné z obrázku a je možné je beze zbytku využít ve vlastním řešení. Funkcionalita je interaktivně umístěna do sady nástrojů Conflation Toolbox a je dostupná v prostředí ArcPy.\n\nDále je dostupná funkcionalita pro výpočet tzv. Hausdorfovy vzdálenosti, která umožňuje vyčíslit míru podobnosti dvou geometrií. Blíže viz například dokumentace PostGIS.\n\n# Řešení úlohy\n\nZtotožnění průběhu kreseb je potřeba řešit v kontextu celého prvku a zejména vzít v úvahu zachování tvaru kresby.\n\nTento typ úloh se obvykle řeší stanovením dvou prahových hodnot. Vodící objekt je znázorněn modře, závislý  objekt znázorňují šedé hrany a jeho vrcholy - šedá kolečka. Kresba objektu je částečně ve vzdálenosti menší než zelená zóna (buffer). Dále definujeme, co je pro nás ještě rušivá odchylka a co už ne, což je znázorněno žlutou vzdáleností T.\n\n1.\tModré body závislého objektu uvnitř zelené zóny se odsunou nebo smažou vždy a nahradí částí okraje zóny.\n\n2.\tTo samé je aplikováno i na další body závislého objektu, které splňují podmínku, že leží ve žluté zóně a zároveň mezi nimi a nějakým modrým bodem není žádný bod mimo žlutou zónu. Ty  jsou na obrázku ty označené černým křížkem.\n\n3.\tNa ukázce vlevo jsou body ve žluté zóně, které křížkem označeny nejsou – s těmi se nic dělat nebude, protože nesplňují druhou část podmínky.\n\n4.\tÚseky s modrými body a s body označenými černým křížkem nahradíte částí okraje zóny. Tím vyřešíme vše, co je blíž vodícímu prvku než je stanovená hodnota a zároveň vyřešíme i malé oscilace, tj. oscilace menší než hodnota T na druhou stranu kresby.\n\n5.\tTo co je ve větší vzdálenosti, zůstane netknuté.\n\n6.\tVýsledkem řešení je potom růžová linie.\n\n\nDiskuze\n* [Strukturální vzor](https://github.com/raugustyn/TB04CUZK001_KnowledgeDiscussions/issues/256)\n",
        "childern": [
            "/Operators/Refinement/Paralelization/Colinearization",
            "/Operators/Refinement/Paralelization/Colinearizationofmargins",
            "/Operators/Refinement/Paralelization/Colinearizationtotouch",
            "/Operators/Refinement/Paralelization/Colinearizationwithtreshold"
        ]
    },
    {
        "caption": "Vylepšení",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Refinement",
        "description": "Změna či přizpůsobení geometrie nebo vzhledu za účelem zlepšení jeho estetického dojmu a souladu s realitou. Přikladem je zahlazení linie, vytvoření rohu v pravém úhlu, změna orientace a přizpůsobení bodového symbolu, přizpůsobení úhlů protínání řek a vstevnic atd.",
        "childern": [
            "/Operators/Refinement/Infillholeafterfillelementelimination",
            "/Operators/Refinement/LineSmoothing",
            "/Operators/Refinement/Linetolinemask",
            "/Operators/Refinement/Orthogonalization",
            "/Operators/Refinement/Paralelization",
            "/Operators/Refinement/TangentialSlide"
        ]
    },
    {
        "caption": "Rozšoupnutí mostu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Refinement/TangentialSlide",
        "description": "",
        "childern": []
    },
    {
        "caption": "Zjednodušení",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Simplification",
        "description": "Odstranění nepodstatných detailů, jako jsou malé záhyby a výkyvy z linií nebo okrajů ploch při zachování travru elementu.",
        "childern": []
    },
    {
        "caption": "Typizace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Operators/Typification",
        "description": "Redukování hustoty a úrovně detailu při zachování reprezentativního rozložení elementů a vizuálního dojmu původní sklupiny prvků; například snížení hustoty vodstva beze ztráty vjemu jeho struktury.",
        "childern": []
    },
    {
        "caption": "Vlastnosti atomů",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties",
        "description": "Vygenerovaná sekce s vlastnostmi jednotlivých atomů v databázi.",
        "childern": [
            "/Properties/Properties.Datatypes",
            "/Properties/Properties.Values"
        ]
    },
    {
        "caption": "Area",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Datatypes/Properties.Datatypes.Area",
        "description": "Datový typ Area",
        "childern": []
    },
    {
        "caption": "Category",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Datatypes/Properties.Datatypes.Category",
        "description": "Datový typ Category",
        "childern": []
    },
    {
        "caption": "Color",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Datatypes/Properties.Datatypes.Color",
        "description": "Datový typ Color",
        "childern": []
    },
    {
        "caption": "Datové typy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Datatypes",
        "description": "",
        "childern": [
            "/Properties/Properties.Datatypes/Properties.Datatypes.Area",
            "/Properties/Properties.Datatypes/Properties.Datatypes.Category",
            "/Properties/Properties.Datatypes/Properties.Datatypes.Color",
            "/Properties/Properties.Datatypes/Properties.Datatypes.Integer",
            "/Properties/Properties.Datatypes/Properties.Datatypes.Length",
            "/Properties/Properties.Datatypes/Properties.Datatypes.List",
            "/Properties/Properties.Datatypes/Properties.Datatypes.Other",
            "/Properties/Properties.Datatypes/Properties.Datatypes.Precision",
            "/Properties/Properties.Datatypes/Properties.Datatypes.Width"
        ]
    },
    {
        "caption": "Integer",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Datatypes/Properties.Datatypes.Integer",
        "description": "Datový typ Integer",
        "childern": []
    },
    {
        "caption": "Length",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Datatypes/Properties.Datatypes.Length",
        "description": "Datový typ Length",
        "childern": []
    },
    {
        "caption": "List",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Datatypes/Properties.Datatypes.List",
        "description": "Datový typ List",
        "childern": []
    },
    {
        "caption": "Other",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Datatypes/Properties.Datatypes.Other",
        "description": "Datový typ Other",
        "childern": []
    },
    {
        "caption": "Precision",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Datatypes/Properties.Datatypes.Precision",
        "description": "Datový typ Precision",
        "childern": []
    },
    {
        "caption": "Width",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Datatypes/Properties.Datatypes.Width",
        "description": "Datový typ Width",
        "childern": []
    },
    {
        "caption": "Category",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Values/Properties.Values.Category",
        "description": "Hodnota Category",
        "childern": []
    },
    {
        "caption": "Color",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Values/Properties.Values.Color",
        "description": "Hodnota Color",
        "childern": []
    },
    {
        "caption": "Hodnoty",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Values",
        "description": "",
        "childern": [
            "/Properties/Properties.Values/Properties.Values.Category",
            "/Properties/Properties.Values/Properties.Values.Color",
            "/Properties/Properties.Values/Properties.Values.Minimalnivelikost",
            "/Properties/Properties.Values/Properties.Values.Minimalsize",
            "/Properties/Properties.Values/Properties.Values.Operatory",
            "/Properties/Properties.Values/Properties.Values.Symbols",
            "/Properties/Properties.Values/Properties.Values.Tridapresnosti",
            "/Properties/Properties.Values/Properties.Values.Weight"
        ]
    },
    {
        "caption": "Minimální velikost",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Values/Properties.Values.Minimalnivelikost",
        "description": "Hodnota Minimální velikost",
        "childern": []
    },
    {
        "caption": "Minimal size",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Values/Properties.Values.Minimalsize",
        "description": "Hodnota Minimal size",
        "childern": []
    },
    {
        "caption": "Operátory",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Values/Properties.Values.Operatory",
        "description": "Hodnota Operátory",
        "childern": []
    },
    {
        "caption": "Symbols",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Values/Properties.Values.Symbols",
        "description": "Hodnota Symbols",
        "childern": []
    },
    {
        "caption": "Třída přesnosti",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Values/Properties.Values.Tridapresnosti",
        "description": "Hodnota Třída přesnosti",
        "childern": []
    },
    {
        "caption": "Weight",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Properties/Properties.Values/Properties.Values.Weight",
        "description": "Hodnota Weight",
        "childern": []
    },
    {
        "caption": "Komplexní problém",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/ConfigurationComplexity/Complex",
        "description": "\nV této konfiguraci je opět nedodrženo více než jedno generalizační pravidlo, podobně jako v rostrkatelné konfiguraci.\nProsté použití jednotlivých operátorů nevede k vyřešení na sebe navazujících problémů, nezávisle na problému,\nkterý vyřešíme jako první. Takovouto situaci lze většinou vyřešit formou kompromisu, kdy nesplníme všechny požadavky zcela.\n",
        "childern": []
    },
    {
        "caption": "Komplexnost konfigurace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/ConfigurationComplexity",
        "description": "\nGeneralizační situace mají různou úroveň komplexnosti řešení. Pokud je nedodržení kartografických pravidel způsobeno\ndvěma prvky, je ituace poměrně snadno řešitelná. I při více prvcích způsobujících problém může být řešení jednoduché,\npokud je v okolí dost prostoru na jeho vyřešení. Někdy však je konfigurace objektů v kresbě taková, že nejsme schopni\nplně dodržet kartografická pravidla. Musíme tedy přistoupit k určitému kompromisu. V mezním případě je konfigurace natolik složitá,\nže je každé řešení sporné.\n",
        "childern": [
            "/Situations/ConfigurationComplexity/Complex",
            "/Situations/ConfigurationComplexity/Disputable",
            "/Situations/ConfigurationComplexity/Isolated",
            "/Situations/ConfigurationComplexity/Propagatableconfiguration"
        ]
    },
    {
        "caption": "Sporné řešení",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/ConfigurationComplexity/Disputable",
        "description": "\nV této konfiguraci je množství vzájemně protichůdných požadavků na sestavení mapy takové, že je každé zvolené řešení sporné.\n",
        "childern": []
    },
    {
        "caption": "Izolovaný problém",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/ConfigurationComplexity/Isolated",
        "description": "\nV této konfiguraci není po vykreslení dodrženo některé z generalizačních pravidel u jednoho, maximálně dvou prvků a k jeho\nvyřešení je možné použít právě jeden generalizační operátor. Konfigurace okolních objektů je taková, že jeho použití nezpůsobí zhoršení\ndodržení pravidel. Takováto konfigurace má právě jedno řešení.\n",
        "childern": []
    },
    {
        "caption": "Rozstrkatelná konfigurace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/ConfigurationComplexity/Propagatableconfiguration",
        "description": "\nV této konfiguraci je nedodrženo více než jedno generalizační pravidlo, vyřešení jednoho často zhorší jiný problém či\ndokonce vytvoří problém nový. Postupnou aplikací operátorů k jejich vyřešení jako v případě izolovaných problémů však\ndosáhneme vyřešení celé situace.\n",
        "childern": []
    },
    {
        "caption": "|Seznam",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/Details",
        "description": "",
        "childern": []
    },
    {
        "caption": "Situace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations",
        "description": "\nGeneralizační situace je množina situací kresby map, která shrnuje základní problémy generalizace základních map měřítek 1:10 000 a\n1:25 000. Zaměřuje se na problémy, jejichž vyřešení ručním kartografickým zpracováním je časově náročné a jejichž automatizace má\nveliký potenciál přinést úsporu kapacit při obnově základních map těchto měřítek.\n    ",
        "childern": [
            "/Situations/ConfigurationComplexity",
            "/Situations/Details",
            "/Situations/SituationsData",
            "/Situations/Statistics"
        ]
    },
    {
        "caption": "Odsun náspu a zářezu od cesty",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_1",
        "description": "V části průběhu liniového prvku kategorie Komunikace dochází k souběžnému, nesymetrickému průběhu dvou celých liniových objektů různých typů téže kategorie Terénní reliéf. Prostým vyjádřením průběhů kartografickými znaky, při čemž prioritní objekt komunikací nebude modifikován, by došlo ke kolizím: - čárky smluvené značky zářezu by se dotýkaly nebo překrývaly se značkou lesní cesty a hrana náspu by byla ke značce lesní cesty blíže, než je povolený limit.\r\n\r\nPozn.: Vyjádření situace kartografickými znaky po odstranění kolize ovlivní také kresbu liniových objektů terénního reliéfu - vrstevnice.",
        "childern": []
    },
    {
        "caption": "Symbolizace dvou liniových elementů v jeden s oboustrannou značkou",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_10",
        "description": " Dva liniové prvky téhož typu jsou souběžné v celém svém průběhu a jejich vzdálenost je dostatečně malá, aby mohly být jejich průběhy považovány za totožné. Výsledný ztotožněný prvek je symbolizován    značkou odlišnou od původní. \r\n\r\nPozn.: pokud nedochází k souběhu celých objektů, ale jen jejich částí, je nutné ošetřit návaznost geometrií zúčastněných částí i způsob vyjádření pokračujícího prvku původní značkou.",
        "childern": []
    },
    {
        "caption": "Odsun symbolu přívozu.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_100",
        "description": "",
        "childern": []
    },
    {
        "caption": "Doplňující obrázek k situaci č.100.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_101",
        "description": "",
        "childern": []
    },
    {
        "caption": "Odsun vodního toku.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_102",
        "description": "",
        "childern": []
    },
    {
        "caption": "Nastavení pravidel zobrazení ArcGIS",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_103",
        "description": "",
        "childern": []
    },
    {
        "caption": "Nastavení pravidel zobrazení ArcGIS.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_104",
        "description": "",
        "childern": []
    },
    {
        "caption": " Speciální vykreslení mostu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_105",
        "description": "\r\nTopologicky složitá situace, kdy se dva liniové prvky Komunikace sbíhají do jednoho prvku Komunikace s oddělenými pruhy. Část Komunikace s oddělenými pruhy je ztotožněna s liniovými prvky Most a linií Metra, která probíhá středem mezi oběma oddělenými pruhy. Šířku symbolu Mostu je nutno nastavit tak, aby odpovídala šířce Komunikace s oddělenými pruhy, která z mostu vychází.",
        "childern": []
    },
    {
        "caption": "Vypuštění doplňkových linií",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_106",
        "description": "",
        "childern": []
    },
    {
        "caption": "Redukce zobrazení hranic mezi kulturami.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_107",
        "description": "\r\nV ZM25 nejsou znázorňovány liniové prvky Hranice areálů mezi těmi druhy kultury, které jsou vyjadřovány stejným odstínem barvy - sousedící areály jsou spojeny, přičemž jsou odstraněny společné hranice. Značky pro druh kultury nejsou v ZM25 uváděny vůbec.",
        "childern": []
    },
    {
        "caption": "Doplňující obrázek k situaci č.107.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_108",
        "description": "",
        "childern": []
    },
    {
        "caption": " Redukce vlečky.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_109",
        "description": "",
        "childern": []
    },
    {
        "caption": " Nastavení parametrů popisu podle grafického elementu v mapě.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_11",
        "description": "",
        "childern": []
    },
    {
        "caption": "Doplňující obrázek k situaci č.109.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_110",
        "description": "",
        "childern": []
    },
    {
        "caption": "\r\nUmístění bodového prvku Nádraží na liniový prvek Železnice.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_111",
        "description": "",
        "childern": []
    },
    {
        "caption": " Odstranění kresby liniového prvku Doplňková linie",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_112",
        "description": "",
        "childern": []
    },
    {
        "caption": " Souběh a křížení liniových prvků s přemostěním a dálničními sjezdy a nájezdy.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_113",
        "description": " Situace je velmi komplexní. Dálnice se samostatnou geometrií pro každý směr je v obou směrech opatřena sjezdy a nájezdy a dálničními mosty v místech křížení s liniovými prvky Silnice a Voda. Dva liniové prvky Silnice se v blízkosti Dálnice navzájem kříží v úrovni, přičemž jeden liniový prvek je souběžný s částí Dálnice a křižuje přemostěním prvek Voda. Druhý křižuje Dálnici pod dálničními mosty a je souběžný s částí liniového prvku Voda. Také sjezd a nájezd na Dálnici je opatřen liniovým prvkem Most, který křižuje prvek Voda. Dálniční sjezdy a nájezdy ústí nebo vycházejí z prvků Silnice. \r\nČásti liniových prvků Voda a Silnice jsou souběžné s liniovým prvkem Hranice. Symbolizací liniových prvků vznikne velké množství kolizních situací, které je nutno řešit postupně, zpravidla odsunem linií, v pořadí podle priorit prvků a je nutné zachovat stávající topologické vztahy (napojivání, křížení, stranovost, pořadí linií atd.).",
        "childern": []
    },
    {
        "caption": " Souběžný průběh liniových prvků Terénní stupeň v mimoúrovňovém křížení liniových prvků Dálnice se sjezdy, nájezdy a přemostěním.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_114",
        "description": " \r\nNadúrovňové křížení liniových prvků Dálnice a Rychlostní silnice je realizováno množstvím nájezdů a sjezdů, které jsou v místech vzájemných křížení tvořeny liniovými prvky Most, včetně mostů, jejichž geometrie není tvořena přímkou, ale obloukem. Prakticky se všemi liniovými prvky Komunikace, s vyjímkou mostů, souběžně probíhají liniové prvky Terénní stupeň. Symbolizací zúčastněných prvků by došlo k vzájemným kolizím, které je nutno řešit odsunem linií včetně příslušných liniových  prvků Most a Terénní stupeň. Mosty je nutné odpovídajícím způsobem upravit (změnou na jednostranné, orientace, sešikmení, prodloužení a pod.).",
        "childern": []
    },
    {
        "caption": "Souběh částí liniových prvků Dálnice, Silnice a Hranice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_115",
        "description": "\r\nČásti liniového prvku Obecní hranice jsou totožné s částí průběhu liniového prvku Voda a poté  s částí prvku Silnice. Silnice je v některých částech souběžná s liniovým prvkem Dálnice. Při symbolizaci prvků Komunikace je nutné zachovat charakteristický vyhlazený tvar průběhu Silnice vyšší kategorie, její souběh s Dálnicí a ztotožnění Obecní hranice s linií Voda a Silnice, včetně stranové topologie. Při křížení Silnice s prvkem Voda je nutno doplnit liniový prvek Propustek.",
        "childern": []
    },
    {
        "caption": "Redukce železnic.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_116",
        "description": "\r\nV průmyslové oblasti dochází ke značnému přehuštění liniových prvků Železnice a Železniční vlečka. K eliminaci kolizí symbolizovaných prvků jsou odstraněny Železniční vlečky podlimitní délky a Železnice jejichž průběhy jsou v  delších úsecích přibližně paralelní a navzájem blízké, jsou buď sloučeny nebo rovněž odstraněny. Průběhy a napojení ponechaných železnic a železničních vleček jsou upraveny tak, aby na sebe napojovaly v místě co nejbližším původnímu místu spojení a byly tvořeny hladkou kartografickou čárou.",
        "childern": []
    },
    {
        "caption": " Shluk bodových prvků různých typů",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_117",
        "description": "\r\nNa malé ploše je shluk bodových prvků různých typů. Jejich symbolizací dojde ke kolizím mezi dvěma prvky Vysílač, prvkem Rozhledna a prvkem Základní nivelační bod s popisem výšky. Řešení tohoto nahuštění spočívá v eliminaci jednoho prvku Vysílač, odsunu obou prvků Vysílač a Rozhledna od sebe a v odtranění bodového prvku Základní nivelační bod s ponecháním pouze popisného údaje o nadmořské výšky.",
        "childern": []
    },
    {
        "caption": " Shluky bodových prvků téhož typu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_118",
        "description": "  Větší počet bodových prvků téhož typu Jeskyně vytváří několik shluků. Symbolizací prvků dochází ke vzájemným kolizím. Řešení spočívá v eliminaci a odsunu vybraných prvků a v jejich agregaci (vyjádření skupiny bodových prvků jedním reprezentantem) v rámci shluků.",
        "childern": []
    },
    {
        "caption": "  Zjednodušení tvaru a odsun částí liniových prvků",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_119",
        "description": "  Velmi členitý liniový prvek Voda probíhá v úzkém prostoru vymezeném liniovými prvky Silnice a Železnice, které jsou rovněž členité, avšak v míře, která odpovídá uměle vytvořenému terénnímu předmětu. Symbolizací liniového prvku Silnice a Železnice by vznikly kolize s prvkem Voda a v místě křížení Železnice s prvkem Voda by vznikla kolize všech těchto tří prvků. Řešení spočívá ve zjednodušení (zhlazení) průběhů všech těchto zúčastněných prvků av  odsunu zhlazeného průběhu prvku Silnice směrem od prvku Voda. Incidenci prvku Silnice s prvkem Voda představuje liniový prvek Most, jehož poloha a orientace musí být zachována. Incidencí Železnice s prvkem Voda je rovněž liniový prvek Most, který je však z důvodu kolize s liniovým prvkem Silnice od ní odsunut.",
        "childern": []
    },
    {
        "caption": " Nastavení pravidel zobrazení ArcGIS",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_12",
        "description": "",
        "childern": []
    },
    {
        "caption": " Vypuštění podlimitních areálů vegetace",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_120",
        "description": "\r\nSituace obsahuje seskupení areálových prvky Porost a povrch půdy, využití půdy, z nichž některé mají obsahy menší než stanovený práh (10 000 m2). Řešení podlimitních areálových prvků spočívá v jejich vyloučení (odstranění), kdy se jejich areály rozplynou v sousedním areálovém prvku (prvcích) nebo ve spojení dvou a více blízkých podlimitních areálových prvků téhož typu v jeden prvek, pokud takto vzniklý areál splní požadovaný limit obsahu.\r\nProtože se jedná o generalizaci pro ZM50, je nutné provést na závěr zjednodušení tvarů všech areálů.",
        "childern": []
    },
    {
        "caption": "Agregace/typizace a odsun podměrečných ploch sádek.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_121",
        "description": "\r\nMezi dvěma liniovými prvky Voda je účelový areál pro chov ryb se dvěma shluky sádek a jednou větší vodní nádrží. Všechny sádky mají pravidelný obdélníkový tvar, stejné rozměry a jsou seřazeny do dvou skupin v jedné řadě. Žádný z nich však nesplňuje limit pro minimální obsah ohraničené vodní plochy (2500 m2). Protože se jedná o významné prvky, jejich generalizace pro ZM50 spočívá ve sloučení všech podlimitních prvků obou shluků do jednoho (s odstraněním společných hranic mezi nimi) se zachováním charakteristického tvaru a jeho zvětšení na limitní obsah. Samostatně stojící areálový prvek je z dalšího zpracování vyloučen. Kolize vzniklé zvětšením spojeného areálového objektu jsou ošetřeny úpravou průběhu a odsuny částí geometrií obou liniových prvků Voda.",
        "childern": []
    },
    {
        "caption": "Blokování zástavby v sídle.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_122",
        "description": "\r\nV městském sídle je hustá zástavba individuálních domů se zahradami, průjezdní silnice a síť ulic. Některé rozměrnější budovy jsou významné a některé vytvářejí blok souvislé zástavby. Generalizace pro ZM50 vychází ze dvou nosných průjezdních komunikací a sítě ulic, jejichž symbolizace člení zástavbu do areálových prvků Blok budov. Malé a nevýznamné budovy ani okolní zahrady v nich nejsou znázorněny. Vybrané jednotlivé významné a rozměrné budovy i souvislá zástavba jsou zakresleny do areálů Bloky budov. Vybrané budovy mimo souvislou zástavbu, které jsou orientačně významné, jsou rovněž zobrazeny. Tvary všech zobrazovaných budov jsou zjednodušeny, ortogonalizovány a symbolizovány tak, aby měly minimální požadované rozměry a plochu. Při symbolizaci zachovaných prvků komunice a ulice je nutné vyřešit kolize s budovami jejich odsunutím přičemž zachovat jejich topologický vztah k průjezdní komunikaci nebo ulici. Orientace k příslušným průjezdním komunikacím mohou být do určité míry modifikovány.\r\nGeneralizace průjezdů a ulic spočívá v eliminaci krátkých a méně významných ulic, jejich smyček a vjezdů do vnitrobloků a zjednodušení jejich průběhů.",
        "childern": []
    },
    {
        "caption": " Příklad blokování nesouvislé zástavby.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_123",
        "description": "",
        "childern": []
    },
    {
        "caption": " Řešení kresby budov nad míru.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_124",
        "description": "",
        "childern": []
    },
    {
        "caption": "Zjednodušení tvaru",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_125",
        "description": "",
        "childern": []
    },
    {
        "caption": "Vypuštění objektu (budovy)",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_126",
        "description": "\r\nBudova (pravděpodobně zahradní domek) o rozměrech cca 4x4 m by v měřítku mapy ZM10 měla rozměry pouze 0,4 x0,4 mm - byla vypuštěna. Možno řešit i kresbou nadmíru.",
        "childern": []
    },
    {
        "caption": "Sloučení/sdružení budov",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_127",
        "description": "\r\nDvě menší budovy (cca 5,5x5,5 m a 5x8m) byly sloučeny spolu s větší budovou do jedné budovy v \r\nmapě. Možno řešit i vypuštěním některých objektů nebo jejich odsunem.",
        "childern": []
    },
    {
        "caption": " Slícování a nastavení kontrolních bodů.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_13",
        "description": "\r\nSpolečné úseky hranic dvou sousedících areálů chráněného území mají totožnou geometrii, které je dosaženo jejich slícováním. Slícování hranic dvou sousedících plošných prvků Chráněné území je jedním ze 3 přípustných případů  slícování prvku tohoto typu (ke dvoučarým komunikacím typu silnice a železnice, ke státní hranici, k jiné hranici chráněného území). Při symbolizaci části hranice společné pro obě sousedící území je nutné zabezpečit, aby byly společné )totožné) i vzorky hranic obou území a aby i k napojení obou hranic došlo ve společných vzorcích.",
        "childern": []
    },
    {
        "caption": "Komplexní situace odsunů.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_14",
        "description": "\r\nJedná se o velmi složitou (komplexní) situaci, kdy liniový prvek komunikace vede středem celé delší oboustranné linie hráze. V místě křížení těchto souběžných linií s liniovým prvkem vodstva, které vytéká z rybníka, je bodový objekt propustek. Podél části jedné hráze vede souběžně liniový prvek stromořadí a podél celé druhé hráze vede, rovněž souběžně, břehová čára rybníka. Tato musí být odsunuta od hráze o délku jejích příčných čárek \"fousů\". Části zúčastněných linových prvků břehová čára a komunikace tvoří také hranice užívání plošných prvků vegetace.\r\nPři změnách tvaru linií a jejich odsunu musí být zachováno slícování ploch s jejich hranicemi užívání.",
        "childern": []
    },
    {
        "caption": "Doplňující obrázek k situaci č.14",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_15",
        "description": "",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_16",
        "description": "\r\nV místě křížení liniového objektu Voda s liniovým objektem Hráz v jejíž ose vede část liniového prvku Cesta, je bodový prvek Propustek. Souběžně s částí prvku Cesta vede jednostranně liniový prvek Stromořadí, který vede pod Hrází. Při symbolizaci jsou obě strany Hráze symetricky a Stromořadí jednostranně odsunuty od prvku Cesta při zachování pořadí. Orientace bodového prvku Propustek musí odpovídat průběhu liniového prvku Voda a jeho šířka šířce oboustranně odsunuté Hráze.",
        "childern": []
    },
    {
        "caption": "Doplňující obrázek k situaci č.18",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_17",
        "description": "Doplňující obrázek k situaci č.18",
        "childern": []
    },
    {
        "caption": "Nastavení parametrů symbolu v závislosti na situaci.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_18",
        "description": "\r\nV intravilánu je liniový prvek Silniční most zakreslován s šířkou, která odpovídá šířce ulice, v níž se nalézá. Rovněž žlutá výplň komunikace je v místě mostu rozšířena z původní šíře, odpovídající průjezdní komunikaci, na šířku rozšířeného mostu. Odpovídající rozšíření mostu se odrazí i v šířce přerušen přemostěného liniového prvku Voda.",
        "childern": []
    },
    {
        "caption": "Komplexní souběh liniových elementů",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_19",
        "description": " \r\nTato Situace je z části určitou obdobou Situace X, která je však zde zastoupena jen jako jedna z několika základních incidencí. Jedná se o situaci komplexní jejíž složitost je dána variabilitou liniových prvků terénu, které se jednotlivých kolizí účastní, postloupností a návazností těchto kolizí s liniovým prvkem dálnice určeným dvěmi souběžnými geometriemi. Typickým pro prvek dálnice je postupné střídání kolizí se souběžnými symetrickými oboustrannými liniovými prvky typu násep, asymetrickými oboustrannými liniovými prvky zářez, navazování průběhu liniových prvků dálnice a most, přerušování liniových prvků terénního reliefu liniovým prvkem most, který je společným mostem pro oba jízdní pásy a pod.\r\n\r\nJe nutné ošetřit plynulé přechody mezi typy a kolizemi i liniový objekt komunikací procházející pod mostem. Každý jízdní směr je v databázi reprezentován vlastním mostem.",
        "childern": []
    },
    {
        "caption": "Postupný odsun stromořadí a zářezů od silnice.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_2",
        "description": " Postupný odsun symbolizovaných liniových prvků stromořadí a terénní stupeň od silnice tak, aby bylo zachováno jejich pořadí. Symboly jednotlivých stromů prvku stromořadí mohou do určité míry zasahovat do kresby šraf symbolu terénní stupeň.",
        "childern": []
    },
    {
        "caption": "Specializované vykreslení značky terénního stupně.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_20",
        "description": "Specializované vykreslení značky terénního stupně.",
        "childern": []
    },
    {
        "caption": "Odsun průběhu potoka a dalších prvků v návaznosti na kresbu silnice nad míru",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_21",
        "description": "\r\nPrůběh části liniového prvku voda tvoří současně část hranice užívání. Geometrie obou částí liniových prvků jsou proto ztotožněny a poněvadž by jejich zákres byl zakrytý kresbou značky liniového prvku komunikace, je tato část ztotožněné geometrie odsunuta směrem od komunikace. Plošný prvek vegetace je také odpovídajícím způsobem modifikován.   \r\nZnačku bodového prvku propustek je v případě potřeby možné natočit, avšak pouze do té míry, aby nebyl průběh toku výrazně změněn a pootočený propustek nebyl ani částečně překryt komunikací.",
        "childern": []
    },
    {
        "caption": "Souběh liniových prvků hranice chráněného a administrativního území.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_22",
        "description": "\r\nHranice chráněného území je totožná s hranicí administrativního území. Jedná se tedy o druhý případ přípustného slícování hranice chráněného území (viz Popis Situace X). Geometrie obou prvků budou ztotožněny (převzetím přesněji určené státní nebo administrativní hranice) a hranice chráněného území bude paralelně odsunuta o šířku lemovky administrativní hranice směrem dovnitř chráněného území.",
        "childern": []
    },
    {
        "caption": "Specializovaná kresba nesjízdné ulice.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_23",
        "description": "\r\nNesjízdná komunikace v sídle je symbolizována kolmičkami ke středové čáře mezi dvěma protějšími hranicemi užívání.",
        "childern": []
    },
    {
        "caption": "Symbolizace a redukce liniových elementů",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_24",
        "description": "\r\nTato situace je jednodušší variantou Situace 10.(?), protože se kolize účastní malý počet prvků, liniový prvek terénní stupeň je poměrně krátký (délky do 5 mm v měřítku mapy) a je dostatek volného místa pro její řešení. Standardní variantou řešení je změnit symbolizaci liniového prvku terénní stupeň na značku liniového prvku sdružená hráz a poté ji odsunout směrem od liniového prvku břehová čára do volného prostoru. Ke zjednodušení Situace přispěje i vypuštění bodového prvku propustek, který je na křížení liniových prvků terénního stupně a vody. Je potřebné zajistit spojitost liniového prvku voda. Vodní tok se přerušuje v případě, že se nezobrazuje propustek.\r\n\r\nPozn.: další kolize vyznačená v obrázku je rozpracovaná v popisu Situace X.",
        "childern": []
    },
    {
        "caption": "Změna symbolu propustku při velkém pokrytí mapy.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_25",
        "description": "",
        "childern": []
    },
    {
        "caption": "Speciální kresba prvků",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_26",
        "description": "",
        "childern": []
    },
    {
        "caption": "Doplňující obrázek k situaci č.26.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_27",
        "description": "",
        "childern": []
    },
    {
        "caption": "Odsun rybníka od dvoučaré komunikace.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_28",
        "description": "\r\nVzdálenost části liniového prvku břehová čára od liniového prvku silnice je menší než je stanovená mezní hodnota a je souběžná s částí průběhu řídícího liniového prvku silnice. Kolize zúčastněných prvků, která vznikne symbolizací silnice bude vyřešena modifikací části geometrie břehové čáry blízké komunikaci současně s odpovídajícími úpravami zúčastněných plošných prvků voda a vegetace. Při úpravě geometrie břehové čáry je nutno zachovat souběžnost.",
        "childern": []
    },
    {
        "caption": " Umazání parkové cesty pod lávkou.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_29",
        "description": " Umazání parkové cesty pod lávkou.",
        "childern": []
    },
    {
        "caption": " Slícování náspu na lemovku železnice.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_3",
        "description": "Oboustranné symetrické slícování liniových prvků terénního stupně - náspu s liniovým prvkem železnice.",
        "childern": []
    },
    {
        "caption": "Symbolizace areálu zemního vodojemu bodovou značkou",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_30",
        "description": "\r\nDo areálu zemního vodojemu je nutné umístit jeho bodovou značku. Prioritně se tato značka umístí na budovu v areálu, která je nejbližší k vztažnému bodu tohoto pološného prvku. Pokud taková budova neexistuje, značka se umístí do vztažného bodu areálu nebo jeho okolí.",
        "childern": []
    },
    {
        "caption": " Příprava dat pro výkreslení v ArcGIS.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_31",
        "description": " Umazání průběhu vlečky přes budovu (kůlnu) v areálu depa.",
        "childern": []
    },
    {
        "caption": " Odsuny terénního reliéfu od různých liniových prvků",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_32",
        "description": "",
        "childern": []
    },
    {
        "caption": " Symbolizace atributu značkou a její umístění",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_33",
        "description": " Druhu kultury v každém sektoru plošného prvku Porost je zobrazen pomocí značky, která je vhodně umístěna, může být zmenšena či uvedena vně plochy se šipkou k jejímu obrysu (\"přišipkována\"). Ve výjimečných případech nemusí být značka zobrazena vůbec.",
        "childern": []
    },
    {
        "caption": " Volba velikosti bodové značky druhu kultury při nedostatku místa",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_34",
        "description": "Situace je jedním z možných způsobů vyjádření druhu kultury v sektoru areálového prvku Porost při nedostatku místa pro základní velikost bodové značky. Toto řešení je upřednostňované při nedostaku místa v sektoru.",
        "childern": []
    },
    {
        "caption": "Umístění bodové značky druhu kultury mimo sektor s použitím šipky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_35",
        "description": "Situace je jedním z možných způsobů vyjádření druhu kultury v sektoru areálového prvku Porost při nedostatku místa pro základní velikost bodové značky i její zmenšenou variantu. Umístění značky a řešení šipkou musí poskytnou jednoznačnou informaci o její příslušnosti k sektoru.",
        "childern": []
    },
    {
        "caption": " Odstranění liniového prvku stromořadí podlimitní délky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_36",
        "description": "Z dalšího zpracování  je vyřazen liniový prvek stromořadí, protože nedosahuje délky stanovené jako minimální pro tento typ prvku a měřítko zpracovávané mapy.",
        "childern": []
    },
    {
        "caption": "Typizace shluku plošných prvků Voda",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_37",
        "description": "\r\nAreál sádek pro chov ryb obsahuje dva shluky plošných prvků vodstvo přičemž část linie hranice užívání Plocha různá je tvořena liniovým prvkem terénní stupeň. Jednotlivé sádky mají pravidelný geometrický tvar a orientaci, jsou uspořádány a navzájem blízko sebe. Nahuštění a kolize těchto plošných prvků je řešeno snížením jejich počtu spojením vždy několika vnitřních sousedních prvků při zachování krajních a středových objektů a úpravami geometrií.",
        "childern": []
    },
    {
        "caption": " Odstranění liniového prvku terénní reliéf podlimitní délky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_38",
        "description": "Z dalšího zpracování je vyřazen liniový prvek terénní reliéf, protože nedosahuje délky stanovené jako minimální pro tento typ prvku a měřítko zpracovávané mapy. Ani po agregaci jednotlivých prvků není splněno kriterium minimální délky.",
        "childern": []
    },
    {
        "caption": "Zjednodušení, paralelizace a redukce liniových prvků.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_39",
        "description": "\r\nHranice užívání tvoří ulici, která má nepravidelný tvar s četnými nerovnostmi, výstupky/výčnělky a zúženími. Odstranění těchto nepravidelností bude dosaženo paralelizací ulice, tj.. úpravou geometrií liniových prvků hranic užívání tak, aby byly souběžné s částí pomocného liniového prvku průjezd. Ošetřit je nutné i všechny navazující prvky.\r\n\r\nPozn: Omylem nebyl zakreslen průběh řídícího liniového prvku železnice. Liniové prvky Terénní stupeň k němu přiléhají a jsou segmentovány podle incidence (křížení) s jinými liniovými prvky, přičemž je aplikována výjimka z minimální požadované délky zobrazovaného terénního stupně (100 m). Je kartograficky vyjádřen i segment této linie kratší než stanovený délkový práh. Doporučuji tuto Situaci doplnit o zákres železnice a popsat tímto způsobem. Tuto Situaci bez zákresu železnice doporučuji však využít pro řešení nerovnoběžnosti liniového prvku ulice, která se v obrázku rovněž nachází.",
        "childern": []
    },
    {
        "caption": "Odsun bodových prvků od sebe",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_4",
        "description": "Odsun bodových prvků od sebe. Je důležité vzít v úvahu i tvary a plochy zúčastněných značek, včetně jejich ochranných okolí.",
        "childern": []
    },
    {
        "caption": "Redukce plošného prvku, který je zároveň dírou v jiném plošném prvku.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_40",
        "description": " \r\nPlošný prvek lesní půda je včeleněn do okolního plošného prrvku, protože nemá plochu stanovenou jako minimální pro tento typ prvku a měřítko zpracovávané mapy.",
        "childern": []
    },
    {
        "caption": "Redukce (vypuštění) podměrečné plochy lesa.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_41",
        "description": "",
        "childern": []
    },
    {
        "caption": " Vyplnění díry po vypuštění ostrova.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_42",
        "description": " \r\nPlošný prvek lesní půda tvořící ostrov v plošném prvku voda je včleněn do plošného prvku Voda, protože nemá plochu stanovenou jako minimální pro tento typ prvku a měřítko zpracovávané mapy.",
        "childern": []
    },
    {
        "caption": "Doplňující obrázek k situaci č.42.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_43",
        "description": "",
        "childern": []
    },
    {
        "caption": "Symbolizace při souběhu prvků.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_44",
        "description": "Liniový prvek terénní stupeň je současně hranicí užívání a hranou komunikace. Protože jeho délka nedosahuje požadovanou hodnotu, je k jeho vykreslení použita symbolizace hranice užívání, která je také hranou komunikace v sídle.",
        "childern": []
    },
    {
        "caption": " Nastavení parametrů symbologie dle situace.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_45",
        "description": "",
        "childern": []
    },
    {
        "caption": " Odsuny a vypouštění bodových značek.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_46",
        "description": "\r\nVětší počet bodových prvků vytváří několik uskupení v nichž vznikly vzájemné kolize mezi bodovými značkami a ostatními liniovými a plošnými prvky. Nahuštění bodových značek a vzájemné kolize budou řešeny snížením jejich počtu odstraněním a odsuny vybraných prvků.",
        "childern": []
    },
    {
        "caption": " Nastavení vykreslení propustků v ArcGIS.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_47",
        "description": "",
        "childern": []
    },
    {
        "caption": "Doplňující obrázek k situaci č.47.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_48",
        "description": "",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_49",
        "description": "",
        "childern": []
    },
    {
        "caption": "Slícování liniového prvku terénní stupeň na liniový prvek hranice užívání",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_5",
        "description": "\r\nLiniový prvek Hranice porostu a užívání půdy je společnou hranicí sousedících areálů Louka pastvina a Lesní půda se stromy, obou z kategorie Porost a povrch půdy, využití půdy. Část této linie hranice je nutno slícovat s liniovým prvkem Terénní stupeň z kategorie Terénní reliéf. (značka č. 606)",
        "childern": []
    },
    {
        "caption": "Odsun a vypuštění kresby průběhu železnice od sebe",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_50",
        "description": "\r\nSymbolizací husté sítě liniových prvků železnic a železničních vleček by došlo k jejich vzájemným kolizím. Dvě železniční vlečky byly od sebe navzájem symetricky odsunuty a pro nedostatek místa  došlo i k vyloučení jedné ze souběžných železnic. Místa napojení železnic byla posunuta a odpovídajícím způsobem byly upraveny i průběhy železnic v okolích těchto napojení.",
        "childern": []
    },
    {
        "caption": "Odsun průběhu železnice od jiné",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_51",
        "description": "",
        "childern": []
    },
    {
        "caption": "Odsun průběhu železnice od jiné.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_52",
        "description": "",
        "childern": []
    },
    {
        "caption": "Vyřešení kolize bodových a liniových prvků postupným odsunem",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_53",
        "description": "\r\nSymbolizací paralelního průběhu dvou železnic by došlo k jejich vzájemným kolizím. Jedna z nich je proto odsunuta. Souběžné jednostranné náspy jsou se svou příslušnou železnicí (po odsunu) slícovány. Potenciální kolize mezi symbolizovaným náspem a sloupy elektrického vedení jsou odstraněny přemístěním sloupů při zachování jejich charakteristické konstelace a úpravou průběhu napojujícího se el. vedení.\r\n\r\nPozn.: Průběh železniční vlečky pod budovou sila je popsán v situaci X.",
        "childern": []
    },
    {
        "caption": " Odsun dvou liniových prvků ve stejné vrstvě od sebe při kresbě nad míru",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_54",
        "description": "\r\nPozvolné napojování dvou linií prvku Železniční vlečka způsobí po symbolizaci od určitého místa vzájemnou kolizi. Tato je ošetřena pozvolným plynulým odsunem vybrané vlečky, přičemž je zachována původní poloha napojení. Odsouvána je ta železniční vlečka, která má pro odsun lepší podmínky - způsobí méně následných kolizí s jinými objekty. Symbolizací neodsouvané železniční vlečky by došlo ke kolizi se symbolizovaným bodovým prvkem Kaple, která by překryla téměř polovinu tloušťky značky Železniční vlečky. Symbol prvku Kaple tedy bude odsunut do volného prostoru s tím, že bude železniční vlečku překrývat,je z menší části.",
        "childern": []
    },
    {
        "caption": " Odsun budov od železnice",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_55",
        "description": " Železnice při kresbě nad míru zasahuje do budov. Při ruční generalizaci toto snížení kvality akceptujeme, protože by její napravení vyžadovalo nadměrné zásahy kartografa. Při generalizaci automatické předpokládáme tento problém odstranit a tím zvýšit kvalitu kresby oproti stávajícímu stavu.",
        "childern": []
    },
    {
        "caption": "Nastavení pravidel zobrazení ArcGIS",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_56",
        "description": "",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_57",
        "description": "\r\nSymbolizací bodového objektu Sloup el. vedení by došlo ke kolizi s linií Hranice užívání a ke kolizi s liniovým prvkem Terénní reliéf. Potenciální kolize bude odstraněna odsunem prvku Sloup el. vedení a úpravou navazujícího liniového prvku Elektrické vedení.",
        "childern": []
    },
    {
        "caption": "Odsuny terénních tvarů od kresby silnic, železnic a vodního toku",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_58",
        "description": "\r\nLiniové prvky Terénního reliéfu podél a v malé vzdálenosti od liniových prvků Silnice, Železnice, Vody a dalších jsou při symbolizaci odsunuty a jejich geometrie upraveny tak, aby byly souběžné s řídícím liniovým prvkem, aniž by se ho dotýkaly příčné čárky (\"vousy\"). Úprava geometrie zajišťuje souběh s řídícím prvkem, pokud jejich vzájemná vzálenost v celém průběhu prvku Terénního reliéfu nepřekračuje stanovenou práhovou hodnotu.",
        "childern": []
    },
    {
        "caption": " Postupný odsun bodových objektů od sebe a linií se zohledněním tvaru značky",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_59",
        "description": "\r\nSymbolizací shluku bodových objektů Kaple a dvou objektů Kříž by došlo k vzájemným kolizím a ke kolizi Kaple s liniovým prvkem Silnice, kterou by symbol Kaple překryl z velké části. Kolize jsou řešeny nevelkým odsunem objektu Kaple, aby byla zmírněna kolize s  Komunikací, přičemž nebyl brán ohled na okolní hustou zástavbu. Jeden z objektů Kříž je odstraněn a druhý je výrazně odsunut do místa, kde nebude s Kaplí kolidovat a je relativně menší hustota zástavby. Tuto zástavbu její symbol překryje.",
        "childern": []
    },
    {
        "caption": " Sloučení symbolů kostela a trigonometrického bodu.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_6",
        "description": "\r\nJedná se o komplexní generalizační situaci, kdy dochází k významnému nahromadění bodových značek objektů několika typů, přičemž prvky vzájemně kolidují (poměrně častý případ, kdy je trig. bod signalizován věží kostela). Nahuštění bodových značek je řešeno změnou symbolizace trigonometrického bodu kolidujícího se značkou kostela na značku trigonometrický bod na kostele. Tato nová kombinovaná značka je umístěna v původním místě trig.bodu.\r\n\r\nPůvodní značky (kostela, trig. bodu případně i věže nebo věží značka nebo značky jeho věží) jsou zpracovány podle pravidel pro jejich použití.",
        "childern": []
    },
    {
        "caption": "Odsuny liniových a bodových objektů.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_60",
        "description": "\r\nSymbolizace tří bodových prvků Sloup el. vedení uspořádaných v linii by způsobila kolize s okolními liniovými prvky Terénní stupeň a Cesta. Při zachování původního průběhu liniového prvku Břehová čára je potenciální kolizi zabráněno odsunem značek sloupů ( i za cenu změny na trojúhelníkovou konstelaci) včetně úpravy částí liniových prvků El. vedení (místo jejich spojení je zachováno), odsunem částí liniových prvků Silnice a Voda - občasná a odstraněním liniového prku Terénní stupeň.\r\nKolize souběžných liniových prvků Silnice, Voda a Terénní stupeň je řešena odsunem (paralelizací) částí těchto linií od Silnice přičemž je nutno zachovat jejich pořadí a slícování linií terénních stupňů s Vodou.",
        "childern": []
    },
    {
        "caption": " Odsun bodového objektu.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_61",
        "description": "Odsun bodové značky od jiné.",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_62",
        "description": "",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_63",
        "description": "",
        "childern": []
    },
    {
        "caption": " Odsun značky sloupu i vedení při kresbě nad míru.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_64",
        "description": "\r\nSymbolizací bodového prvku Sloup el. vedení by kolidoval s liniovým prvkem Hranice plošného prvku Plocha různá. Potenciální kolizi bude zabráněno odsunem symbolu bod. prvku Sloup el. vedení a úpravou průběhu části navazujícího liniového prvku El. vedení.\r\n\r\nPozn.:  řešení žluté výplně průjezdní komunikace v extravilánu, v intravilánu a na jejich rozmezí je již popsáno v situaci X.",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_65",
        "description": "\r\nKolizi symbolizovaného liniového prvku Silnice s liniovými prvky Voda - břehová čára, Hranice plošných prvků Budova a s bodovým prvkem Sloup el. vedení je zabráněno jejich odsunem od prvku Silnice. Areálové prvky jsou odsouvány po kolmici k ose Silnice a jsou při nich zachovány jejich původní tvary, orientace a topologické vztahy k Silnici. Bodová značka sloupu je odsunuta do místa, kde nezpůsobí jiné následné kolize a k této nové poloze je odpovídajícím způsobem upravena navazující část liniového prvku El. vedení.",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_66",
        "description": "\r\nPrůběh liniového prvku Průjezd sídlem je upraven tak, aby jeho symbolizace žlutou výplní procházela uprostřed mezi protějšími liniovými prvky Hranice užívání.",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_67",
        "description": "\r\nSouběžně s řídícím liniovým prvkem Silnice probíhají liniové prvky Terénní stupeň (oboustranně symetricky) a jednostranně liniový prvek Voda - břehová čára. Kolize, která by vznikla symbolizací prvku Silnice, je eliminována odsunem souběžných liniových prvků se zachováním jejich pořadí. Břehová čára je odsunuta paralelně od Silnice a s ní slícovaného terénního stupně o tolik, aby \"vousy nezasahovaly do areálového prvku Voda.\r\nLiniový prvek Voda je slícován se souběžnými liniovými prvky Terénní reliéf.",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_68",
        "description": "\r\nV okolí křížení dvou liniových prvků Silnice je na malé ploše seskupení navzájem velmi blízkých bodových prvků. Seskupení je tvořeno bodovým prvkem Propustek a dvěma bodovými prvky Kříž. Jejich symbolizací by došlo ke vzájemným kolizím, kterým bude zabráněno eliminací toho bodového prvku Kříž, který leží v bezprostřední blízkosti prvku Propustek.",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_69",
        "description": "\r\nLiniový prvek Průjezdní komunikace procházející středem hráze rybníka je řídícím prvkem a proto si zachová svou polohu. S ní jsou slícovány souběžné liniové prvky Terénního reliéfu. Průběh liniového prvku Voda - břehová čára je upraven tak, že je odsunut ve dvou svých částech: souběžných s hrází rybníka a s liniovým prvkem Terénní stupeň. Průběh břehové čáry mezi odsunutými částmi je modifikován tak, aby tvořila hladkou souvislou kartografickou čáru a aby se celá nová část břehové čáry co nejvíce blížila původnímu průběhu. \r\nBodový prvek Kaple je odsunut tak, aby jeho symbol nezasahoval příliš do Průjezdní komunikace a po odsunu nezpůsobil následné závažné kolize s ostatními prvky. \r\n \r\nPozn.: Další kolize v této situaci již byly popsány jako součást jiných situací.",
        "childern": []
    },
    {
        "caption": "Doplňující obrázek k situaci č.6",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_7",
        "description": "Doplňující obrázek k situaci č.6.",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_70",
        "description": "",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_71",
        "description": "\r\nPrůběhy liniových prvků Terénní reliéf podél symbolizovaného řídícího liniového prvku Silnice jsou s ním v kolizi. Tato je řešena slícováním těch částí prvků Terénní reliéf na tuto Silnici v místech, kde vzájemná vzdálenost nepřekročí stanovenou prahovou hodnotu. Prvky Terénní reliéf, nebo jejich části, které probíhají ve vzdálenosti větší, než je stanovený práh, slícována nejsou. Pokud tyto části tvoří se slícovanou částí jeden fyzický objekt, jsou navzájem propojeny plynulou souvislou hladkou kartografickou čárou.",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_72",
        "description": "\r\nSymbolizace paralelně běžících liniových prvků Dálnice a Silnice by způsobila vzájemné kolize. Jejím řešením je odsun prvku Silnice od prvku Dálnice tak, aby se po odsunu navzájem nedotýkaly a byl mezi nimi vytvořen vzájemný odstup.\r\nKolize souběžných liniových prvků Voda a prvků Terénní stupeň po jeho obou stranách jsou odstraněny tím, že jsou prvky Terénní stupeň slícovány s liniovým prvkem Voda.",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_73",
        "description": "",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_74",
        "description": "",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_75",
        "description": "\r\nVšechny tři dílčí situace řeší kolize, které by vznikly symbolizací spárovaných bodových prvků Věžová stavba (1), Kříž (2) a Věžová stavba na kostele s trigonometrickým bodem (3). Kolizím zabrání:\r\n(1) - odsun obou prvků Věžová stavba přičemž bude zachováno jejich umístění v příslušném areálovém prvku Blok budov jehož je každý prvek součástí. Původní objekty Věžové stavby jsou v městské zástavbě v rozích protějších bloků budov přes  ulici.\r\n(2) - odsun jednoho prvku Kříž do místa, kde nezpůsobí nové závažné kolize.\r\n(3) - postup popsaný již dříve v situaci č. X",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_76",
        "description": "",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_77",
        "description": "",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_78",
        "description": "",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_79",
        "description": "",
        "childern": []
    },
    {
        "caption": "Symbolizace térénního stupně značkou jámy.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_8",
        "description": "\r\nTerénní stupeň kruhového tvaru šířky do 15 m se vyjadřuje bodovou značkou Jáma (zn. č. 607) v jeho středu.",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_80",
        "description": "",
        "childern": []
    },
    {
        "caption": "Odstranění liniového prvku stromořadí v intravilánu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_81",
        "description": "V husté sídelní zástavbě není dostatek místa pro zákreslení liniového prvku stromořadí. Odsun ostatních blízkých liniových prvků terénního reliéfu a hranice užívání není možný, proto je stromořadí jako prvek nejnižší priority vyřazen z dalšího zpracování.",
        "childern": []
    },
    {
        "caption": "Nastavení symbolu dle situace.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_82",
        "description": "\r\nLiniovým prvkem Vegetace - lesní průsek vedou dva liniové prvky Elektrické vedení. Kolizi vzniklou jejich symbolizací je možné řešit změnou pravidla zobrazování. Jsou přípustné dva možné způsoby:  \r\na) rozšířením průseku \r\nb) znázorněním průseku jako jednostranného.\r\nPrůběh linií hranic průseků je třeba upravit tak, aby nepřesahovaly za hranici areálu Užívání půdy.",
        "childern": []
    },
    {
        "caption": "Umazání kresby když není možné využít maskování.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_83",
        "description": "\r\nKoncová část průběhu liniového prvku Vegetace - průsek se kříží s liniovým prvkem Terénní reliéf. Symbol prvku průsek je před místem křížení ukončen v takové vzdálenosti, aby nedošlo ke kolizi ani k dotyku obou symbolů.",
        "childern": []
    },
    {
        "caption": "Nastavení pravidel zobrazení ArcGIS",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_84",
        "description": "",
        "childern": []
    },
    {
        "caption": "Nastavení pravidel zobrazení ArcGIS pro plavební kanál.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_85",
        "description": "",
        "childern": []
    },
    {
        "caption": "Nastavení pravidel zobrazení ArcGIS pro jez.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_86",
        "description": "",
        "childern": []
    },
    {
        "caption": " Zvýraznění krátkého jezu.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_87",
        "description": "\r\n\r\nLiniový prvek jez na liniovém prvku jednočarý tok je kratší, než je stanovená minimální délka (1,3 mm v měřítku mapy ZM10 i ZM25). Jez je důležitým prvkem, proto není vyloučen ze zpracování, ale je zvětšen a kartograficky vyjádřen liniovou značkou orientovanou stejně, jako linie původního prvku.",
        "childern": []
    },
    {
        "caption": "",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_88",
        "description": "",
        "childern": []
    },
    {
        "caption": " Zjednodušená symbolizace liniového prvku zeď",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_89",
        "description": "\r\nMezi dvěma liniovými prvky komunikace je velké nahuštění dalších liniových prvků různých kategorií. Standardní symbolizace zúčastněných liniových prvků Zeď a Terénní stupeň vyžadují poměrně hodně místa a způsobily by řadu kolizí, jejichž řešením četnými a komplikovanými vzájemnými odsuny by došlo ke snížení celkové kvality mapy. Proto bude zjednodušena symbolizace prvku zeď použitím pouze jeho základní linie, nebo jejím vypuštěním..",
        "childern": []
    },
    {
        "caption": " Ztotožnění obrysu plochy s kresbou silnice.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_9",
        "description": " Podél části liniového prvku Silnice dochází k jednostrannému souběžnému průběhu části hranice prvku Chráněné území.",
        "childern": []
    },
    {
        "caption": " Nastavení orientace u nesymetrického liniového symbolu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_90",
        "description": "",
        "childern": []
    },
    {
        "caption": "Symbolizace bodového prvku Kostel s jedním bodovým prvkem Věž",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_91",
        "description": "V blízkosti bodového prvku Kostel, který má jeden bodový prvek Věž, je bodový prvek Kříž. Tyto bodové prvky jsou ve vzájemné kolizi, která je řešena záměnou bodové značky Věž za bodovou značku Kostel. Kolidující bodový prvek Kříž je odsunut po spojnici tvořené novou polohou bodového prvku Kostel a jeho původní polohou.",
        "childern": []
    },
    {
        "caption": "Odsun bodového prvku Pomník od bodového prvku Bod tíhového bodového pole",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_92",
        "description": "Malá vzdálenost mezi bodovými prvky Bod tíhového bodového pole a Pomník způsobí kolizi jejich symbolizací. Řešením této kolize je odsun méně důležitého prvku Pomník o minimální potřebnou vzdálenost, přičemž je nutné řešit kolize tohoto odsunutého prvku s ostatními.",
        "childern": []
    },
    {
        "caption": "Výběr a odsun bodových prvků Kříž.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_93",
        "description": "\r\nPřed budovou kostela, jehož bodový prvek Věž je současně bodovým prvkem Zhušťovací bod, jsou v malé vzdálenosti dva bodové prvky Kříž. Incidence bodových prvků Věž, Zhušťovací bod a Kostel je analogií Situace X a je řešena stejným způsobem. Vzájemná kolize dvou bodových prvků Kříž a bodové značky Kostel s trvale signalizovaným zhušťovacím bodem je řešena vyloučením jednoho prvku Kříž z dalšího zpracování a odsunem druhého po spojnici nové bodové značky Kostela (původní původní polohy prvku Věž) a odsouvaného prvku Kříž. Odstraňuje se ten bodový prvek Kříž, jehož odsun by způsobil více následných kolizí.",
        "childern": []
    },
    {
        "caption": " Typizace zobrazení křížové cesty",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_94",
        "description": "\r\nVětší množství bodových prvků Kříž vytváří dva shluky bodových objektů, v nichž bodové prvky Kříž kolidují navzájem i s okolními prvky. Kolize v každém seskupení budou řešeny samostatně. V menším seskupení je opět kombinace bodových prvků Kostel, Věž a Trigonomentrický bod - již popsaná i s popisem řešení v Situacích X a Y. \r\nŘešení vzájemných kolizí bodových prvků Kříž ve větším shluku je ukázkovým případem typifikace spočívající v určení a zachování signifikantních prvků ve své původní poloze a naopak v eliminaci  a/nebo odsunutí prvků nevýznamných. Kolize zachovaných bodových prvků  Kříž s ostatními prvky jsou řešeny tak, aby byl zachován tvar a struktura shluku.",
        "childern": []
    },
    {
        "caption": "Typizace shluku bodových prvků Komín",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_95",
        "description": "\r\nNěkolik bodových prvků Komín vytváří  shluk tvaru souvislé linie, v nichž by symbolizované bodové prvky navzájem kolidovaly. Řešení vzájemných kolizí bodových prvků Komín je, obdobně jako Situace 94, ukázkovým případem typifikace. Spočívá v určení a zachování signifikantních prvků (krajních prvků v línii, středový prvek) ve své původní poloze a ve snížení počtu nevýznamných prvků sloučením vždy dvou prvků, ležících mezi krajním a středovým prvkem. Zachované prvků Komín musí v požadované míře dodržet původní tvar a strukturu shluku.",
        "childern": []
    },
    {
        "caption": " Výběr definičních bodů popisu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_96",
        "description": "",
        "childern": []
    },
    {
        "caption": " Správné zobrazení situace č.96 v mapě.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_97",
        "description": " Správné zobrazení situace č.96 v mapě. Usazovací nádrž, která je součástí ČOV se nepopisuje.",
        "childern": []
    },
    {
        "caption": "\r\nOdsun liniového prvku Elektrické vedení a incidujícího bodového prvku Sloup od liniového prvku Silnice.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_98",
        "description": "",
        "childern": []
    },
    {
        "caption": "\r\nOdsun bodového prvku Sloup el. vedení a navazující části liniového prvku Elektrické vedení od liniového prvku Silnice.",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData/Situace_99",
        "description": "",
        "childern": []
    },
    {
        "caption": "Data situací",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/SituationsData",
        "description": "",
        "childern": [
            "/Situations/SituationsData/Situace_1",
            "/Situations/SituationsData/Situace_10",
            "/Situations/SituationsData/Situace_100",
            "/Situations/SituationsData/Situace_101",
            "/Situations/SituationsData/Situace_102",
            "/Situations/SituationsData/Situace_103",
            "/Situations/SituationsData/Situace_104",
            "/Situations/SituationsData/Situace_105",
            "/Situations/SituationsData/Situace_106",
            "/Situations/SituationsData/Situace_107",
            "/Situations/SituationsData/Situace_108",
            "/Situations/SituationsData/Situace_109",
            "/Situations/SituationsData/Situace_11",
            "/Situations/SituationsData/Situace_110",
            "/Situations/SituationsData/Situace_111",
            "/Situations/SituationsData/Situace_112",
            "/Situations/SituationsData/Situace_113",
            "/Situations/SituationsData/Situace_114",
            "/Situations/SituationsData/Situace_115",
            "/Situations/SituationsData/Situace_116",
            "/Situations/SituationsData/Situace_117",
            "/Situations/SituationsData/Situace_118",
            "/Situations/SituationsData/Situace_119",
            "/Situations/SituationsData/Situace_12",
            "/Situations/SituationsData/Situace_120",
            "/Situations/SituationsData/Situace_121",
            "/Situations/SituationsData/Situace_122",
            "/Situations/SituationsData/Situace_123",
            "/Situations/SituationsData/Situace_124",
            "/Situations/SituationsData/Situace_125",
            "/Situations/SituationsData/Situace_126",
            "/Situations/SituationsData/Situace_127",
            "/Situations/SituationsData/Situace_13",
            "/Situations/SituationsData/Situace_14",
            "/Situations/SituationsData/Situace_15",
            "/Situations/SituationsData/Situace_16",
            "/Situations/SituationsData/Situace_17",
            "/Situations/SituationsData/Situace_18",
            "/Situations/SituationsData/Situace_19",
            "/Situations/SituationsData/Situace_2",
            "/Situations/SituationsData/Situace_20",
            "/Situations/SituationsData/Situace_21",
            "/Situations/SituationsData/Situace_22",
            "/Situations/SituationsData/Situace_23",
            "/Situations/SituationsData/Situace_24",
            "/Situations/SituationsData/Situace_25",
            "/Situations/SituationsData/Situace_26",
            "/Situations/SituationsData/Situace_27",
            "/Situations/SituationsData/Situace_28",
            "/Situations/SituationsData/Situace_29",
            "/Situations/SituationsData/Situace_3",
            "/Situations/SituationsData/Situace_30",
            "/Situations/SituationsData/Situace_31",
            "/Situations/SituationsData/Situace_32",
            "/Situations/SituationsData/Situace_33",
            "/Situations/SituationsData/Situace_34",
            "/Situations/SituationsData/Situace_35",
            "/Situations/SituationsData/Situace_36",
            "/Situations/SituationsData/Situace_37",
            "/Situations/SituationsData/Situace_38",
            "/Situations/SituationsData/Situace_39",
            "/Situations/SituationsData/Situace_4",
            "/Situations/SituationsData/Situace_40",
            "/Situations/SituationsData/Situace_41",
            "/Situations/SituationsData/Situace_42",
            "/Situations/SituationsData/Situace_43",
            "/Situations/SituationsData/Situace_44",
            "/Situations/SituationsData/Situace_45",
            "/Situations/SituationsData/Situace_46",
            "/Situations/SituationsData/Situace_47",
            "/Situations/SituationsData/Situace_48",
            "/Situations/SituationsData/Situace_49",
            "/Situations/SituationsData/Situace_5",
            "/Situations/SituationsData/Situace_50",
            "/Situations/SituationsData/Situace_51",
            "/Situations/SituationsData/Situace_52",
            "/Situations/SituationsData/Situace_53",
            "/Situations/SituationsData/Situace_54",
            "/Situations/SituationsData/Situace_55",
            "/Situations/SituationsData/Situace_56",
            "/Situations/SituationsData/Situace_57",
            "/Situations/SituationsData/Situace_58",
            "/Situations/SituationsData/Situace_59",
            "/Situations/SituationsData/Situace_6",
            "/Situations/SituationsData/Situace_60",
            "/Situations/SituationsData/Situace_61",
            "/Situations/SituationsData/Situace_62",
            "/Situations/SituationsData/Situace_63",
            "/Situations/SituationsData/Situace_64",
            "/Situations/SituationsData/Situace_65",
            "/Situations/SituationsData/Situace_66",
            "/Situations/SituationsData/Situace_67",
            "/Situations/SituationsData/Situace_68",
            "/Situations/SituationsData/Situace_69",
            "/Situations/SituationsData/Situace_7",
            "/Situations/SituationsData/Situace_70",
            "/Situations/SituationsData/Situace_71",
            "/Situations/SituationsData/Situace_72",
            "/Situations/SituationsData/Situace_73",
            "/Situations/SituationsData/Situace_74",
            "/Situations/SituationsData/Situace_75",
            "/Situations/SituationsData/Situace_76",
            "/Situations/SituationsData/Situace_77",
            "/Situations/SituationsData/Situace_78",
            "/Situations/SituationsData/Situace_79",
            "/Situations/SituationsData/Situace_8",
            "/Situations/SituationsData/Situace_80",
            "/Situations/SituationsData/Situace_81",
            "/Situations/SituationsData/Situace_82",
            "/Situations/SituationsData/Situace_83",
            "/Situations/SituationsData/Situace_84",
            "/Situations/SituationsData/Situace_85",
            "/Situations/SituationsData/Situace_86",
            "/Situations/SituationsData/Situace_87",
            "/Situations/SituationsData/Situace_88",
            "/Situations/SituationsData/Situace_89",
            "/Situations/SituationsData/Situace_9",
            "/Situations/SituationsData/Situace_90",
            "/Situations/SituationsData/Situace_91",
            "/Situations/SituationsData/Situace_92",
            "/Situations/SituationsData/Situace_93",
            "/Situations/SituationsData/Situace_94",
            "/Situations/SituationsData/Situace_95",
            "/Situations/SituationsData/Situace_96",
            "/Situations/SituationsData/Situace_97",
            "/Situations/SituationsData/Situace_98",
            "/Situations/SituationsData/Situace_99"
        ]
    },
    {
        "caption": "|Statistika",
        "cardType": "KnowledgeBaseCard",
        "ref": "/Situations/Statistics",
        "description": "",
        "childern": []
    },
    {
        "caption": "Rozšíření ArcGIS",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement",
        "description": "",
        "childern": [
            "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/Insertofcartographiccontrolpoints",
            "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/LabelFontAdjustements",
            "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/RidgeFineRenedering",
            "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/RoadjoinwithBUA",
            "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/Setcartographicrule"
        ]
    },
    {
        "caption": "|V průsečíku s polygonem",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/Insertofcartographiccontrolpoints/Atpolygonintersection",
        "description": "",
        "childern": []
    },
    {
        "caption": "|V průsečíku s linií",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/Insertofcartographiccontrolpoints/Atpolylineintersection",
        "description": "",
        "childern": []
    },
    {
        "caption": "Vložení kontrolních bodů",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/Insertofcartographiccontrolpoints",
        "description": "",
        "childern": [
            "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/Insertofcartographiccontrolpoints/Atpolygonintersection",
            "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/Insertofcartographiccontrolpoints/Atpolylineintersection"
        ]
    },
    {
        "caption": "Nastavení rozpalu u popisu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/LabelFontAdjustements",
        "description": "",
        "childern": []
    },
    {
        "caption": "Pěkné kreslení náspu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/RidgeFineRenedering",
        "description": "",
        "childern": []
    },
    {
        "caption": "Vstup komunikace do intravilánu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/RoadjoinwithBUA",
        "description": "",
        "childern": []
    },
    {
        "caption": "Nastavení kartografického pravidla",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement/Setcartographicrule",
        "description": "",
        "childern": []
    },
    {
        "caption": "ArcGIS",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS",
        "description": "",
        "childern": [
            "/SoftwareLibraries/com.esri.www.ArcGIS/ArcGISEnhancement",
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset"
        ]
    },
    {
        "caption": "Aggregate Points",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.AggregatePoints",
        "description": "\nCreates polygon features around clusters of proximate point features.\n\n* Polygons are created around clusters of three or more points within the aggregation distance.\n\n* A one-to-many relationship table—named the same as the output feature class appended with _Tbl—will be created that links the aggregated polygons to their source point features. This table is in the same location as the output feature class and contains two fields, OUTPUT_FID and INPUT_FID, storing the aggregated feature IDs and their source feature IDs, respectively. The link can become incorrect when any of the input or output features are modified. With this table, you can derive necessary attributes for the output features from their source features using appropriate geoprocessing tools.\n\n* Point aggregation may introduce polygon holes or areas where adjacent polygon boundaries meet at one vertex.\n\nViz také:http://desktop.arcgis.com/en/desktop/latest/tools/cartography-toolbox/aggregate-points.htm",
        "childern": []
    },
    {
        "caption": "Aggregate Polygons",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.AggregatePolygons",
        "description": "\nCombines polygons within a specified distance of each other into new polygons.\n\n* This tool is intended for moderate scale reduction and aggregation when input features can no longer be represented individually due to the limited map space or the required data resolution. Aggregation will only happen where two polygon boundaries are within the specified aggregation distance to each other. There will be no self-aggregation, meaning no aggregation within an input polygon feature itself along its boundary, and no aggregation between any parts of a multipart polygon feature.\n\n* Using the orthogonal option will construct orthogonally shaped output features. This option is best suited for use with input features that have predominantly orthogonal edges. In some cases, less aggregation will occur in order to accommodate this. For example, two square buildings situated diagonally apart within the aggregation distance may not be aggregated because there is no clear connection that can be made while preserving orthogonality. The nonorthogonal option will produce more organically shaped results.\n\n* Use barrier features to prevent aggregation from occurring across boundaries. Examples include preventing land cover from aggregating across rivers or buildings aggregating across streets. Barriers can be either lines or polygons, and multiple barrier feature classes can be used simultaneously.\n\n* If the input feature class is a layer referencing a representation, and there are shape overrides on any of the input features, the shape overrides will be assessed in the aggregation, not the feature geometry.\n\n* The output feature class will not contain any geographic attributes from the input features. A one-to-many relationship table can be optionally created to link the aggregated polygons to their source polygons. This link can become incorrect when any of the input or output features are modified.\n\n* If the input features contain Z values, the Z values can be preserved if specified in the environment settings. Where the output vertices are not changed, the input Z values will be carried over to the output vertices; otherwise, a Z value will be derived for new vertices, either from existing Z values or through interpolation.\n\n* Processing a large input dataset may exceed memory limitations. In this case, consider processing input data by partition by identifying a relevant polygon feature class in the Cartographic Partitions environment setting. Portions of the data, defined by partition boundaries, will be processed sequentially. The resulting output feature class consistent at partition edges, but output features crossing partitions, will be split at the partition line. A field called IS_SPLIT in the output feature class will have a value of 1 in this instance.\n\n\n.. image:: http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/GUID-7C771F8C-2E59-4DE5-9E46-E74A1586346D-web.gif\n\nViz také:http://desktop.arcgis.com/en/desktop/latest/tools/cartography-toolbox/aggregate-polygons.htm",
        "childern": []
    },
    {
        "caption": "Collapse Dual Lines To Centerline",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.CollapseDualLinesToCenterline",
        "description": "\nCombines polygons within a specified distance of each other into new polygons.\n\n* This tool is intended for regular, near parallel pairs of lines, such as large-scale road casings. Centerlines will be created only between open-ended lines not inside closed lines which are likely street blocks. The tool is not intended to simplify multiple-lane highways with interchanges, ramps, overpasses and underpasses, or railways with multiple, merging tracks. Use the Merge Divided Roads tool instead.\n\n* This tool cannot be executed within an edit session.\n\n* The output feature class will not carry the geographic attributes from the input lines, but contain the following three new fields:\n\n   * LnType—Contains the following line type values:\n      * Value of 1 for derived centerlines\n      * Value of 2 for outlines around relatively complicated intersections where centerlines are not generated, lines representing roads with a width beyond the specified range, and other broken or unpaired lines.\n      * Value of 3 for lines with unclear source casings (they usually connect two closely located intersections which may belong to one large intersection in reality.)\n   * LeftLn_FID—Carries the object ID of the input line to the left of a derived centerline. This field value will be zero for lines of LnType 2 and 3.\n   * RightLn_FID—Carries the object ID of the input line to the right of a derived centerline. This field value will be zero for lines of LnType 2 and 3.\n\nYou can use the LnType values to further inspect the unresolved intersections and wider roads; and you can use the LeftLn_FID and RightLn_FID fields along with Join Field tool to transfer the attributes from source lines to the centerlines as needed.\n\n.. image:: http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/GUID-C8553DDB-6E9E-4A51-B5CA-227D4001806D-web.gif\n\nViz také:http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/collapse-dual-lines-to-centerline.htm",
        "childern": []
    },
    {
        "caption": "Collapse Road Detail",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.CollapseRoadDetail",
        "description": "\n\nCollapses small, open configurations of road segments that interrupt the general trend of a road network, such as traffic circles, for example, and replaces them with a simplified depiction.\n\nConfigurations are collapsed regardless of road class if the diameter across the open area is less than or equal to the Collapse Distance parameter. All uncollapsed roads from the input collection are copied to the output feature class.\n\n.. image:: http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/GUID-9D8D3DE2-3E2F-4609-8373-B8EAEE941870-web.png\n\nViz také:http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/collapse-road-detail.htm",
        "childern": []
    },
    {
        "caption": "Create Cartographic Partitions",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.CreateCartographicPartitions",
        "description": "\n\nCreates a mesh of polygon features that cover the input feature class where each polygon encloses no more than a specified number of input features, determined by the density and distribution of the input features.\n\nThe resulting partition feature class is ideally suited for the Cartographic Partitions geoprocessing environment setting. The Cartographic Partitions environment setting dictates to certain generalization or conflict-resolution geoprocessing tools to load and process input features by partition. These tools operate contextually, meaning that multiple features, possibly from multiple themes, must be loaded simultaneously. Memory limitations are encountered with large datasets. Partitioning allows large datasets to be processed by these tools in portions sequentially.\n\nThis tool creates a polygon feature class designed to be used in the Cartographic Partitions geoprocessing environment setting. Tools that honor this environment setting process input features in portions defined by the partition polygons to avoid exceeding memory limitations. The following tools honor the Cartographic Partitions environment setting:\n\n* The Aggregate Polygons tool\n* The Collapse Road Detail tool\n* The Delineate Built-Up Areas tool\n* The Detect Graphic Conflict tool\n* The Merge Divided Roads tool\n* The Resolve Building Conflicts tool\n* The Resolve Road Conflicts tool\n* The Thin Road Network tool\n\nInput features should correspond to the features that you intend to process together for multiscale display. For example, if you intend to use the Thin Road Network tool to process a feature class containing streets together with another containing highways, enter both of these as inputs to the Create Cartographic Partitions tool to create partitions that are relevant to the distribution and density of both datasets considered together.\n\n.. image:: http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/GUID-9E3837C6-667F-45A5-96D7-9085E0A12F5C-web.png\n\nViz také:http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/create-cartographic-partitions.htm",
        "childern": []
    },
    {
        "caption": "ArcGIS Generalization Toolset",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset",
        "description": "Contains tools that simplify or refine features for display at smaller scales.\n\nViz také:http://desktop.arcgis.com/en/desktop/latest/tools/cartography-toolbox/an-overview-of-the-generalization-toolset.htm",
        "childern": [
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.AggregatePoints",
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.AggregatePolygons",
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.CollapseDualLinesToCenterline",
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.CollapseRoadDetail",
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.CreateCartographicPartitions",
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.MergeDividedRoads",
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.SimplifyBuilding",
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.SimplifyLine",
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.SimplifyPolygon",
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.SmoothLine",
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.SmoothPolygon",
            "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.ThinRoadNetwork"
        ]
    },
    {
        "caption": "Merge Divided Roads",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.MergeDividedRoads",
        "description": "\n\nGenerates single-line road features in place of matched pairs of divided road lanes.\n\nMatched pairs of roads or lanes are merged if they are the same road class, trend generally parallel to one another, and are within the merge distance apart. The road class is specified by the Merge Field parameter. All nonmerged roads from the input collection are copied to the output feature class.\n\n.. image:: http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/GUID-5064CE90-BA0F-466C-9E47-273DE124BE62-web.png\n\nViz také:http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/merge-divided-roads.htm",
        "childern": []
    },
    {
        "caption": "Simplify Building",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.SimplifyBuilding",
        "description": "\n\nSimplifies the boundary or footprint of building polygons while maintaining their essential shape and size.\n\nThe Minimum area parameter applies to simplified buildings only. Any buildings that are smaller than the minimum area after the simplification process is completed will be removed from the output feature class.\n\nThe output feature class will include a field named BLD_STATUS to indicate simplification status as follows:\n\n* 1 = a single building has been simplified\n* 2 = a single building has been simplified to its minimum bounding rectangle\n* 3 = a building smaller than the tolerance squared has been simplified to its minimum bounding rectangle\n* 5 = a building that has not been simplified\n\nLegacy: Prior to ArcGIS version 10, BLD_STATUS = 4 indicated simplified or partially simplified buildings connected with straight lines. BLD_STATUS = 4 is no longer used.\n\nCaution: If a field named BLD_STATUS exists in the input feature class it will be present in the output feature class populated with new values. Existing values will be overwritten. If you want to preserve the existing values, create a new field on the input feature class and copy the existing values of the BLD_STATUS field to this new field.\n\nIf the Check for spatial conflicts parameter is used, the tool will detect spatial conflicts and add a new field named SimBldFlag to the output to store conflict flags. A value of 0 means no conflict; a value of 1 means conflict.\n\nCaution: If a field named SimBldFlag exists in the input feature class it will be present in the output feature class populated with new values. Existing values will be overwritten even if this parameter is unchecked (NO_CHECK in Python). When spatial conflicts are not being checked, this existing field will be overwritten with NULL values. If you want to preserve the existing values, create a new field on the input feature class, and copy the existing values of the SimBldFlag field to this new field.\n\nThis tool cannot be executed within an edit session.\n\nInput Z values can be preserved if specified in the Environment Settings. Where output vertices are coincident to input feature vertices, Z values will be transferred to output vertices. Elsewhere, Z values will be derived either from existing Z values or through interpolation.\n\nInvalid (self-intersecting) geometry may be created during the simplification process and will be repaired but not improved. For example, if a polygon crosses itself, the polygon will become a multiple-part polygon but will still look self-crossing.\n\n\n.. image:: http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/GUID-46B1682E-6993-47D0-AAED-A7D5F0F3669A-web.gif\n\nViz také:http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/simplify-building.htm",
        "childern": []
    },
    {
        "caption": "Simplify Line",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.SimplifyLine",
        "description": "\n\nSimplifies lines by removing extraneous bends while preserving essential shape.\n\nThere are two simplification methods:\n\n* The Retain critical points method (POINT_REMOVEalgorithmPOINT_REMOVE in Python) is faster but less refined. It removes redundant vertices. Use this method for data compression or more coarse simplification. The angularity of the resulting line increases significantly as the tolerance increases, so the result may be less aesthetically pleasing than the input.\n\n* The Retain critical bends method (BEND_SIMPLIFY in Python) is slower but typically produces results that are more faithful to the original features. It operates by eliminating insignificant bends along lines. Use this method for more refined simplification.\n\n\nThe Simplification Tolerance value determines the degree of simplification. Set the tolerance equal to or greater than the minimum allowable spacing between graphic elements. Using the same tolerance, Retain critical points produces rougher and more simplified results than Retain critical bends.\n\nThe tool produces two output feature classes: a line feature class to store the simplified lines and a point feature class to store points that represent any lines that were collapsed to zero length. The point output name and location are automatically derived from the output line name with a _Pnt suffix. The output line feature class contains all the fields present in the input feature class. The output point feature class does not contain any of these fields.\n\nThere are options for handling topological errors in the output:\n\n* The Check for topological errors parameter identifies topological errors introduced by the simplification process. When the option is checked, the Resolve topological errors parameter is also enabled. Checking for topological errors can slow processing speed.\n\n* The output line feature class contains two fields that indicate whether or not a feature has a topological error. InLine_FID and SimLnFlag contain the input feature IDs and topological errors, respectively. A value of 1 indicates an error was introduced; 0 (zero) indicates that no errors were introduced.\n\n* The flag values will remain in place after a topological error has been resolved. Use the SimLnFlag field to examine features that have topological errors.\n\nThe Check for topological errors and Resolve topological errors parameters cannot be used within an edit session. Disable the Check for topological errors parameter in order to run the tool within an edit session.\n\n.. image:: http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/GUID-51039D75-F728-4519-8989-03A62705E5E3-web.gif\n\nViz také:http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/simplify-line.htm",
        "childern": []
    },
    {
        "caption": "Simplify Polygon",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.SimplifyPolygon",
        "description": "\n\nSimplifies polygons by removing extraneous bends while preserving essential shape.\n\n* There are two simplification methods:\n\n  * The Retain critical points method (POINT_REMOVE in Python) is the faster of the two processes. It removes redundant vertices. Use this method for data compression or more coarser simplification, especially when the data is well-known. The angularity (sharp corners) of the resulting polygon will increase significantly as the tolerance increases, so the polygon may become less aesthetically pleasing.\n\n  * The Retain critical bends method (BEND_SIMPLIFY in Python) is slower but typically produces results that are more faithful to the original and more aesthetically pleasing. It operates by eliminating insignificant bends along polygons. Use this method for less, more refined simplification.\n\n* The Minimum Area parameter applies to simplified polygons only. Any polygons which are smaller than the minimum area after the simplification process is completed will be removed from the output feature class. For a group of adjacent polygons which share common edges, it applies to the total area of the group.\n\n* The tool produces two output feature classes, a polygon feature class to store the simplified polygons and a point feature class to store points that represent any polygons that were collapsed to zero-area. The point output name and location is automatically derived from the output polygon name with a _Pnt suffix. The polygon output will contain all the input fields; the point output will not contain any of the input fields.\n\n* Multipart polygons are simplified as individual parts.\n\n* There are three options for handling topological errors in the output:\n\n  * Do not check for topological errors (NO_CHECK in Python) : the result generated by the simplification process will not be checked for topological errors. Processing will be faster. Use this option only when you have confidence in the topological accuracy of the data.\n\n  * Flag errors (FLAG_ERRORS in Python): the result of the simplification process will be checked for topological errors, features with topological error will be flagged. Use this option when the importance of identifying topological errors is greater than the importance of resolving errors. This option is not supported in an edit session.\n\n    * The polygon output will contain two new fields to indicate whether or not a feature has a topological error. InPoly_FID and SimPlyFlag contain the input feature IDs and topological errors, respective.\n\n    * The InPoly_FID field links the collapsed points to their input polygons.\n\n    * In the SimPlyFlag field, a value of 1 indicates an error was introduced; 0 (zero) indicates that no error was introduced.\n\n    * The flag values will remain in place after a topological error has been resolved. Use the SimPlyFlag field to examine features which have topological errors.\n\n  * Resolve topological errors (RESOLVE_ERRORS in Python): repairs topological errors introduced by the simplification process. Processing time will be longer This option is not supported in an edit session.\n\n    * The tolerance specified may be suitable for a majority of the polygons but not for all, especially those in congested areas. When a topological error is detected after the first round of simplification, the involved boundary segments (not the entire polygons) will be located and a reduced tolerance will be used\n\n    * This reduced tolerance is fifty percent of that used previously. This new tolerance will be used to resimplify these segments. This iteration will repeat as many times as needed until no more topological errors are found.\n\n    * The polygon output feature class will contain the same number of polygons as in the input, and it will have two new fields, MaxSimpTol and MinSimpTol, which store the maximum and minimum tolerances actually used in simplifying each polygon through the iteration. If no errors were introduced, the values of MaxSimpTol and MinSimpTol will be the same as the specified simplification tolerance.\n\n    * A small polygon near a larger polygon can end up inside the larger polygon due to a relatively large Simplification Tolerance value. This spatial relationship error will not be detected by the program.\n\n  * For the NO_CHECK and FLAG_ERRORS options, self-intersecting geometry may be created during the simplification process and will be automatically repaired. For example, if a polygon crosses itself, the polygon will be repaired to become a multipart polygon such that no part crosses any other part, although the polygon will still look self-crossing.\n\n* The point output will be populated when the NO_CHECK or the FLAG_ERRORS are used, or if the Keep collapsed points check box is checked. If an input polygon contains multiple parts and one of the parts becomes a collapsed point, the point representing that part will also be included in the point output.\n\n\n.. image:: http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/GUID-F7671E5D-F985-4874-843A-28F1E9AEF784-web.gif\n\nViz také:http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/simplify-polygon.htm",
        "childern": []
    },
    {
        "caption": "Smooth Line",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.SmoothLine",
        "description": "\n\nSmooths sharp angles in lines to improve aesthetic or cartographic quality.\n\n* There are two smoothing methods to choose from:\n\n  * The Polynomial Approximation with Exponential Kernel (PAEK) method (PAEK in Python) smooths lines based on a smoothing tolerance. Each smoothed line may have more vertices than its source line. The Smoothing Tolerance parameter controls the length of a \"moving\" path used in calculating the new vertices. The shorter the length the more detail that will be preserved and the longer the processing time.\n\n  * The Bezier interpolation method (BEZIER_INTERPOLATION in Python) smooths lines without using a tolerance by creating Bezier curves to match the input lines. If the output is a shapefile, the Bezier curves will be approximated, since true Bezier curves cannot be storied in shapefiles.\n\n* Smoothing may introduce topological errors such as line crossings. Use the Flag errors option (FLAG_ERRORS in Python) in the Handle Topological Errors parameter to identify these errors. Two fields will be added—InLine_FID and SmoLnFlag—to contain input feature IDs and topological errors. Values of 1 in the SmoLnFlag field indicate a topology error; 0 (zero) indicates no error. The InLineFID field links the output lines to their input lines. The Flag errors option cannot be used within an edit session.\n\nInvalid (self-intersecting) geometry may be created during the smoothing process and will be repaired but not improved. For example, if a line self-crosses it will become a multipart line but will still appear self-crossing.\n\n.. image:: http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/GUID-93674BF2-D7F6-4545-A4D6-8C90F9AC8190-web.gif\n\nViz také:http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/smooth-line.htm",
        "childern": []
    },
    {
        "caption": "Smooth Polygon",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.SmoothPolygon",
        "description": "\n\nSmooths sharp angles in polygon outlines to improve aesthetic or cartographic quality.\n\n* There are two smoothing methods to choose from:\n\n  * The PAEK (Polynomial Approximation with Exponential Kernel) method smooths polygons based on a smoothing tolerance. Each smoothed polygon may have more vertices than its source polygon. The Smoothing Tolerance parameter controls the length of a \"moving\" path used in calculating the new vertices. The shorter the length the more detail that will be preserved and the longer the processing time.\n\n  * The Bezier interpolation method (BEZIER_INTERPOLATION in Python) smooths polygons without using a tolerance by creating Bezier curves to match the input lines. If the output is a shapefile, the Bezier curves will be approximated, since true Bezier curves cannot be stored in shapefiles.\n\n* Smoothing may introduce topological errors such as polygon outline crossings. Use the Flag errors option (FLAG_ERRORS in Python) in the Handle Topological Errors parameter to identify these errors. Two fields will be added—InPoly_FID and SmoPlyFlag—to contain input feature IDs and topological errors. Values of 1 in the SmoPlyFlag field indicate a topology error; 0 (zero) indicates no error. The InPoly_FID field links the output polygons to their input polygons. The Flag errors option cannot be used within an edit session.\n\n\n.. image:: http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/GUID-B4894A0E-09EC-4C23-B1DD-2B5F519F8481-web.jpg\n\nViz také:http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/smooth-polygon.htm",
        "childern": []
    },
    {
        "caption": "Thin Road Network",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.esri.www.ArcGIS/GeneralizationToolset/GeneralizationToolset.ThinRoadNetwork",
        "description": "\n\nGenerates a simplified road network that retains connectivity and general character for display at a smaller scale.\n\nThis tool does not generate new output. It assigns values in Invisibility Field in the input feature classes to identify features that are extraneous and can be removed from view to result in a simplified, yet representative, collection of roads. No feature geometry is altered or deleted.\n\nFeatures are not actually deleted by Thin Road Network. To actually remove features, consider using the Trim Line tool.\n\nThe resulting simplified road collection is determined by feature significance, importance, and density. Segments that participate in very long itineraries across the extent of the data are more significant than those required only for local travel. Road classification, or importance, is specified by the Hierarchy Field parameter. The density of the resulting street network is determined by the Minimum Length parameter, which corresponds to the shortest segment that is visually sensible to show at scale.\n\n* The invisibility field must be present and named the same for all input feature classes. Features that should remain visible are assigned a value of 0; those that should be removed from the display are assigned a value of 1. Use a layer definition query or a selection to display the resulting simplified collection (for example, invisibility <> 1). You can use multiple invisibility fields to store different results—corresponding to different output scales—on the same feature class.\n\n* The hierarchy field identifies the relative importance of features to help establish which features are significant. Hierarchy value 1 indicates the most important features with importance decreasing as hierarchy value increases. For optimal results, use no more than five levels of hierarchy. Input roads with Hierarchy = 0 are considered \"locked\" and will remain visible, along with adjacent roads necessary for connectivity. The hierarchy field must be present and named the same for all input feature classes.\n\n* The hierarchy is typically derived from a field that specifies road classification and corresponds to the way that roads are symbolized. It is not related to the concept of hierarchy used in network analysis. Hierarchy values equal to NULL are not accepted by the tool and will raise an error.\n\n* The Minimum Length parameter defines a sense of the resolution or granularity of the resulting simplified road collection. It should correspond to a length that is visually significant to include at the final scale. The results of this tool are a balanced compromise between the requirements posed by hierarchy, visibility locking, resolution, and morphology and connectivity of the road geometry. Therefore, the minimum length value cannot necessarily be measured directly in the resulting feature set.\n\n* Processing large road datasets or a number of datasets together may exceed memory limitations. In this case, consider processing input data by partition by identifying a relevant polygon feature class in the Cartographic Partitions environment setting. Portions of the data, defined by partition boundaries, will be processed sequentially. The resulting feature class(es) will be seamless and consistent at partition edges. See How Thin Road Network works for more information about running this tool with partitioning.\n\n* The integrity of the results of this tool relies on the topological integrity of the inputs. Proper connections must exist at intersections to faithfully represent the connectivity of the road network. See How Thin Road Network works for more information about data requirements and other helpful tips.\n\n* If the inputs include a feature layer pointing to a representation, any geometry overrides associated with that representation will be used as the input geometry to determine the morphology and connectivity of the road collection. Similarly, representation visibility overrides will be honored, ensuring that invisible representations are not included in the resulting road collection and that adjacent roads are handled accordingly to maintain connectivity.\n\n\n.. image:: http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/GUID-14FF0F07-11B1-4382-A38D-2C4945CD201B-web.png\n\nViz také:http://desktop.arcgis.com/en/arcmap/10.3/tools/cartography-toolbox/thin-road-network.htm",
        "childern": []
    },
    {
        "caption": "Java Topology Suite",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/com.vividsolutions.www.JTS",
        "description": "\nThe JTS Topology Suite is an API of 2D spatial predicates and functions. It has the following design goals:\n\n* JTS conforms to the Simple Features Specification for SQL published by the Open GIS Consortium\n\n* JTS provides a complete, consistent, robust implementation of fundamental 2D spatial algorithms\n\n* JTS is fast enough for production use\n\n* JTS is written in 100% pure JavaTM\n\n* JTS is open source (under the LGPL license)\n\nhttp://www.vividsolutions.com/jts/JTSHome.htm",
        "childern": []
    },
    {
        "caption": "Displacement of lines close to each other",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/GrassGISGeneralization/GrassGISGeneralization#displacement",
        "description": "\nThe displacement is used when the lines overlap and/or are close to each other at the current level of detail. In general, displacement methods move the conflicting features apart so that they do not interact and can be distinguished.\n\nThis module implements an algorithm for displacement of linear features based on the Snakes approach. This method generally yields very good results; however, it requires a lot of memory and is not very efficient.\n\nDisplacement is selected by method=displacement.\n\nIt uses the following parameters:\n* threshold - specifies critical distance. Two features interact if they are closer than threshold apart.\n* alpha, beta - These parameters define the rigidity of lines. For larger values of alpha, beta (>=1), the algorithm does a better job at retaining the original shape of the lines, possibly at the expense of displacement distance. If the values of alpha, beta are too small (<=0.001), then the lines are moved sufficiently, but the geometry and topology of lines can be destroyed. Most likely the best way to find the good values of alpha, beta is by trial and error.\n* iterations - denotes the number of iterations the interactions between the lines are resolved. Good starting points for values of iterations are between 10 and 100.\n\nThe lines affected by the algorithm can be specified by the layer, cats and where parameters.\n",
        "childern": []
    },
    {
        "caption": "Network generalization",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/GrassGISGeneralization/GrassGISGeneralization#network",
        "description": "\nUsed for selecting \"the most important\" part of the network. This is based on the graph algorithms. Network generalization is applied if method=network. The algorithm calculates three centrality measures for each line in the network and only the lines with the values greater than thresholds are selected.\n\nThe behaviour of algorithm can be altered by the following parameters:\n* degree_thresh - algorithm selects only the lines which share a point with at least degree_thresh different lines.\n* closeness_thresh - is always in the range (0, 1]. Only the lines with the closeness centrality value at least closeness_thresh apart are selected. The lines in the centre of a network have greater values of this measure than the lines near the border of a network. This means that this parameter can be used for selecting the centre(s) of a network. Note that if closeness_thresh=0 then everything is selected.\n* betweeness_thresh - Again, only the lines with a betweeness centrality measure at least betweeness_thresh are selected. This value is always positive and is larger for large networks. It denotes to what extent a line is in between the other lines in the network. This value is large for the lines which lie between other lines and lie on the paths between two parts of a network. In the terminology of road networks, these are highways, bypasses, main roads/streets, etc.\n\nAll three parameters above can be presented at the same time. In that case, the algorithm selects only the lines which meet each criterion.\nAlso, the outputed network may not be connected if the value of betweeness_thresh is too large.\n",
        "childern": []
    },
    {
        "caption": "Simplification",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/GrassGISGeneralization/GrassGISGeneralization#Simplification",
        "description": "\n(Line) simplification is a process of reducing the complexity of vector features. The module transforms a line into another\nline consisting of fewer vertices, that still approximate the original line. Most of the algorithms described below select\na subset of points on the original line.\n",
        "childern": []
    },
    {
        "caption": "Smoothing",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/GrassGISGeneralization/GrassGISGeneralization#Smoothing",
        "description": "\n(Line) smoothing is a \"reverse\" process to simplification which takes as input a line and produces a smoother approximate of the original.\nIn some cases, this is achieved by inserting new vertices into the original line, and can total up to 4000% of the number\n of vertices in the original. In such an instance, it is always a good idea to simplify the line after smoothing.",
        "childern": []
    },
    {
        "caption": "Grass GIS Generalization",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/GrassGISGeneralization",
        "description": "\nGRASS GIS, commonly referred to as GRASS (Geographic Resources Analysis Support System), is a free and open source Geographic\nInformation System (GIS) software suite used for geospatial data management and analysis, image processing, graphics and maps\nproduction, spatial modeling, and visualization. GRASS GIS is currently used in academic and commercial settings around\nthe world, as well as by many governmental agencies and environmental consulting companies. It is a founding member of\nthe Open Source Geospatial Foundation (OSGeo).\n\nGrass GIS vector based generalization.\n\nhttps://grass.osgeo.org/grass64/manuals/v.generalize.html\n",
        "childern": [
            "/SoftwareLibraries/GrassGISGeneralization/GrassGISGeneralization#displacement",
            "/SoftwareLibraries/GrassGISGeneralization/GrassGISGeneralization#network",
            "/SoftwareLibraries/GrassGISGeneralization/GrassGISGeneralization#Simplification",
            "/SoftwareLibraries/GrassGISGeneralization/GrassGISGeneralization#Smoothing"
        ]
    },
    {
        "caption": "Douglas-Peucker Algorithm",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/GrassGISGeneralization/GrassGISGeneralization.Simplification/GrassGISGeneralization.Simplification.douglas",
        "description": "\nDouglas-Peucker - \"Quicksort\" of line simplification, the most widely used algorithm. Input parameters: input, threshold. For more information, see:\nhttp://geometryalgorithms.com/Archive/algorithm_0205/algorithm_0205.htm.\n",
        "childern": []
    },
    {
        "caption": "PostGIS",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/net.postgis",
        "description": "\nPostGIS is a spatial database extender for PostgreSQL object-relational database.\nIt adds support for geographic objects allowing location queries to be run in SQL.\n\n> SELECT superhero.name FROM city, superhero WHERE ST_Contains(city.geom, superhero.geom) AND city.name = \"Gotham\";\n\nIn addition to basic location awareness, PostGIS offers many features rarely found in other competing spatial databases such as Oracle Locator/Spatial and SQL Server. Refer to PostGIS Feature List for more details.\n\nhttp://postgis.net/docs/manual-2.2/",
        "childern": []
    },
    {
        "caption": "Softwarové knihovny",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries",
        "description": "\nInformace o knihovnách a algoritmech potřebných pro řešení generaliace.\n  ",
        "childern": [
            "/SoftwareLibraries/com.esri.www.ArcGIS",
            "/SoftwareLibraries/com.vividsolutions.www.JTS",
            "/SoftwareLibraries/GrassGISGeneralization",
            "/SoftwareLibraries/net.postgis",
            "/SoftwareLibraries/WebGen"
        ]
    },
    {
        "caption": "WebGen",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen",
        "description": "\nThe WebGen-WPS portal of the Institute of Cartography of the Dresden University of Technology offers potential users\nand developers of web generalisation services for vector data a collection of service descriptions. These provide\nthe basis for their practical integration into existing local processings as well as a the guideance to the development\nof cooperative development. Additionally, this site provides detailed instructions for the local implementation and\ndevelopment of services and the basic service architecture.\n\nhttp://kartographie.geo.tu-dresden.de/webgen_docs/\n    ",
        "childern": [
            "/SoftwareLibraries/WebGen/WebGen.Operator",
            "/SoftwareLibraries/WebGen/WebGen.Processing",
            "/SoftwareLibraries/WebGen/WebGen.Support"
        ]
    },
    {
        "caption": "AggregateBuiltUpArea",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.AggregateBuiltUpArea",
        "description": "Creates a built up area polygon from buildings in a building block.\n\nOperator, created by neun.\n\n======== ================= ========================= \nParametr Typ               Popis                     \n-------- ----------------- ------------------------- \ngeom     FeatureCollection partition polygons        \nminsize  DOUBLE            building minimum distance \nmindist  DOUBLE            building minimum distance \n======== ================= ========================= \n",
        "childern": []
    },
    {
        "caption": "AreaFeatureRemoval",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.AreaFeatureRemoval",
        "description": "Deletes features which are smaller than the submitted tosmall value.\n\nOperator, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection building polygons     \ntoosmall DOUBLE            building minimum size \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "AreaScalingRelative",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.AreaScalingRelative",
        "description": "Enlarges all buildings in a layer relative to their original size.\n\nOperator, created by burg.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection building polygons     \nminarea  DOUBLE            building minimum size \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "AreaScalingSimple",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.AreaScalingSimple",
        "description": "Enlarges all buildings to the minimum size.\n\nOperator, created by burg.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection building polygons     \nminarea  DOUBLE            building minimum size \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "BuildingDisplacement",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingDisplacement",
        "description": "Displace features to minimum distance and care about distance to constraining features such as roads.\n\nOperator, created by neun.\n\n======== ================= ======================================================= \nParametr Typ               Popis                                                   \n-------- ----------------- ------------------------------------------------------- \ngeom     FeatureCollection layer with geometries                                   \ncongeom  FeatureCollection layer with constraining geometries such as roads        \nmindist  DOUBLE            minimum distance between buildings                      \nroaddist DOUBLE            minimum distance to constraining features such as roads \n======== ================= ======================================================= \n",
        "childern": []
    },
    {
        "caption": "BuildingSimplification",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingSimplification",
        "description": "Building Simplification\n\nOperator, created by neun.\n\n========= ================= ===================== \nParametr  Typ               Popis                 \n--------- ----------------- --------------------- \ngeom      FeatureCollection layer with geometries \nminlength DOUBLE            minimum length        \n========= ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "BuildingSimplifyGN",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingSimplifyGN",
        "description": "Simplify Buildings from JAxpand Package\n\nOperator, created by burg.\n\n========= ================= ============================== \nParametr  Typ               Popis                          \n--------- ----------------- ------------------------------ \ngeom      FeatureCollection layer with buildings           \nminlength DOUBLE            buiding segment minimum length \n========= ================= ============================== \n",
        "childern": []
    },
    {
        "caption": "BuildingSimplifyOutline",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingSimplifyOutline",
        "description": "Simplify building outlines.\n\nOperator, created by sstein.\n\n========== ================= ============================== \nParametr   Typ               Popis                          \n---------- ----------------- ------------------------------ \ngeom       FeatureCollection layer with buildings           \nminlength  DOUBLE            segment minimum length         \niterations INTEGER           number of algorithm iterations \n========== ================= ============================== \n",
        "childern": []
    },
    {
        "caption": "BuildingSimplifyToRectangle",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingSimplifyToRectangle",
        "description": "Simplify buildings to rectangles.\n\nOperator, created by neun.\n\n======== ================= ========= \nParametr Typ               Popis     \n-------- ----------------- --------- \ngeom     FeatureCollection buildings \n======== ================= ========= \n",
        "childern": []
    },
    {
        "caption": "BuildingSpreadNarrowParts",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingSpreadNarrowParts",
        "description": "Spread narrow building parts.\n\nOperator, created by sstein.\n\n====================================== ================= ============================================= \nParametr                               Typ               Popis                                         \n-------------------------------------- ----------------- --------------------------------------------- \ngeom                                   FeatureCollection layer with buildings                          \nminDistanceInM                         DOUBLE            buffer width                                  \nshouldVerticesBeFixedAndOnlyEdgesMoved BOOLEAN           should Vertices Be Fixed And Only Edges Moved \n====================================== ================= ============================================= \n",
        "childern": []
    },
    {
        "caption": "BuildingSquareEdges",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingSquareEdges",
        "description": "Square building edges.\n\nOperator, created by neun.\n\n========================= ================= ========================= \nParametr                  Typ               Popis                     \n------------------------- ----------------- ------------------------- \ngeom                      FeatureCollection layer with buildings      \nmaxChangeOfWallAngleInDeg DOUBLE            maxChangeOfWallAngleInDeg \nmaxMovementOfEdgeInM      DOUBLE            maxMovementOfEdgeInM      \n========================= ================= ========================= \n",
        "childern": []
    },
    {
        "caption": "BuildingTypification",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingTypification",
        "description": "Typify buildings or other features.\n\nOperator, created by neun.\n\n========= ================= ===================== \nParametr  Typ               Popis                 \n--------- ----------------- --------------------- \ngeom      FeatureCollection layer with geometries \nmaxnumber INTEGER           number to reduce to   \n========= ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "BuildingTypificationNew",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingTypificationNew",
        "description": "typify buildings or other features\n\nOperator, created by neun.\n\n========= ================= ===================== \nParametr  Typ               Popis                 \n--------- ----------------- --------------------- \ngeom      FeatureCollection layer with geometries \nmaxnumber INTEGER           number to reduce to   \n========= ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "BuildingTypificationStateful",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingTypificationStateful",
        "description": "typify buildings or other features\n\nOperator, created by neun.\n\n========= ================= ================================== \nParametr  Typ               Popis                              \n--------- ----------------- ---------------------------------- \ngeom      FeatureCollection layer with geometries              \ncongeom   FeatureCollection layer with obstructing geometries  \nmaxnumber INTEGER           number to reduce to                \nmindist   DOUBLE            minimum distance between buildings \ngraphid   STRING            id of stored graph                 \n========= ================= ================================== \n",
        "childern": []
    },
    {
        "caption": "CombineLineStrings",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.CombineLineStrings",
        "description": "Combine Roads\n\nOperator, created by neun.\n\n======== ================= =========== \nParametr Typ               Popis       \n-------- ----------------- ----------- \ngeom     FeatureCollection all streets \n======== ================= =========== \n",
        "childern": []
    },
    {
        "caption": "CompressPartitionConstrained",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.CompressPartitionConstrained",
        "description": "Compress buildings in  partition away from to close roads\n\nOperator, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \ncongeom  FeatureCollection layer with roads      \nroaddist DOUBLE            minimum road distance \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "CompressPartitionDirected",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.CompressPartitionDirected",
        "description": "Compress buildings in  partition in one direction\n\nOperator, created by neun.\n\n========= ================= ======================================================= \nParametr  Typ               Popis                                                   \n--------- ----------------- ------------------------------------------------------- \ngeom      FeatureCollection layer with geometries                                   \nfactor    DOUBLE            scaling factor                                          \ndirection DOUBLE            direction in which the compression is done (in degrees) \n========= ================= ======================================================= \n",
        "childern": []
    },
    {
        "caption": "DisplaceConstrainedNew",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.DisplaceConstrainedNew",
        "description": "displace features to minimum distance and care about distance to constraining features such as roads\n\nOperator, created by neun.\n\n======== ================= ======================================================= \nParametr Typ               Popis                                                   \n-------- ----------------- ------------------------------------------------------- \ngeom     FeatureCollection layer with geometries                                   \ncongeom  FeatureCollection layer with constraining geometries such as roads        \nmindist  DOUBLE            minimum distance between buildings                      \nroaddist DOUBLE            minimum distance to constraining features such as roads \n======== ================= ======================================================= \n",
        "childern": []
    },
    {
        "caption": "DisplaceConstrainedNewFast",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.DisplaceConstrainedNewFast",
        "description": "displace features to minimum distance and care about distance to constraining features such as roads\n\nOperator, created by neun.\n\n======== ================= ======================================================= \nParametr Typ               Popis                                                   \n-------- ----------------- ------------------------------------------------------- \ngeom     FeatureCollection layer with geometries                                   \ncongeom  FeatureCollection layer with constraining geometries such as roads        \nmindist  DOUBLE            minimum distance between buildings                      \nroaddist DOUBLE            minimum distance to constraining features such as roads \n======== ================= ======================================================= \n",
        "childern": []
    },
    {
        "caption": "DisplaceConstrainedStateful",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.DisplaceConstrainedStateful",
        "description": "displace features to minimum distance and care about distance to constraining features such as roads\n\nOperator, created by neun.\n\n======== ================= ======================================================= \nParametr Typ               Popis                                                   \n-------- ----------------- ------------------------------------------------------- \ngeom     FeatureCollection layer with geometries                                   \ncongeom  FeatureCollection layer with constraining geometries such as roads        \nmindist  DOUBLE            minimum distance between buildings                      \nroaddist DOUBLE            minimum distance to constraining features such as roads \ngraphid  STRING            id of stored graph                                      \n======== ================= ======================================================= \n",
        "childern": []
    },
    {
        "caption": "DisplaceFeaturesFast",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.DisplaceFeaturesFast",
        "description": "displace features to minimum distance\n\nOperator, created by neun.\n\n======== ================= =============================== \nParametr Typ               Popis                           \n-------- ----------------- ------------------------------- \ngeom     FeatureCollection layer with geometries to buffer \nmindist  DOUBLE            minimum distance                \n======== ================= =============================== \n",
        "childern": []
    },
    {
        "caption": "DisplaceFeaturesFastConstrained",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.DisplaceFeaturesFastConstrained",
        "description": "displace features to minimum distance and care about distance to constraining features such as roads\n\nOperator, created by neun.\n\n======== ================= ======================================================= \nParametr Typ               Popis                                                   \n-------- ----------------- ------------------------------------------------------- \ngeom     FeatureCollection layer with geometries                                   \ncongeom  FeatureCollection layer with constraining geometries such as roads        \nmindist  DOUBLE            minimum distance between buildings                      \nroaddist DOUBLE            minimum distance to constraining features such as roads \n======== ================= ======================================================= \n",
        "childern": []
    },
    {
        "caption": "EnlargeToRectangle",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.EnlargeToRectangle",
        "description": "Enlarges polygons (buildings) to rectangles\n\nOperator, created by sstein.\n\n======== ================= ============================================================================================ \nParametr Typ               Popis                                                                                        \n-------- ----------------- -------------------------------------------------------------------------------------------- \ngeom     FeatureCollection Simplification and rectified enlargement of buildings smaller than the minimum building size \nminarea  DOUBLE            minimum size                                                                                 \n======== ================= ============================================================================================ \n",
        "childern": []
    },
    {
        "caption": "FilterDuplexLineStrings",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.FilterDuplexLineStrings",
        "description": "Filter Duplex Roads\n\nOperator, created by neun.\n\n======== ================= =========== \nParametr Typ               Popis       \n-------- ----------------- ----------- \ngeom     FeatureCollection all streets \n======== ================= =========== \n",
        "childern": []
    },
    {
        "caption": "FilterFeatures",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.FilterFeatures",
        "description": "Filter Features\n\nOperator, created by neun.\n\n========= ================= ======================== \nParametr  Typ               Popis                    \n--------- ----------------- ------------------------ \nfeatures  FeatureCollection layer to filter          \nclassname STRING            classname                \nfilters   STRING            filters (commaseparated) \n========= ================= ======================== \n",
        "childern": []
    },
    {
        "caption": "JGenAreaAggregation",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenAreaAggregation",
        "description": "GenAreaAggregation from jaxpand-genoperators\n\nOperator, created by neun.\n\n========= ================= ============================== \nParametr  Typ               Popis                          \n--------- ----------------- ------------------------------ \ngeom      FeatureCollection layer with geometries          \ntolerance DOUBLE            aggregation distance tolerance \n========= ================= ============================== \n",
        "childern": []
    },
    {
        "caption": "JGenAreaCollapseSkeleton",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenAreaCollapseSkeleton",
        "description": "GenAreaCollapseSkeleton from jaxpand-genoperators\n\nOperator, created by neun.\n\n==================== ================= ===================== \nParametr             Typ               Popis                 \n-------------------- ----------------- --------------------- \ngeom                 FeatureCollection layer with geometries \ndMinEndSegmentLength DOUBLE            dMinEndSegmentLength  \n==================== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "JGenAreaEnlargeToRectangle",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenAreaEnlargeToRectangle",
        "description": "GenAreaEnlargeToRectangle from jaxpand-genoperators\n\nOperator, created by neun.\n\n==================== ================= ======================================================================= \nParametr             Typ               Popis                                                                   \n-------------------- ----------------- ----------------------------------------------------------------------- \ngeom                 FeatureCollection layer with geometries                                                   \ndFinalArea           DOUBLE            The minimum area                                                        \ndElongationThreshold DOUBLE            The minimum value of elongation (ratio: witdh/length = between 0 and 1) \n==================== ================= ======================================================================= \n",
        "childern": []
    },
    {
        "caption": "JGenAreaScaling",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenAreaScaling",
        "description": "GenAreaScaling from jaxpand-genoperators\n\nOperator, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nminsize  DOUBLE            The minimum area      \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "JGenAreaSimpleDouglasPeucker",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenAreaSimpleDouglasPeucker",
        "description": "GenAreaSimpleDouglasPeucker from jaxpand-genoperators\n\nOperator, created by neun.\n\n========= ================= ===================== \nParametr  Typ               Popis                 \n--------- ----------------- --------------------- \ngeom      FeatureCollection layer with geometries \ntolerance DOUBLE            dDistanceTolerance    \n========= ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "JGenAreaSimpleVisvalingam",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenAreaSimpleVisvalingam",
        "description": "GenAreaSimpleVisvalingam from jaxpand-genoperators\n\nOperator, created by neun.\n\n========= ================= ====================================================================== \nParametr  Typ               Popis                                                                  \n--------- ----------------- ---------------------------------------------------------------------- \ngeom      FeatureCollection layer with geometries                                                  \nmaxcorner INTEGER           number of maximum corners (all polygons will be rduced to this number) \ndimfactor DOUBLE            factor to reduce number of corners (between 0 and 1)                   \n========= ================= ====================================================================== \n",
        "childern": []
    },
    {
        "caption": "JGenBuildSimpleStaufenbiel",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenBuildSimpleStaufenbiel",
        "description": "GenBuildSimpleStaufenbiel from jaxpand-genoperators\n\nOperator, created by neun.\n\n========= ================= ===================== \nParametr  Typ               Popis                 \n--------- ----------------- --------------------- \ngeom      FeatureCollection layer with geometries \nminlength DOUBLE            minlength             \n========= ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "JGenBuildTypMesh",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenBuildTypMesh",
        "description": "GenBuildTypMesh from jaxpand-genoperators\n\nOperator, created by neun.\n\n====================== ================= ============================== \nParametr               Typ               Popis                          \n---------------------- ----------------- ------------------------------ \ngeom                   FeatureCollection layer with geometries          \ndMinimumShortestLength DOUBLE            aggregation distance tolerance \nnTargetNofObjects      INTEGER           aggregation distance tolerance \n====================== ================= ============================== \n",
        "childern": []
    },
    {
        "caption": "JGenLineDisplacement",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenLineDisplacement",
        "description": "GenLineDisplacement from jaxpand-genoperators\n\nOperator, created by neun.\n\n============================ ================= ============================================================================================================ \nParametr                     Typ               Popis                                                                                                        \n---------------------------- ----------------- ------------------------------------------------------------------------------------------------------------ \ngeom                         FeatureCollection lines to displace                                                                                            \ncongeom                      FeatureCollection areas causing displacements                                                                                  \ndSigWidth                    DOUBLE            The signature width of the lines.                                                                            \ndMinDist                     DOUBLE            The minimum object distance for beeing legible.                                                              \nnMinCoords                   INTEGER           The minimal number of coordinates for a line to displace.                                                    \nnMaxIterations               INTEGER           The maximal number of iterations.                                                                            \ndEnergyThreshold             DOUBLE            The aspired energy difference between two iterations to break the iteration. -1 when nMaxIterations is used. \nnNofBorderVertices           INTEGER           The number of fix border vertices for each line.                                                             \ndRatioInternalExternalEnergy DOUBLE            The ratio between internal and external energy.                                                              \ndCoordinateStepVariation     DOUBLE            The distance for coordinate steps in the variation method.                                                   \nbHandleCrosses               BOOLEAN           Crosses will be handled.                                                                                     \nbSelfDisplacement            BOOLEAN           Lines can displace themselfes.                                                                               \n============================ ================= ============================================================================================================ \n",
        "childern": []
    },
    {
        "caption": "JGenLineDisplacementTestSnakes",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenLineDisplacementTestSnakes",
        "description": "LineDisplacementTestSnakes\n\nOperator, created by neun.\n\n================== ================= ============================================================================================================ \nParametr           Typ               Popis                                                                                                        \n------------------ ----------------- ------------------------------------------------------------------------------------------------------------ \ngeom               FeatureCollection lines to displace                                                                                            \ncongeom            FeatureCollection areas causing displacements                                                                                  \ndWidth             DOUBLE            The width of the lines.                                                                                      \ndAsymmetryDistance DOUBLE            The asymmetric distance of the lines.                                                                        \ndMinDist           DOUBLE            The minimum object distance for beeing legible.                                                              \nnMaxIterations     INTEGER           The maximal number of iterations.                                                                            \ndEnergyThreshold   DOUBLE            The aspired energy difference between two iterations to break the iteration. -1 when nMaxIterations is used. \n================== ================= ============================================================================================================ \n",
        "childern": []
    },
    {
        "caption": "JGenLineSimpleDouglasPeucker",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenLineSimpleDouglasPeucker",
        "description": "GenLineSimpleDouglasPeucker from jaxpand-genoperators\n\nOperator, created by neun.\n\n========= ================= ===================== \nParametr  Typ               Popis                 \n--------- ----------------- --------------------- \ngeom      FeatureCollection layer with geometries \ntolerance DOUBLE            dDistanceTolerance    \n========= ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "LineDisplacement",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.LineDisplacement",
        "description": "Line Smoothing\n\nOperator, created by sstein.\n\n==================== ================= ===================== \nParametr             Typ               Popis                 \n-------------------- ----------------- --------------------- \ngeom                 FeatureCollection layer with geometries \nscale                INTEGER           map scale 1:x         \niterations           INTEGER           iterations            \nsignatureDiameternMM DOUBLE            signatureDiameternMM  \n==================== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "LineSmoothing",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.LineSmoothing",
        "description": "Line Smoothing\n\nOperator, created by sstein.\n\n============ ================= ===================== \nParametr     Typ               Popis                 \n------------ ----------------- --------------------- \ngeom         FeatureCollection layer with geometries \ntolerance    DOUBLE            tolerance             \nsegmentation BOOLEAN           segmentation          \n============ ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "NodeAndCombineLineStrings",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.NodeAndCombineLineStrings",
        "description": "Node and Combine LineStrings\n\nOperator, created by neun.\n\n======== ================= =========== \nParametr Typ               Popis       \n-------- ----------------- ----------- \ngeom     FeatureCollection all streets \n======== ================= =========== \n",
        "childern": []
    },
    {
        "caption": "NodeLineStrings",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.NodeLineStrings",
        "description": "Node LineStrings\n\nOperator, created by neun.\n\n======== ================= =========== \nParametr Typ               Popis       \n-------- ----------------- ----------- \ngeom     FeatureCollection all streets \n======== ================= =========== \n",
        "childern": []
    },
    {
        "caption": "PatchesGeneralization",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.PatchesGeneralization",
        "description": "does PatchesGeneralization\n\nOperator, created by nico.\n\n============ ================= ================= \nParametr     Typ               Popis             \n------------ ----------------- ----------------- \npatchesclass FeatureCollection FeatureCollection \nT1           DOUBLE            0.0               \nT2           DOUBLE            0.0               \nT3           DOUBLE            0.0               \nT4           DOUBLE            0.0               \nT5           DOUBLE            0.0               \nT6           DOUBLE            0.0               \nT7           DOUBLE            0.0               \nWs           DOUBLE            0.0               \nt            DOUBLE            0.0               \nclose        DOUBLE            0.0               \ncp           DOUBLE            0.0               \n============ ================= ================= \n",
        "childern": []
    },
    {
        "caption": "ShrinkAllPolygons",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.ShrinkAllPolygons",
        "description": "Shrink all polygons\n\nOperator, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nfactor   DOUBLE            factor for shrinking  \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "ShrinkPartition",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.ShrinkPartition",
        "description": "Shrink polygons\n\nOperator, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nfactor   DOUBLE            factor for shrinking  \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "StatefulTypificationAndDisplacement",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.StatefulTypificationAndDisplacement",
        "description": "Stateful Typification And Displacement\n\nOperator, created by neun.\n\n========= ================= ======================================================= \nParametr  Typ               Popis                                                   \n--------- ----------------- ------------------------------------------------------- \ngeom      FeatureCollection layer with geometries                                   \ncongeom   FeatureCollection layer with constraining geometries such as roads        \nmindist   DOUBLE            minimum distance between buildings                      \nroaddist  DOUBLE            minimum distance to constraining features such as roads \nmaxnumber INTEGER           number to reduce to                                     \ngraphid   STRING            id of stored graph                                      \n========= ================= ======================================================= \n",
        "childern": []
    },
    {
        "caption": "Operator",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Operator",
        "description": "",
        "childern": [
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.AggregateBuiltUpArea",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.AreaFeatureRemoval",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.AreaScalingRelative",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.AreaScalingSimple",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingDisplacement",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingSimplification",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingSimplifyGN",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingSimplifyOutline",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingSimplifyToRectangle",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingSpreadNarrowParts",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingSquareEdges",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingTypification",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingTypificationNew",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.BuildingTypificationStateful",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.CombineLineStrings",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.CompressPartitionConstrained",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.CompressPartitionDirected",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.DisplaceConstrainedNew",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.DisplaceConstrainedNewFast",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.DisplaceConstrainedStateful",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.DisplaceFeaturesFast",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.DisplaceFeaturesFastConstrained",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.EnlargeToRectangle",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.FilterDuplexLineStrings",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.FilterFeatures",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenAreaAggregation",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenAreaCollapseSkeleton",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenAreaEnlargeToRectangle",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenAreaScaling",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenAreaSimpleDouglasPeucker",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenAreaSimpleVisvalingam",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenBuildSimpleStaufenbiel",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenBuildTypMesh",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenLineDisplacement",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenLineDisplacementTestSnakes",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.JGenLineSimpleDouglasPeucker",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.LineDisplacement",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.LineSmoothing",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.NodeAndCombineLineStrings",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.NodeLineStrings",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.PatchesGeneralization",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.ShrinkAllPolygons",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.ShrinkPartition",
            "/SoftwareLibraries/WebGen/WebGen.Operator/ch.unizh.geo.webgen.service.StatefulTypificationAndDisplacement"
        ]
    },
    {
        "caption": "BuildingProcessing",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.BuildingProcessing",
        "description": "Split and Process Building Partition, Sequential or Parallel\n\nProcessing, created by neun.\n\n========= ================= ===================== \nParametr  Typ               Popis                 \n--------- ----------------- --------------------- \ngeom      FeatureCollection buildings             \ncongeom   FeatureCollection roads                 \nminarea   DOUBLE            minarea               \nminlength DOUBLE            minlength             \nmindist   DOUBLE            mindist               \nroaddist  DOUBLE            roaddist              \nparallel  BOOLEAN           execute multithreaded \nuse       BOOLEAN           execute multithreaded \n========= ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "BuildingProcessing_SinglePartition",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.BuildingProcessing_SinglePartition",
        "description": "Process Building Partition, Sequential or Parallel\n\nProcessing, created by neun.\n\n============ ================= ===================== \nParametr     Typ               Popis                 \n------------ ----------------- --------------------- \nwebgenserver STRING            webgenserver          \ngeom         FeatureCollection buildings             \ncongeom      FeatureCollection roads                 \nminarea      DOUBLE            minarea               \nminlength    DOUBLE            minlength             \nmindist      DOUBLE            mindist               \nroaddist     DOUBLE            roaddist              \nparallel     BOOLEAN           execute multithreaded \nuse          BOOLEAN           execute multithreaded \n============ ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "ProcessBuildingPartitionParallel",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessBuildingPartitionParallel",
        "description": "Process Partition Parallel\n\nProcessing, created by neun.\n\n============ ================= ============ \nParametr     Typ               Popis        \n------------ ----------------- ------------ \nwebgenserver STRING            webgenserver \ngeom         FeatureCollection buildings    \ncongeom      FeatureCollection roads        \nminarea      DOUBLE            minarea      \nminlength    DOUBLE            minlength    \nmindist      DOUBLE            mindist      \nroaddist     DOUBLE            roaddist     \n============ ================= ============ \n",
        "childern": []
    },
    {
        "caption": "ProcessBuildingPartitionSequential",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessBuildingPartitionSequential",
        "description": "Process Partition Sequential\n\nProcessing, created by neun.\n\n============ ================= ============ \nParametr     Typ               Popis        \n------------ ----------------- ------------ \nwebgenserver STRING            webgenserver \ngeom         FeatureCollection buildings    \ncongeom      FeatureCollection roads        \nminarea      DOUBLE            minarea      \nminlength    DOUBLE            minlength    \nmindist      DOUBLE            mindist      \nroaddist     DOUBLE            roaddist     \n============ ================= ============ \n",
        "childern": []
    },
    {
        "caption": "ProcessBuildings",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessBuildings",
        "description": "Split and Process Partitions with different search algorithms (as presented in GeoInformatica)\n\nProcessing, created by neun.\n\n========= ================= ================================= \nParametr  Typ               Popis                             \n--------- ----------------- --------------------------------- \nparallel  BOOLEAN           execute in parallel or sequential \ngeom      FeatureCollection buildings                         \ncongeom   FeatureCollection roads                             \nminarea   DOUBLE            minarea                           \nminlength DOUBLE            minlength                         \nmindist   DOUBLE            mindist                           \nroaddist  DOUBLE            roaddist                          \n========= ================= ================================= \n",
        "childern": []
    },
    {
        "caption": "ProcessBuildingsParallel",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessBuildingsParallel",
        "description": "Split and Process Partitions\n\nProcessing, created by neun.\n\n========= ================= ========= \nParametr  Typ               Popis     \n--------- ----------------- --------- \ngeom      FeatureCollection buildings \ncongeom   FeatureCollection roads     \nminarea   DOUBLE            minarea   \nminlength DOUBLE            minlength \nmindist   DOUBLE            mindist   \nroaddist  DOUBLE            roaddist  \n========= ================= ========= \n",
        "childern": []
    },
    {
        "caption": "ProcessBuildingsSequential",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessBuildingsSequential",
        "description": "Split and Process Partitions Sequential\n\nProcessing, created by neun.\n\n========= ================= ========= \nParametr  Typ               Popis     \n--------- ----------------- --------- \ngeom      FeatureCollection buildings \ncongeom   FeatureCollection roads     \nminarea   DOUBLE            minarea   \nminlength DOUBLE            minlength \nmindist   DOUBLE            mindist   \nroaddist  DOUBLE            roaddist  \n========= ================= ========= \n",
        "childern": []
    },
    {
        "caption": "ProcessingMultiBuildingPartitions",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessingMultiBuildingPartitions",
        "description": "Split and Process Partitions\n\nProcessing, created by neun.\n\n========= ================= ========= \nParametr  Typ               Popis     \n--------- ----------------- --------- \ngeom      FeatureCollection buildings \ncongeom   FeatureCollection roads     \nminarea   DOUBLE            minarea   \nminlength DOUBLE            minlength \nmindist   DOUBLE            mindist   \nroaddist  DOUBLE            roaddist  \n========= ================= ========= \n",
        "childern": []
    },
    {
        "caption": "ProcessingSingleBuildingPartition",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessingSingleBuildingPartition",
        "description": "Processing Single Building Partition\n\nProcessing, created by neun.\n\n========= ================= ========= \nParametr  Typ               Popis     \n--------- ----------------- --------- \ngeom      FeatureCollection buildings \ncongeom   FeatureCollection roads     \nminarea   DOUBLE            minarea   \nminlength DOUBLE            minlength \nmindist   DOUBLE            mindist   \nroaddist  DOUBLE            roaddist  \n========= ================= ========= \n",
        "childern": []
    },
    {
        "caption": "Processing",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Processing",
        "description": "",
        "childern": [
            "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.BuildingProcessing",
            "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.BuildingProcessing_SinglePartition",
            "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessBuildingPartitionParallel",
            "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessBuildingPartitionSequential",
            "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessBuildings",
            "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessBuildingsParallel",
            "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessBuildingsSequential",
            "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessingMultiBuildingPartitions",
            "/SoftwareLibraries/WebGen/WebGen.Processing/ch.unizh.geo.webgen.service.ProcessingSingleBuildingPartition"
        ]
    },
    {
        "caption": "AmalgamateABuiltUpArea",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.AmalgamateABuiltUpArea",
        "description": "Creates a built up area polygon from partitions and dead end roads\n\nSupport, created by neun.\n\n======== ================= ============================ \nParametr Typ               Popis                        \n-------- ----------------- ---------------------------- \ngeom     FeatureCollection partition polygons           \ncongeom  FeatureCollection all streets (with dead ends) \nminsize  DOUBLE            building minimum distance    \nmindist  DOUBLE            building minimum distance    \nroaddist DOUBLE            street minimum distance      \n======== ================= ============================ \n",
        "childern": []
    },
    {
        "caption": "AmalgamateBuiltUpAreas",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.AmalgamateBuiltUpAreas",
        "description": "Creates a built up area polygon from partitions and dead end roads\n\nSupport, created by neun.\n\n======== ================= ============================ \nParametr Typ               Popis                        \n-------- ----------------- ---------------------------- \ngeom     FeatureCollection partition polygons           \ncongeom  FeatureCollection all streets (with dead ends) \nminsize  DOUBLE            building minimum distance    \nmindist  DOUBLE            building minimum distance    \nroaddist DOUBLE            street minimum distance      \n======== ================= ============================ \n",
        "childern": []
    },
    {
        "caption": "AmalgamatePolygons",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.AmalgamatePolygons",
        "description": "AmalgamatePolygons\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nmindist  DOUBLE            minimum distance      \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "ArcGISSimplifyLines",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ArcGISSimplifyLines",
        "description": "ArcGIS SimplifyLines\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nmaxdist  DOUBLE            maxdist               \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "AreaPartitioning",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.AreaPartitioning",
        "description": "AreaPartitioning\n\nSupport, created by neun.\n\n========= ================= =========================== \nParametr  Typ               Popis                       \n--------- ----------------- --------------------------- \ngeom      FeatureCollection buildings or other features \nselection FeatureCollection selection polygons          \n========= ================= =========================== \n",
        "childern": []
    },
    {
        "caption": "AreaPartitioningFlexible",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.AreaPartitioningFlexible",
        "description": "Partitioning of Features through overlay polygons!\n\nSupport, created by neun.\n\n======== ================= =========================== \nParametr Typ               Popis                       \n-------- ----------------- --------------------------- \ngeom     FeatureCollection buildings or other features \ncongeom  FeatureCollection selection polygons          \n======== ================= =========================== \n",
        "childern": []
    },
    {
        "caption": "BufferFeatures",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.BufferFeatures",
        "description": "Buffer function for Points, Lines and Polygons\n\nSupport, created by neun.\n\n======== === ===== \nParametr Typ Popis \n-------- --- ----- \n======== === ===== \n",
        "childern": []
    },
    {
        "caption": "BufferFeaturesRectified",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.BufferFeaturesRectified",
        "description": "Buffer function for Points, Lines and Polygons. Creates rectified angles.\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nwidth    DOUBLE            buffer width          \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "BufferFeaturesRemote",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.BufferFeaturesRemote",
        "description": "Buffer function on tropo\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nwidth    DOUBLE            buffer width          \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "BuildingBlockGenerator",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.BuildingBlockGenerator",
        "description": "Creates a built up area polygon from partitions and dead end roads\n\nSupport, created by neun.\n\n========= ================= ==================================== \nParametr  Typ               Popis                                \n--------- ----------------- ------------------------------------ \npartition FeatureCollection partition polygons                   \nstreets   FeatureCollection all streets (with dead ends)         \nmindist   DOUBLE            building and street minimum distance \n========= ================= ==================================== \n",
        "childern": []
    },
    {
        "caption": "BuildingBlockGeneratorAdvanced",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.BuildingBlockGeneratorAdvanced",
        "description": "Creates a built up area polygon from partitions and dead end roads, needs attribute SIGWIDTH for every street\n\nSupport, created by neun.\n\n========= ================= ============================ \nParametr  Typ               Popis                        \n--------- ----------------- ---------------------------- \npartition FeatureCollection partition polygons           \nstreets   FeatureCollection all streets (with dead ends) \n========= ================= ============================ \n",
        "childern": []
    },
    {
        "caption": "BuildingClassification",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.BuildingClassification",
        "description": "Classify buildings into rural, suburban, urban ...\n\nSupport, created by sstein.\n\n=================================== ================= ==================== \nParametr                            Typ               Popis                \n----------------------------------- ----------------- -------------------- \nrural buildings                     FeatureCollection buildings            \nindustrial and commercial buildings FeatureCollection buildings            \ninner city buildings                FeatureCollection buildings            \nurban buildings                     FeatureCollection buildings            \nsuburban buildings                  FeatureCollection buildings            \nbuildings to classify               FeatureCollection buildings            \naccept all measures                 BOOLEAN           accept all measures  \nbuffer radius in m                  DOUBLE            buffer radius in m   \napply spatial median                BOOLEAN           apply spatial median \n=================================== ================= ==================== \n",
        "childern": []
    },
    {
        "caption": "ConcatStrings",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ConcatStrings",
        "description": "concat two strings\n\nSupport, created by neun.\n\n======== ====== ======== \nParametr Typ    Popis    \n-------- ------ -------- \nstring1  STRING String 1 \nstring2  STRING String 2 \n======== ====== ======== \n",
        "childern": []
    },
    {
        "caption": "ConstraintSpaceKnowledgeBase",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ConstraintSpaceKnowledgeBase",
        "description": "KnowledgeBase with ConstraintSpace\n\nSupport, created by neun.\n\n============= =========== ============== \nParametr      Typ         Popis          \n------------- ----------- -------------- \nupdate        BOOLEAN     update         \ncostarray     DOUBLEARRAY costarray      \noperatorarray DOUBLEARRAY operationarray \n============= =========== ============== \n",
        "childern": []
    },
    {
        "caption": "DouglasPeuckerMN",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.DouglasPeuckerMN",
        "description": "Douglas-Peucker algorithm for Lines and Polygons\n\nSupport, created by neun.\n\n========= ================= =============================== \nParametr  Typ               Popis                           \n--------- ----------------- ------------------------------- \ngeom      FeatureCollection layer with geometries to buffer \ntolerance DOUBLE            dp tolerance                    \n========= ================= =============================== \n",
        "childern": []
    },
    {
        "caption": "Eval_Constraint_Correlation_Diff",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_Constraint_Correlation_Diff",
        "description": "Evaluate Constraint Correlation Differences\n\nSupport, created by sstein.\n\n======== ================= =============================== \nParametr Typ               Popis                           \n-------- ----------------- ------------------------------- \ngeom     FeatureCollection layer with geometries to buffer \n======== ================= =============================== \n",
        "childern": []
    },
    {
        "caption": "Eval_GMFeat_All",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_All",
        "description": "Evaluate All Group Multi-Constraints\n\nSupport, created by neun.\n\n========== ================= ===================== \nParametr   Typ               Popis                 \n---------- ----------------- --------------------- \ngeom       FeatureCollection layer with geometries \nminarea    DOUBLE            minimum size          \nmindist    DOUBLE            minimum distance      \nminlength  DOUBLE            minimum length        \nhistorymsg STRING            history message       \n========== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "Eval_GMFeat_All_Constrained",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_All_Constrained",
        "description": "Evaluate All Group Multi-Constraints\n\nSupport, created by neun.\n\n========== ================= ============================= \nParametr   Typ               Popis                         \n---------- ----------------- ----------------------------- \ngeom       FeatureCollection layer with geometries         \ncongeom    FeatureCollection layer with geometries (roads) \nminarea    DOUBLE            minimum size                  \nmindist    DOUBLE            minimum distance              \nminlength  DOUBLE            minimum length                \nroaddist   DOUBLE            minimum road distance         \nhistorymsg STRING            history message               \n========== ================= ============================= \n",
        "childern": []
    },
    {
        "caption": "Eval_GMFeat_Diff_BlackWhiteRatio",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_Diff_BlackWhiteRatio",
        "description": "Evaluate WidthLengthRatio Constraint\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "Eval_GMFeat_Diff_EdgeCount",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_Diff_EdgeCount",
        "description": "Evaluate Edge Count Difference Constraint\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "Eval_GMFeat_Diff_Orientation",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_Diff_Orientation",
        "description": "Evaluate Orientation Difference Constraint\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "Eval_GMFeat_Diff_Position",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_Diff_Position",
        "description": "Evaluate Position Difference Constraint\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "Eval_GMFeat_Diff_WidthLengthRatio",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_Diff_WidthLengthRatio",
        "description": "Evaluate WidthLengthRatio Constraint\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "Eval_GMFeat_LocalWidth",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_LocalWidth",
        "description": "Evaluate Minium Local Width Constraint\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nmindist  DOUBLE            minimum distance      \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "Eval_GMFeat_MinDist",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_MinDist",
        "description": "Evaluate Minium Distance Constraint\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nmindist  DOUBLE            minimum distance      \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "Eval_GMFeat_MinDistConstrained",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_MinDistConstrained",
        "description": "Evaluate Minium Distance Constraint with road distances\n\nSupport, created by neun.\n\n======== ================= ============================= \nParametr Typ               Popis                         \n-------- ----------------- ----------------------------- \ngeom     FeatureCollection layer with geometries         \ncongeom  FeatureCollection layer with geometries (roads) \nmindist  DOUBLE            minimum distance              \nroaddist DOUBLE            minimum road distance         \n======== ================= ============================= \n",
        "childern": []
    },
    {
        "caption": "Eval_GMFeat_MinLength",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_MinLength",
        "description": "Evaluate Minium Length Constraint\n\nSupport, created by neun.\n\n========= ================= ===================== \nParametr  Typ               Popis                 \n--------- ----------------- --------------------- \ngeom      FeatureCollection layer with geometries \nminlength DOUBLE            minimum length        \n========= ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "Eval_GMFeat_MinSize",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_MinSize",
        "description": "Evaluate Minium Size Constraint\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nminarea  DOUBLE            minimum size          \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "ExpandAreas",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ExpandAreas",
        "description": "Expand Areas\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nwidth    DOUBLE            buffer width          \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "InflectionPoints",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.InflectionPoints",
        "description": "InflectionPoints\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "JoinStypeByMajority",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JoinStypeByMajority",
        "description": "JoinStypeByMajority\n\nSupport, created by neun.\n\n================== ================= ======================= \nParametr           Typ               Popis                   \n------------------ ----------------- ----------------------- \ntarget features    FeatureCollection target features         \nbuffer radius in m DOUBLE            buffer radius in meters \n================== ================= ======================= \n",
        "childern": []
    },
    {
        "caption": "JTSDifference",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSDifference",
        "description": "JTSDifference\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeomA    FeatureCollection layer with geometries \ngeomB    FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "JTSDouglasPeucker",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSDouglasPeucker",
        "description": "Douglas-Peucker algorithm for Lines and Polygons from Java Topology Suite.\n\nSupport, created by neun.\n\n========= ================= =============================== \nParametr  Typ               Popis                           \n--------- ----------------- ------------------------------- \ngeom      FeatureCollection layer with geometries to buffer \ntolerance DOUBLE            dp tolerance                    \n========= ================= =============================== \n",
        "childern": []
    },
    {
        "caption": "JTSgetCentroid",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSgetCentroid",
        "description": "Computes the centroid of this Geometry. The centroid is equal to the centroid of the set of component Geometries of highest dimension (since the lower-dimension geometries contribute zero \\\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "JTSIntersection",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSIntersection",
        "description": "Computes a Geometry representing the points shared by this Geometry and other from Java Topology Suite.\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeomA    FeatureCollection layer with geometries \ngeomB    FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "JTSsymDifference",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSsymDifference",
        "description": "Returns a set combining the points in this Geometry not in other, and the points in other not in this Geometry. From Java Topology Suite.\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeomA    FeatureCollection layer with geometries \ngeomB    FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "JTSUnion",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSUnion",
        "description": " Computes a Geometry representing all the points in this Geometry and other. From Java Topology Suite.\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeomA    FeatureCollection layer with geometries \ngeomB    FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "JTSUnionSingleLayer",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSUnionSingleLayer",
        "description": " Computes a Geometry representing all the points in this Geometry and other. From Java Topology Suite.\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "Line2Polygon",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Line2Polygon",
        "description": "Line2Polygon\n\nSupport, created by neun.\n\n======== ================= ====================== \nParametr Typ               Popis                  \n-------- ----------------- ---------------------- \ngeom     FeatureCollection layer with linestrings \n======== ================= ====================== \n",
        "childern": []
    },
    {
        "caption": "LineInflectionPoints",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.LineInflectionPoints",
        "description": "Line Inflection-Points\n\nSupport, created by sstein.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "MergeFeaturesByAttribute",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.MergeFeaturesByAttribute",
        "description": "MergeFeaturesByAttribute\n\nSupport, created by neun.\n\n========== ================= ================================= \nParametr   Typ               Popis                             \n---------- ----------------- --------------------------------- \ngeom       FeatureCollection layer with geometries and classes \nclassfield STRING            classfield                        \n========== ================= ================================= \n",
        "childern": []
    },
    {
        "caption": "MergeTouchingPolygons",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.MergeTouchingPolygons",
        "description": "MergeTouchingPolygons\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "ModellGen_StaticReclassHierarchy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ModellGen_StaticReclassHierarchy",
        "description": "delivers a Static Reclass-Hierarchy for Modell Generalisation\n\nSupport, created by neun.\n\n========= ================= ========================================= \nParametr  Typ               Popis                                     \n--------- ----------------- ----------------------------------------- \ngeom      FeatureCollection layer with geometries                     \nwidth     DOUBLE            buffer width                              \nquadrants INTEGER           quadrant segments for rounding of circles \n========= ================= ========================================= \n",
        "childern": []
    },
    {
        "caption": "Multi2SingleGeometries",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Multi2SingleGeometries",
        "description": "Multi2SingleGeometries\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "MultiGeometryGenerator",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.MultiGeometryGenerator",
        "description": "MultiGeometry Generator\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "ProximityGraphConforming",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ProximityGraphConforming",
        "description": "ProximityGraphConforming\n\nSupport, created by neun.\n\n======== ================= ===================================== \nParametr Typ               Popis                                 \n-------- ----------------- ------------------------------------- \ngeom     FeatureCollection layer with points or polygons (nodes) \ncongeom  FeatureCollection layer with lines                      \nmindist  DOUBLE            minimum distance                      \n======== ================= ===================================== \n",
        "childern": []
    },
    {
        "caption": "ProximityGraphGeoms",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ProximityGraphGeoms",
        "description": "ProximityGraph delivers Geometries\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nmindist  DOUBLE            minimum distance      \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "ProximityGraphStateful",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ProximityGraphStateful",
        "description": "ProximityGraphStateful\n\nSupport, created by neun.\n\n======== ================= ================================= \nParametr Typ               Popis                             \n-------- ----------------- --------------------------------- \ngraphid  STRING            id of stored graph                \ngeom     FeatureCollection layer with geometries             \ncongeom  FeatureCollection layer with obstructing geometries \nmindist  DOUBLE            minimum distance                  \n======== ================= ================================= \n",
        "childern": []
    },
    {
        "caption": "ReclassFeatures",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ReclassFeatures",
        "description": "Reclass Features according to supplied asignment matrix\n\nSupport, created by neun.\n\n========== ================= ================================= \nParametr   Typ               Popis                             \n---------- ----------------- --------------------------------- \ngeom       FeatureCollection layer with geometries and classes \nCLASSFIELD STRING            CLASSFIELD                        \nMATRIX     WeightedMatrix    MATRIX                            \n========== ================= ================================= \n",
        "childern": []
    },
    {
        "caption": "ReclassHierarchical",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ReclassHierarchical",
        "description": "Reclass Features\n\nSupport, created by neun.\n\n========== ================= ================================= \nParametr   Typ               Popis                             \n---------- ----------------- --------------------------------- \ngeom       FeatureCollection layer with geometries and classes \nclassfield STRING            classfield                        \nhierarchy  STRING            hierarchy                         \n========== ================= ================================= \n",
        "childern": []
    },
    {
        "caption": "SkeletonGenerator",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.SkeletonGenerator",
        "description": "Skeleton Generator for Polygons\n\nSupport, created by petzold.\n\n========= ================= ============================ \nParametr  Typ               Popis                        \n--------- ----------------- ---------------------------- \ngeom      FeatureCollection layer with geometries        \ntolerance DOUBLE            tolerance                    \ninnerskel BOOLEAN           deliver only inner-skeletion \n========= ================= ============================ \n",
        "childern": []
    },
    {
        "caption": "SplitMultiGeometries",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.SplitMultiGeometries",
        "description": "Split MultiGeometries\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "ThiessenPolygonGenerator",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ThiessenPolygonGenerator",
        "description": "Thiessen-Polygon Generator\n\nSupport, created by sstein.\n\n======== ================= ============== \nParametr Typ               Popis          \n-------- ----------------- -------------- \ngeom     FeatureCollection point features \n======== ================= ============== \n",
        "childern": []
    },
    {
        "caption": "TriangulationByMagen",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.TriangulationByMagen",
        "description": "Triangulation from the Magen Library\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "TriangulationConforming",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.TriangulationConforming",
        "description": "TriangulationConforming\n\nSupport, created by neun.\n\n======== ================= ========================= \nParametr Typ               Popis                     \n-------- ----------------- ------------------------- \npoints   FeatureCollection layer with points (nodes) \nlines    FeatureCollection layer with lines          \nmindist  DOUBLE            minimum distance          \n======== ================= ========================= \n",
        "childern": []
    },
    {
        "caption": "TriangulationProximity",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.TriangulationProximity",
        "description": "TriangulationProximity\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nmindist  DOUBLE            minimum distance      \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "TriangulationProxyGraph",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.TriangulationProxyGraph",
        "description": "TriangulationProxyGraph\n\nSupport, created by neun.\n\n======== ================= ===================== \nParametr Typ               Popis                 \n-------- ----------------- --------------------- \ngeom     FeatureCollection layer with geometries \nmindist  DOUBLE            minimum distance      \n======== ================= ===================== \n",
        "childern": []
    },
    {
        "caption": "Support",
        "cardType": "KnowledgeBaseCard",
        "ref": "/SoftwareLibraries/WebGen/WebGen.Support",
        "description": "",
        "childern": [
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.AmalgamateABuiltUpArea",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.AmalgamateBuiltUpAreas",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.AmalgamatePolygons",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ArcGISSimplifyLines",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.AreaPartitioning",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.AreaPartitioningFlexible",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.BufferFeatures",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.BufferFeaturesRectified",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.BufferFeaturesRemote",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.BuildingBlockGenerator",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.BuildingBlockGeneratorAdvanced",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.BuildingClassification",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ConcatStrings",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ConstraintSpaceKnowledgeBase",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.DouglasPeuckerMN",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_Constraint_Correlation_Diff",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_All",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_All_Constrained",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_Diff_BlackWhiteRatio",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_Diff_EdgeCount",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_Diff_Orientation",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_Diff_Position",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_Diff_WidthLengthRatio",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_LocalWidth",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_MinDist",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_MinDistConstrained",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_MinLength",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Eval_GMFeat_MinSize",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ExpandAreas",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.InflectionPoints",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JoinStypeByMajority",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSDifference",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSDouglasPeucker",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSgetCentroid",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSIntersection",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSsymDifference",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSUnion",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.JTSUnionSingleLayer",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Line2Polygon",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.LineInflectionPoints",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.MergeFeaturesByAttribute",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.MergeTouchingPolygons",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ModellGen_StaticReclassHierarchy",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.Multi2SingleGeometries",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.MultiGeometryGenerator",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ProximityGraphConforming",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ProximityGraphGeoms",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ProximityGraphStateful",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ReclassFeatures",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ReclassHierarchical",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.SkeletonGenerator",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.SplitMultiGeometries",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.ThiessenPolygonGenerator",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.TriangulationByMagen",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.TriangulationConforming",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.TriangulationProximity",
            "/SoftwareLibraries/WebGen/WebGen.Support/ch.unizh.geo.webgen.service.TriangulationProxyGraph"
        ]
    },
    {
        "caption": "menší",
        "cardType": "KnowledgeBaseCard",
        "ref": "/StructuralPatterns/mensi",
        "description": "Vygenerovaný strukturální vzor\n\nReferenced at Budovy\n\nReferenced at Správní budovy",
        "childern": []
    },
    {
        "caption": "nahrazeny",
        "cardType": "KnowledgeBaseCard",
        "ref": "/StructuralPatterns/nahrazeny",
        "description": "Vygenerovaný strukturální vzor\n\nReferenced at Budovy",
        "childern": []
    },
    {
        "caption": "Úzký objekt",
        "cardType": "KnowledgeBaseCard",
        "ref": "/StructuralPatterns/ObjectShape/NarrowObject",
        "description": "",
        "childern": []
    },
    {
        "caption": "Tvar objektu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/StructuralPatterns/ObjectShape",
        "description": "",
        "childern": [
            "/StructuralPatterns/ObjectShape/NarrowObject"
        ]
    },
    {
        "caption": "Plocha objektu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/StructuralPatterns/ObjectSize/ObjectArea",
        "description": "",
        "childern": []
    },
    {
        "caption": "Velikost objektu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/StructuralPatterns/ObjectSize/ObjectMinSize",
        "description": "",
        "childern": []
    },
    {
        "caption": "Velikost objektu",
        "cardType": "KnowledgeBaseCard",
        "ref": "/StructuralPatterns/ObjectSize",
        "description": "",
        "childern": [
            "/StructuralPatterns/ObjectSize/ObjectArea",
            "/StructuralPatterns/ObjectSize/ObjectMinSize"
        ]
    },
    {
        "caption": "Strukturální vzory",
        "cardType": "KnowledgeBaseCard",
        "ref": "/StructuralPatterns",
        "description": "\nStrukturální vzor je algoritmus zjištění skupiny kartografických objektů či jejich částí která má nějaké vlastnosti reprezentující kartografické pravidlo.\n\nTyto algoritmy umožňují přiřazovat v kresbě použitelné generalizační operátory nad\nrámec operátorů použitelných na celou třídu prvků. Operátory jsou často použitelné\npouze na část prvku kresby nebo na spojené prvky kresby. Algoritmy rozpoznávání\nstruktury dat nejsou potřebné při poloautomatické generalizaci, protože vyhodnocení\nkresby provádí vizuálně kartograf. Strukturální vzory nám tedy umožňují obohatit\nkartografický model o znalost generalizačních operátorů a algoritmů jejich implementace,\nkteré můžeme na jednotlivé části kresby použít. V terminologii multiagentních\ngeneralizačních systémů je možné řící, že se jedná o proces hledání omezení a pravidel\n(constrains). Jde o hledání množin prvků společných vlastností, dále z hlediska\ngeneralizačního operátoru nedělitelných, na které můžeme generalizační pravidlo\naplikovat. Z hlediska geometrického se jedná o formu klasifikace.\n\nV příkladu \"Domy s ulicí podél potoka\" tedy identifikujeme:\n1. shluk budov obsluhovaný slepou ulicí,\n2. poslední budova v sídle, která by se neměla při generalizaci vypouštět, dokud jsou v\nbloku nějaké budovy zobrazeny,\n3. ulice podél potoka,\n4. blok budov podél ulice.\n    ",
        "childern": [
            "/StructuralPatterns/mensi",
            "/StructuralPatterns/nahrazeny",
            "/StructuralPatterns/ObjectShape",
            "/StructuralPatterns/ObjectSize",
            "/StructuralPatterns/Virtuallinearelement",
            "/StructuralPatterns/znackaorientujepodleskutecnepolohybudovy"
        ]
    },
    {
        "caption": "Ignorování přerušení",
        "cardType": "KnowledgeBaseCard",
        "ref": "/StructuralPatterns/Virtuallinearelement/Ignorebreaks",
        "description": "",
        "childern": []
    },
    {
        "caption": "Totožnost vrcholů",
        "cardType": "KnowledgeBaseCard",
        "ref": "/StructuralPatterns/Virtuallinearelement/VertexCoincidence",
        "description": "",
        "childern": []
    },
    {
        "caption": "Virtuální liniový element",
        "cardType": "KnowledgeBaseCard",
        "ref": "/StructuralPatterns/Virtuallinearelement",
        "description": "",
        "childern": [
            "/StructuralPatterns/Virtuallinearelement/Ignorebreaks",
            "/StructuralPatterns/Virtuallinearelement/VertexCoincidence"
        ]
    },
    {
        "caption": "značka orientuje podle skutečné polohy budovy",
        "cardType": "KnowledgeBaseCard",
        "ref": "/StructuralPatterns/znackaorientujepodleskutecnepolohybudovy",
        "description": "Vygenerovaný strukturální vzor\n\nReferenced at Budovy\n\nReferenced at Budovy\n\nReferenced at Správní budovy",
        "childern": []
    },
    {
        "caption": "Data10",
        "cardType": "KnowledgeBaseCard",
        "ref": "/VectorData/Data10",
        "description": "  ",
        "childern": [
            "/VectorData/Data10/SymbolsTable"
        ]
    },
    {
        "caption": "Tabulka symbolů",
        "cardType": "KnowledgeBaseCard",
        "ref": "/VectorData/Data10/SymbolsTable",
        "description": "\nPřevodní tabulka pro určení databázové tabulky, ve které jsou uloženy prvky symbolizované značkou podle značkového klíče.\n\n`Data JSON <../tableSymbols.json>`_\n  ",
        "childern": []
    },
    {
        "caption": "Vektorová data",
        "cardType": "KnowledgeBaseCard",
        "ref": "/VectorData",
        "description": "\nParametry a vlastnosti objektových modelů, použitých pro tvorbu map.\n ",
        "childern": [
            "/VectorData/Data10"
        ]
    }
]

export default drozdosvet
