import React, {Component} from 'react';
import './StackedPaper.css'

const StackedPaper = (props) => (
            <div className={"Diagonal-paper " + (props.className || '')} >
                {props.children}
            </div>
)

export default StackedPaper