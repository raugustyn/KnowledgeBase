import Card from "../../Cards/Card"


function addItems(parent, items)
{
    var result = []
    items.forEach( function (item, index) {
        let itemCard = new Card(parent.ref + "/" + index, item.caption, item.description)
        result.push(itemCard)
        if (item.getChildern && item.getChildern.length > 0) {
            addItems(itemCard, item.getChildern)
        }
    })
    if (parent && result.length) {
        parent.childern = result
    }
    return result
}

let items = [
    {
        caption: "Situations",
        getChildern: [
            {
                caption: "Terénní Reliéf",
                getChildern: [
                    {
                        caption: "Missing Shape Population",
                        description: "Missing Shape Population",
                        getChildern: [
                            {
                                caption: "01_MissingPopulation",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/01_MissingPopulation.png"
                            }
                        ]
                    },
                    {
                        caption: "Displacement and Shortening",
                        description: "One element [displaced](/Displaced) and second shortened",
                        getChildern: [
                            {
                                caption: "02_DisplacementAndShortening",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/02_DisplacementAndShortening.png"
                            }
                        ]
                    },
                    {
                        caption: "Displacement From Itself",
                        description: "Element displaced from itself",
                        getChildern: [
                            {
                                caption: "03_DisplacementFromItself",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/03_DisplacementFromItself.png"
                            }
                        ]
                    },
                    {
                        caption: "Shift",
                        description: "Element displace by shift",
                        getChildern: [
                            {
                                caption: "04_Shift",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/04_Shift.png"
                            }
                        ]
                    },
                    {
                        caption: "Displacement no Population",
                        getChildern: [
                            {
                                caption: "05_DisplacementNoPopulation",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/05_DisplacementNoPopulation.png"
                            }
                        ]
                    },
                    {
                        caption: "06_DoubleCoalescence",
                        getChildern: [
                            {
                                caption: "06_DoubleCoalescence",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/06_DoubleCoalescence.png"
                            }
                        ]
                    },
                    {
                        caption: "07_SignificantShapeShift",
                        getChildern: [
                            {
                                caption: "07_SignificantShapeShift",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/07_SignificantShapeShift.png"
                            }
                        ]
                    },
                    {
                        caption: "08_CoalescentAndPropagation",
                        getChildern: [
                            {
                                caption: "08_CoalescentAndPropagation",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/08_CoalescentAndPropagation.png"
                            }
                        ]
                    },
                    {
                        caption: "09_PartialShiftAndShapeShortening",
                        getChildern: [
                            {
                                caption: "09_PartialShiftAndShapeShortening",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/09_PartialShiftAndShapeShortening.png"
                            }
                        ]
                    },
                    {
                        caption: "10_NoShiftCoalescence",
                        getChildern: [
                            {
                                caption: "10_NoShiftCoalescence",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/10_NoShiftCoalescence.png"
                            }
                        ]
                    }
                ]
            }
        ]


    },
    {
        caption: "Constraint Context",
        getChildern: [
            {
                caption: "Element Rendering Context",
                description: "Problem can be solved by minor rendering changes",
                imagecaption: "./Samples/Bader/03_DisplacementFromItself.png"
            },
            {
                caption: "Elements Context",
                getChildern: [
                    {
                        caption: "Two Elements Context",
                        description: "Most common context interacting two elements",
                        imagecaption: "./Samples/Bader/04_Shift.png"
                    },
                    {
                        caption: "Multiple Elements Context",
                        description: "Multiple elements are part of conflict"
                    }
                ]
            }
        ]
    },
    {
        caption: "Operators Application Strategy",
                getChildern: [
                    {
                        caption: "Batch",
                        imagecaption: "./img/ActionPlanIcon.png",
                        iconSize: 28
                    },
                    {
                        caption: "Condition Action",
                        imagecaption: "./img/SweepIcon.png"
                    },
                    {
                        caption: "Elements Processing",
                        getChildern: [
                            {
                                caption: "Sequential",
                                imagecaption: "./img/SequentialIcon.png"
                            },
                            {
                                caption: "In Cluster",
                                imagecaption: "./img/ClusterIcon.png",
                                getChildern: [
                                    {
                                        caption: "Predefined",
                                        getChildern: [
                                            {
                                                caption: "Road and River Network"
                                            }
                                        ]
                                    },
                                    {
                                        caption: "Context",
                                        getChildern: [
                                            {caption: "Spatial"}
                                        ]
                                    }
                                ]
                            },
                            {caption: "Global"}
                        ]
                    },
                    { caption: "Iterative" },
                    { caption: "Least Square Fit" },
                    { caption: "Simulated Annealing"},
                    { caption: "Machine Learning" }
                ]

    },
    {
        caption: "Operators (Solutions)",
        items : [
    {
        caption: "Attribute Transformation",
        getChildern: [
            {
                caption: "Clasification",
                getChildern: [
                    { caption: "Thematic Selection" },
                    { caption: "Thematic Aggregation" }
                ]
            }
            ]
    },
    {
        caption: "Spatial Transformation",
        getChildern: [
            {
                caption: "Individual Objects",
                getChildern: [
                    {
                        caption: "Simplification",
                        getChildern: [
                            { caption: "Weeding" },
                            { caption: "Unrestricted Simplification" }
                        ]
                    },
                    { caption: "Collapse" },
                    {
                        caption: "Enhancement",
                        description: "The shape and size of a feature may need to be enhanced to meet the legibility requirements of a map",
                        getChildern: [
                            {
                                caption: "with regard to geometric constraints",
                                getChildern: [
                                    { caption: "Enlargement" },
                                    { caption: "Exaggeration (Caricature)" }
                                ]
                            },
                            {
                                caption: "with regard to semantic constraints",
                                getChildern: [
                                    { caption: "Smoothing" },
                                    { caption: "Fractalization" },
                                    { caption: "Rectification/Squaring" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                caption: "Individual objects or Set of objects",
                getChildern: [
                    {
                        caption: "Selection/Elimination",
                        getChildern: [
                            { caption: "Selection" },
                            { caption: "Elimination" }
                        ]
                    },
                    {
                        caption: "Displacement",
                        getChildern: [
                            {
                                caption: "Kontext kolize",
                                getChildern: [
                                    { caption: "Od jiného elementu" },
                                    { caption: "Od jiných elementů" },
                                    { caption: "Od sama sebe"}
                                ]
                            },
            {
                caption: "Terénní Reliéf",
                getChildern: [
                    { caption: "Zkrácení" },
                    {
                        caption: "Odsun",
                        getChildern: [
                            { caption: "Od jiného elementu" },
                            { caption: "Od sama sebe"}
                        ]
                    },
                    {
                        caption: "Paralelizace",
                        getChildern: [
                            { caption: "Celý element" },
                            { caption: "Část elementu" }
                        ]
                    },
                    {
                        caption: "Slícování"
                    }
                ]
            }
        ]
                    }
                ]
            },
            {
                caption: "Set of objects",
                getChildern: [
                    {
                        caption: "Aggregation",
                        getChildern: [
                            {
                                caption: "Join features to 1 object",
                                getChildern: [
                                    {
                                        caption: "Amalgamation",
                                        getChildern: [
                                            { caption: "Fusion" },
                                            { caption: "Merge" }
                                        ]
                                    },
                                    { caption: "Combine" }
                                ]
                            },
                            {
                                caption: "Join feature to several objects",
                                getChildern: [
                                    { caption: "Typification"}
                                ]
                            }
                        ]
                    }
                ]
            }
            ]
    }
]
    }
]


let generalizationCards = new Card("Generalization", "Generalization")
addItems(generalizationCards, items)
items = generalizationCards.getChildern()

export default items
