import React, {Component} from 'react'
import {ListView} from "../ListView"
import TopicCard from "./TopicCard"
import {issues} from "../../data"
import { CgDetailsLess, CgDetailsMore } from "react-icons/cg"
import { BiDetail } from "react-icons/bi";
import { ImParagraphJustify } from "react-icons/im";
import { BsTable} from "react-icons/bs";


class Topics extends Component {

    render() {
        return (
                <ListView
                    defaultDetail={0}
                    levelsOfDetail={[
                        <CgDetailsLess />,
                        <CgDetailsMore />,
                        <BiDetail />,
                        <ImParagraphJustify />,
                        <BsTable />
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