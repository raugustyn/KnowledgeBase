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

        this.state = {
            levelOfDetail: 0
        }
    }

    render() {
        const { items } = this.props
        if (items && items.length) {
            const renderer = items[0].renderer
            console.log(renderer)
            if (renderer && renderer.icons && renderer.getComponent) {
                return (
                    <div className="ListView">
                        {renderer.icons ?
                            <ToolBar
                                levelsOfDetail={renderer.icons}
                                defaultDetail={renderer.defaultDetail || 0}
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