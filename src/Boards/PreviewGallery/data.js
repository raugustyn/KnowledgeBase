import { Card } from "../../Cards"
import references from "./references"


const items = [
    new Card(null, "Missing Shape Change Population", "", [], ['Displacement', 'Wrong'], { imageName: "Samples/TerrainRelief/01_MissingPopulation.png"}),
    new Card(null, "Displacement and Shortening", "", [], ['Displacement', 'Edge Adjustment', 'Wrong Solution'], { imageName: "Samples/TerrainRelief/02_DisplacementAndShortening.png"}),
    new Card(null, "Displacement from itself", "", [], ['Displacement', 'Wrong'], { imageName: "Samples/TerrainRelief/03_DisplacementFromItself.png"}),
    new Card(null, "Plain Shift", "", [], ['Displacement'], { imageName: "Samples/TerrainRelief/04_Shift.png"}),
    new Card(null, "DisplacementNoPopulation", "", [], ['Displacement', 'Wrong'], { imageName: "Samples/TerrainRelief/05_DisplacementNoPopulation.png"}),
    new Card(null, "DoubleCoalescence", "", [], ['Coalescence'], { imageName: "Samples/TerrainRelief/06_DoubleCoalescence.png"}),
    new Card(null, "SignificantShapeShift", "", [], ['Displacement'], { imageName: "Samples/TerrainRelief/07_SignificantShapeShift.png"}),
    new Card(null, "CoalescentAndPropagation", "", [], ['Coalescence'], { imageName: "Samples/TerrainRelief/08_CoalescentAndPropagation.png"}),
    new Card(null, "PartialShiftAndShapeShortening", "", [], ['Displacement', 'Edge Adjustment'], { imageName: "Samples/TerrainRelief/09_PartialShiftAndShapeShortening.png"}),
    new Card(null, "NoShiftCoalescence", "", [], ['Coalescence'], { imageName: "Samples/TerrainRelief/10_NoShiftCoalescence.png"}),
    new Card(null, "DrasticShapeModification", "", [], ['Displacement'], { imageName: "Samples/TerrainRelief/DrasticShapeModification.png"}),
    new Card(null, "NotOptimalButOky", "", [], ['Displacement'], { imageName: "Samples/TerrainRelief/NotOptimalButOky.png"}),
]


const referencesCards = references.map(item => new Card(null, item.caption, "", [], item.labels, { imageName: "/References/" + item.caption + ".png"}))
export default referencesCards
