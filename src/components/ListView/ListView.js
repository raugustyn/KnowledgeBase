import React, {Component, Fragment} from 'react'
import './ListView.css'
import ToolBar from "./ToolBar"

export const VIEW_STYLE = {
    0: 'Small Cards View',
    1: 'Middle Cards View',
    2: 'Detailed Cards View',
    3: 'Table View'
}

class ListView extends Component {

    constructor(props) {
        super()

        let viewStyle = props.viewStyle
        if (!viewStyle) {
            const keys = Object.keys(props.renderers)
            viewStyle = keys[keys.length - 1]
        }
        this.state = {
            viewStyle: viewStyle
        }
    }

    render() {
        const { items, renderers } = this.props

        if (items && renderers) {
            const renderer = this.props.renderers[this.state.viewStyle]
            if (renderer) {
                return (
                    <div className="ListView">
                        <ToolBar />
                        <div className="Content">
                            {items.map((item, index) => <div key={index} style={{ width: 300, margin: 15}}>{renderer(item, index)} </div>)}
                        </div>
                    </div>
                )
            }
        }

        return <Fragment />

    }
}

export default ListView