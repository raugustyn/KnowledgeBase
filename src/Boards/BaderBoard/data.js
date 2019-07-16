import Card from "../../Cards/Card"


function addItems(parent, items)
{
    var result = []
    items.forEach( function (item, index) {
        let itemCard = new Card(parent.ref + "/" + index, item.caption, item.description)
        result.push(itemCard)
        if (item.getchildren && item.getchildren.length > 0) {
            addItems(itemCard, item.getchildren)
        }
    })
    if (parent && result.length) {
        parent.children = result
    }
    return result
}

let items = [
    {
        caption: "Situations",
        getchildren: [
            {
                caption: "Terénní Reliéf",
                getchildren: [
                    {
                        caption: "Missing Shape Population",
                        description: "Missing Shape Population",
                        getchildren: [
                            {
                                caption: "01_MissingPopulation",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/01_MissingPopulation.png"
                            }
                        ]
                    },
                    {
                        caption: "Displacement and Shortening",
                        description: "One element [displaced](/Displaced) and second shortened",
                        getchildren: [
                            {
                                caption: "02_DisplacementAndShortening",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/02_DisplacementAndShortening.png"
                            }
                        ]
                    },
                    {
                        caption: "Displacement From Itself",
                        description: "Element displaced from itself",
                        getchildren: [
                            {
                                caption: "03_DisplacementFromItself",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/03_DisplacementFromItself.png"
                            }
                        ]
                    },
                    {
                        caption: "Shift",
                        description: "Element displace by shift",
                        getchildren: [
                            {
                                caption: "04_Shift",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/04_Shift.png"
                            }
                        ]
                    },
                    {
                        caption: "Displacement no Population",
                        getchildren: [
                            {
                                caption: "05_DisplacementNoPopulation",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/05_DisplacementNoPopulation.png"
                            }
                        ]
                    },
                    {
                        caption: "06_DoubleCoalescence",
                        getchildren: [
                            {
                                caption: "06_DoubleCoalescence",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/06_DoubleCoalescence.png"
                            }
                        ]
                    },
                    {
                        caption: "07_SignificantShapeShift",
                        getchildren: [
                            {
                                caption: "07_SignificantShapeShift",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/07_SignificantShapeShift.png"
                            }
                        ]
                    },
                    {
                        caption: "08_CoalescentAndPropagation",
                        getchildren: [
                            {
                                caption: "08_CoalescentAndPropagation",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/08_CoalescentAndPropagation.png"
                            }
                        ]
                    },
                    {
                        caption: "09_PartialShiftAndShapeShortening",
                        getchildren: [
                            {
                                caption: "09_PartialShiftAndShapeShortening",
                                imagecaption: "/Samples/Situations/01_TerrainRelief/09_PartialShiftAndShapeShortening.png"
                            }
                        ]
                    },
                    {
                        caption: "10_NoShiftCoalescence",
                        getchildren: [
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
        getchildren: [
            {
                caption: "Element Rendering Context",
                description: "Problem can be solved by minor rendering changes",
                imagecaption: "./Samples/Bader/03_DisplacementFromItself.png"
            },
            {
                caption: "Elements Context",
                getchildren: [
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
                getchildren: [
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
                        getchildren: [
                            {
                                caption: "Sequential",
                                imagecaption: "./img/SequentialIcon.png"
                            },
                            {
                                caption: "In Cluster",
                                imagecaption: "./img/ClusterIcon.png",
                                getchildren: [
                                    {
                                        caption: "Predefined",
                                        getchildren: [
                                            {
                                                caption: "Road and River Network"
                                            }
                                        ]
                                    },
                                    {
                                        caption: "Context",
                                        getchildren: [
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
        getchildren: [
            {
                caption: "Clasification",
                getchildren: [
                    { caption: "Thematic Selection" },
                    { caption: "Thematic Aggregation" }
                ]
            }
            ]
    },
    {
        caption: "Spatial Transformation",
        getchildren: [
            {
                caption: "Individual Objects",
                getchildren: [
                    {
                        caption: "Simplification",
                        getchildren: [
                            { caption: "Weeding" },
                            { caption: "Unrestricted Simplification" }
                        ]
                    },
                    { caption: "Collapse" },
                    {
                        caption: "Enhancement",
                        description: "The shape and size of a feature may need to be enhanced to meet the legibility requirements of a map",
                        getchildren: [
                            {
                                caption: "with regard to geometric constraints",
                                getchildren: [
                                    { caption: "Enlargement" },
                                    { caption: "Exaggeration (Caricature)" }
                                ]
                            },
                            {
                                caption: "with regard to semantic constraints",
                                getchildren: [
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
                getchildren: [
                    {
                        caption: "Selection/Elimination",
                        getchildren: [
                            { caption: "Selection" },
                            { caption: "Elimination" }
                        ]
                    },
                    {
                        caption: "Displacement",
                        getchildren: [
                            {
                                caption: "Kontext kolize",
                                getchildren: [
                                    { caption: "Od jiného elementu" },
                                    { caption: "Od jiných elementů" },
                                    { caption: "Od sama sebe"}
                                ]
                            },
            {
                caption: "Terénní Reliéf",
                getchildren: [
                    { caption: "Zkrácení" },
                    {
                        caption: "Odsun",
                        getchildren: [
                            { caption: "Od jiného elementu" },
                            { caption: "Od sama sebe"}
                        ]
                    },
                    {
                        caption: "Paralelizace",
                        getchildren: [
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
                getchildren: [
                    {
                        caption: "Aggregation",
                        getchildren: [
                            {
                                caption: "Join features to 1 object",
                                getchildren: [
                                    {
                                        caption: "Amalgamation",
                                        getchildren: [
                                            { caption: "Fusion" },
                                            { caption: "Merge" }
                                        ]
                                    },
                                    { caption: "Combine" }
                                ]
                            },
                            {
                                caption: "Join feature to several objects",
                                getchildren: [
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
items = generalizationCards.getchildren()

export default items
