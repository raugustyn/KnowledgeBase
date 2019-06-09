import React, { Component } from 'react';
import {Button} from "reactstrap"
import CheckBoxButton from "./CheckBoxButton"


export default class CheckListPanel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: props.items,
            showProgress: props.showProgress,
            enableAddItems: props.enableAddItems
        }
        this.checkBoxesRefs = []
    }

    toggleItem(ref, index) {
        let newItems = this.state.items.map(function(checkListItem, itemIndex) {
            const itemChecked = (index === itemIndex) ? ref.current.checked : checkListItem[1]

            return [checkListItem[0], itemChecked]
        })

        this.setState({ items: newItems })
    }

    render () {
        this.rowKey = 0
        let checkItems, content, addItemButton
        if (this.state.items) {
            let checkedCount = 0
            checkItems = []
            let itemIndex = 0
            for (var checkListItem of this.state.items) {
                this.rowKey = this.rowKey + 1
                const itemLabel = checkListItem[0]
                const itemChecked = checkListItem[1]

                if (itemChecked) {
                    checkedCount = checkedCount + 1
                }
                const itemRef = React.createRef()
                this.checkBoxesRefs.push(itemRef)
                checkItems.push(
                    <div key={this.rowKey}>
                        <CheckBoxButton ref={itemRef} onChange={this.toggleItem.bind(this, itemRef, itemIndex)} checked={itemChecked} size={1}/> {itemLabel}
                    </div>
                )
                itemIndex = itemIndex + 1
            }


            const percentDone = Math.round(100 * checkedCount / this.state.items.length)
            const backgroundColor = percentDone === 100 ? "#61bd4f" : "#007bff"

            content = (
                <div>
                    { checkItems }
                    <div className="progress"  style={{ marginTop: "8px" }}>
                        <div className="progress-bar" role="progressbar" style={{width: percentDone + "%", backgroundColor: backgroundColor }} aria-valuenow="25"
                             aria-valuemin="0" aria-valuemax="100">{percentDone}
                        </div>
                    </div>
                </div>
            )
        }

        if (this.state.enableAddItems) {
            addItemButton = <Button color="secondary" className="NoWrapText" style={{ marginTop: "8px" }} disabled>Add an item</Button>
        }

        return <div> {content} {addItemButton} </div>
    }
}
CheckListPanel.defaultProps = { showProgress: true, enableAddItems: true };
