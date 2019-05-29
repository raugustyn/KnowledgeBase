import React, { Component } from 'react';
import "./BaderBoard.css"
import PopoverPreview from "./PopoverPreview"
import { Button } from 'reactstrap';
import items from "./data"


export default class BaderBoard extends Component {

    BACKGROUND_COLORS = [
        'rgb(97, 189, 79)',
        'rgb(242, 214, 0)',
        'rgb(255, 159, 26)',
        'rgb(235, 90, 70)',
        'rgb(195, 119, 224)',
        '#0096F6'
    ]

    constructor (props) {
        super(props)
        this.depthSliderRef = React.createRef()
        this.verticalTextDepthSliderRef = React.createRef()
        this.maxDepth = 0
        this.state = {
            showDescription: props.showDescription,
            useBackgroundColor: props.useBackgroundColor,
            showControls: props.showControls,
            maxDepthShown: props.maxDepthShown,
            verticalTextDepth: props.verticalTextDepth
        }
    }


    buildCellContent(item, indent=0) {
        let name, description, previewImage;

        if (item) {
            name = item.name
            if (this.state.showDescription && item.description)
                description = <div className="Description">{item.description}</div>
            if (this.props.showImages && item.imageName)
                previewImage = <PopoverPreview imageName={item.imageName} />
        }

        let className = "BoardItem col_" + indent + (indent < this.state.verticalTextDepth ? " vertical-text" : "")
        return (
            <td className={className}>
                {name}
                {description}
                {previewImage}
            </td>
        )
    }

    oldRenderItems(items, indent=0) {
        if (items && (!this.state.maxDepthShown || indent <= this.state.maxDepthShown)) {
            let backgroundColor = 'white'
            if (this.state.useBackgroundColor) {
                backgroundColor = indent < this.BACKGROUND_COLORS.length ? this.BACKGROUND_COLORS[indent] : this.BACKGROUND_COLORS[0]
            }
            return items.map((item, index) => (
                <table key={index} className="BoardCell" style={{ backgroundColor: backgroundColor }} >
                    <tbody>
                    <tr key={index}>
                        {this.buildCellContent(item, indent)}
                        <td className="BoardItem">{this.oldRenderItems(item.items, indent + 1)}</td>
                    </tr>
                    </tbody>
                </table>))
        }
    }


    analyseItems(items, row, col, indent=0) {
        if (indent === 0) {
            this.maxDepth = 0
        }
        if (indent > this.maxDepth) {
            this.maxDepth = indent
        }
        if (!this.items) {
            this.maxRow = 0
            this.maxCol = 0
            this.items = []
        }
        if (items) {
            for (var item of items) {
                item.row = row
                item.col = col
                this.items.push(item)
                if (this.maxRow < row) this.maxRow = row
                if (this.maxCol < col) this.maxCol = col
                row = this.analyseItems(item.items, row, col+1, indent + 1)
                item.rowSpan = this.maxRow - item.row + 1
                item.outgoingRow = row
                row = row + 1
            }
            row = row - 1
        }

        return row
    }

    renderItem(item) {
        if (item) {
            return item.name + ":" + item.row + "x" + item.col + "=" + item.rowSpan
        }
        else {
            return ""
        }
    }

    getRowSpan(item) {
        if (item) {
            return item.rowSpan
        }
        else {
            return 1
        }
    }


    renderCols(cols) {
        return cols.map( (item, index) => <td key={index} className="BoardCell" > { this.renderItem(item)} </td> )
    }

    renderRow(row) {
        return row.map((cols, index) => <tr key={index}> { this.renderCols(cols) } </tr>)
    }

    switchColors() {
        this.setState( { useBackgroundColor: ! this.state.useBackgroundColor })
    }

    switchShowDescription() {
        this.setState( { showDescription: ! this.state.showDescription })
    }


    onDeptSliderChange() {
        this.setState({ maxDepthShown: this.depthSliderRef.current.value })
    }

    onVerticalTextDeptSliderChange() {
        this.setState({ verticalTextDepth: this.verticalTextDepthSliderRef.current.value })
    }

    onAlignClick() {
        for (var col=0; col<this.maxDepth; col++) {
            var maxWidth = 0;
            var choices = document.getElementsByClassName('BoardItem col_' + col);
            for (var i = 0; i < choices.length; ++i) {
                maxWidth = Math.max(maxWidth, choices[i].offsetWidth)
            }

            for (i = 0; i < choices.length; ++i) {
                choices[i].style.width = maxWidth + "px";
            }
        }
    }

    renderItems(items) {
        // Create empty matrix [this.maxRow, this.maxCol]
        let rows = []
        for (var row=0; row<=this.maxRow;row++) {
            let cols = []
            for (var col=0; col<=this.maxCol;col++) {
                cols.push(null)
            }
            rows.push(cols)
        }

        // Fill matrix with items
        for (var item of this.items) {
            rows[item.row][item.col] = item
        }

        let controls
        if (this.state.showControls) {
            controls = (
                <form>
                    <Button color="primary" onClick={this.switchColors.bind(this)}>Colors</Button>
                    <Button color="primary" onClick={this.switchShowDescription.bind(this)}>Description</Button>
                    <Button color="primary" onClick={this.onAlignClick.bind(this)}>Align</Button>

                    <div className="form-group">
                        <label>Vertical Text Depth</label>
                        <input
                            ref={this.depthSliderRef}
                            type="range" className="custom-range" min="0" max={this.maxDepth-1} style={{ width: "150px" }}
                            onChange={this.onDeptSliderChange.bind(this)} defaultValue={this.state.maxDepthShown}
                        />
                    </div>

                    <div className="form-group">
                        <label>Vertical Text Depth</label>
                        <input
                            ref={this.verticalTextDepthSliderRef}
                            type="range" className="custom-range" min="0" max={this.maxDepth-1} style={{ width: "150px" }}
                            onChange={this.onVerticalTextDeptSliderChange.bind(this)} defaultValue={this.state.verticalTextDepth}
                        />
                    </div>

                </form>
            )
        }

        return (
            <div>
                { controls }
                { this.oldRenderItems(items)}
            </div>
        )
    }


    render() {
        this.analyseItems(items, 0, 0)
        return this.renderItems(items)
    }

}

BaderBoard.defaultProps = {
    useBackgroundColor: true,
    showControls: true,
    showDescription: true,
    maxDepthShown: 3,
    verticalTextDepth: 0
}

// https://stackoverflow.com/questions/31159732/every-item-to-have-the-same-width-as-the-widest-element
