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
            viewStyle: viewStyle,
            levelOfDetail: 0
        }
    }

    render() {
        const { items } = this.props
        if (items) {
            const renderer = items[0].renderer
            console.log(renderer)
            console.log(renderer && renderer.icons && renderer.getComponent)
            //const renderer = this.props.renderers[this.state.viewStyle]
            if (renderer && renderer.icons && renderer.getComponent) {
                return (
                    <div className="ListView">
                        {renderer.icons ?
                            <ToolBar
                                levelsOfDetail={renderer.icons}
                                defaultDetail={renderer.defaultDetail}
                                onChangeViewType={(newSelection) => { this.setState({levelOfDetail: newSelection}) }}
                            />
                            :
                            null
                        }
                        <div className="Content">
                            {items.map((item, index) => <div key={index} style={{ width: 300, margin: 15}}>{renderer.getComponent(item, index, this.state.levelOfDetail)} </div>)}
                        </div>
                    </div>
                )
            }
        }

        return <Fragment />

    }

    oldrender() {
        const { items, renderers, levelsOfDetail, defaultDetail } = this.props
        if (items && renderers) {
            const renderer = this.props.renderers[this.state.viewStyle]
            if (renderer) {
                return (
                    <div className="ListView">
                        {levelsOfDetail ?
                            <ToolBar
                                levelsOfDetail={levelsOfDetail}
                                defaultDetail={defaultDetail}
                                onChangeViewType={(newSelection) => { this.setState({levelOfDetail: newSelection}) }}
                            />
                            :
                            null
                        }
                        <div className="Content">
                            {items.map((item, index) => <div key={index} style={{ width: 300, margin: 15}}>{renderer(item, index, this.state.levelOfDetail)} </div>)}
                        </div>
                    </div>
                )
            }
        }

        return <Fragment />

    }
}

export default ListView