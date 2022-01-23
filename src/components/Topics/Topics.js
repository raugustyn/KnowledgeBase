import React, {Component} from 'react'
import {ListView} from "../ListView"
import TopicCard from "./TopicCard"
import {issues} from "../../data"
import ViewComfyIcon from "@mui/icons-material/ViewComfy";
import GridViewIcon from "@mui/icons-material/GridView";
import TableViewIcon from "@mui/icons-material/TableView";

class Topics extends Component {

    render() {
        return (
                <ListView
                    defaultDetail={0}
                    levelsOfDetail={[
                        <ViewComfyIcon />,
                        <GridViewIcon />,
                        <TableViewIcon />,
                        <TableViewIcon />
                    ]}
                    items={issues}
                    renderers={{
                        2: (item, key, levelOfDetail) => (<TopicCard topic={item} key={key} isClicable={true} levelOfDetail={levelOfDetail}/>)
                    }}
                />
        )
    }

}

export default Topics