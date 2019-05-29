import Card from "../../Cards/Card"


function addItems(parent, items)
{
    var result = []
    items.forEach( function (item, index) {
        let itemCard = new Card(parent.ref + "/" + index, item.name, item.description)
        result.push(itemCard)
        if (item.items && item.items.length > 0) {
            addItems(itemCard, item.items)
        }
    })
    if (parent && result.length) {
        parent.childern = result
    }
    return result
}

const items = [
    {
        name: "Constraint Context",
        items: [
            {
                name: "Element Rendering Context",
                description: "Problem can be solved by minor rendering changes",
                imageName: "./Samples/Bader/03_DisplacementFromItself.png"
            },
            {
                name: "Elements Context",
                items: [
                    {
                        name: "Two Elements Context",
                        description: "Most common context interacting two elements",
                        imageName: "./Samples/Bader/04_Shift.png"
                    },
                    {
                        name: "Multiple Elements Context",
                        description: "Multiple elements are part of conflict"
                    }
                ]
            }
        ]
    },
    {
        name: "Operators Application Strategy",
                items: [
                    {
                        name: "Batch",
                        imageName: "./img/ActionPlanIcon.png",
                        iconSize: 28
                    },
                    {
                        name: "Condition Action",
                        imageName: "./img/SweepIcon.png"
                    },
                    {
                        name: "Elements Processing",
                        items: [
                            {
                                name: "Sequential",
                                imageName: "./img/SequentialIcon.png"
                            },
                            {
                                name: "In Cluster",
                                imageName: "./img/ClusterIcon.png",
                                items: [
                                    {
                                        name: "Predefined",
                                        items: [
                                            {
                                                name: "Road and River Network"
                                            }
                                        ]
                                    },
                                    {
                                        name: "Context",
                                        items: [
                                            {name: "Spatial"}
                                        ]
                                    }
                                ]
                            },
                            {name: "Global"}
                        ]
                    },
                    { name: "Iterative" },
                    { name: "Least Square Fit" },
                    { name: "Simulated Annealing"},
                    { name: "Machine Learning" }
                ]

    },
    {
        name: "Operators (Solutions)",
        items : [
    {
        name: "Attribute Transformation",
        items: [
            {
                name: "Clasification",
                items: [
                    { name: "Thematic Selection" },
                    { name: "Thematic Aggregation" }
                ]
            }
            ]
    },
    {
        name: "Spatial Transformation",
        items: [
            {
                name: "Individual Objects",
                items: [
                    {
                        name: "Simplification",
                        items: [
                            { name: "Weeding" },
                            { name: "Unrestricted Simplification" }
                        ]
                    },
                    { name: "Collapse" },
                    {
                        name: "Enhancement",
                        description: "The shape and size of a feature may need to be enhanced to meet the legibility requirements of a map",
                        items: [
                            {
                                name: "with regard to geometric constraints",
                                items: [
                                    { name: "Enlargement" },
                                    { name: "Exaggeration (Caricature)" }
                                ]
                            },
                            {
                                name: "with regard to semantic constraints",
                                items: [
                                    { name: "Smoothing" },
                                    { name: "Fractalization" },
                                    { name: "Rectification/Squaring" }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                name: "Individual objects or Set of objects",
                items: [
                    {
                        name: "Selection/Elimination",
                        items: [
                            { name: "Selection" },
                            { name: "Elimination" }
                        ]
                    },
                    { name: "Displacement" }
                ]
            },
            {
                name: "Set of objects",
                items: [
                    {
                        name: "Aggregation",
                        items: [
                            {
                                name: "Join features to 1 object",
                                items: [
                                    {
                                        name: "Amalgamation",
                                        items: [
                                            { name: "Fusion" },
                                            { name: "Merge" }
                                        ]
                                    },
                                    { name: "Combine" }
                                ]
                            },
                            {
                                name: "Join feature to several objects",
                                items: [
                                    { name: "Typification"}
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
console.log("generalizationCards:", generalizationCards)

export default items
