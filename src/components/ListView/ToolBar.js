import React, {Component} from 'react';
import './ListView.css'
import SortCard from "./SortCard"
import ViewTypeSelection from "./ViewTypeSelectionCard"
import LoDCard from "./LoDCard"

class ToolBar extends Component {
  /**
   * #Preview:
   * ## header 2
   *
   */
    render() {
        return (
            <div className="Toolbar">
                <ViewTypeSelection />
                <LoDCard />
                <SortCard />
            </div>
        )
    }

}

export default ToolBar