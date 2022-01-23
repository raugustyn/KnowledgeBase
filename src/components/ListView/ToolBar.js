import React, {Component} from 'react';
import './ListView.css'
import SortCard from "./SortCard"
import ViewTypeSelection from "./ViewTypeSelectionCard"
import ToggleButtons from "./ToggleButtons";


class ToolBar extends Component {
  /**
   * #Toolbar component
   * This component implements ListView controls toolbar.
   *
   */
    render() {
      console.log(this.props)
        return (
            <div className="Toolbar">
                <ToggleButtons
                    defaultSelection={this.props.defaultDetail}
                    buttons={this.props.levelsOfDetail}
                    onChangeSelection={this.props.onChangeViewType}
                />
                { this.props.sorting ? <SortCard /> : null }
            </div>
        )
    }

}

export default ToolBar