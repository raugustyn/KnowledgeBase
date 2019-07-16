import Card from "../Card"
import { getCard } from "./cardsclient"

export default class CardsProvider {
    getCards() {
        let card = Card("01", "Card Caption", "Card Description")
        return [card]
    }
}
