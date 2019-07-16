import BadgesPanel from "./BadgesPanel"

export default class BadgesFilterPanel extends BadgesPanel {

    onCheckBoxChange(sender, newState) {
        console.log("BadgesFilterPanel.onCheckBoxChange('" + sender.props.name + "', " + newState + ")")
        if (this.props.onCheckBoxChange) {
            this.props.onCheckBoxChange(sender, newState)
        }
    }

}
