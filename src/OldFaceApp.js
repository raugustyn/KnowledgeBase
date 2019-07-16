import React, { Component } from 'react';
import './OldApp.css';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./ConsoleEnhancements"
import componentExamples from "./ExampleItems"


class App extends Component {

    constructor() {
        super()
        this.state = {
            activePageName: "PreviewGallery",
            activeComponentName: null
        };
        this.pageContent = null;
    }

    switchPage(newActivePageName) {
        this.setState({ activePageName: newActivePageName} )
    }

    switchToComponentExample(componentName) {
        this.setState({ activePageName: componentName} )
    }

    render() {
        const selectedExamples = componentExamples.filter(exampleData => exampleData.caption === this.state.activePageName);
        if (selectedExamples && selectedExamples.length > 0) {
            const example = selectedExamples[0];
            const exampleComponent = React.createElement(example.componentClass, example.props);
            console.error("Fix the problem with code example!!!")
            //const props = (Object.keys(example.props).length === 1) && (!example.multilineProps) ? JSON.stringify(example.props):JSON.stringify(example.props, null, 4);
            let props;
            const codeString = 'React.createElement(<' + this.state.activePageName + ' />, ' + props  + ');';

            this.pageContent = (
                <div>
                    <h2>{example.caption}</h2>
                    <ReactMarkdown source={example.description} />


                    <div className="bs-example">
                        <div style={{ backgroundColor: example.backgroundColor }}>
                            {exampleComponent}
                        </div>
                    </div>
                    <div className="highlight">
                        <SyntaxHighlighter language='javascript' style={darcula}>{codeString}</SyntaxHighlighter>
                    </div>

                </div>
            )

        }
        else {
            this.pageContent = (
                <div className="alert alert-danger" role="alert">
                    Unknown example: {this.state.activePageName}
                </div>
            )
        }

        return (
            <div className="App">
                <div className="MenuBar"> Knowledge Portal Components </div>


                <div className="container-fluid">
                    <div className="row flex-xl-nowrap">
                        <div className="col-12 col-md-3 col-xl-2 bd-sidebar LeftMenuBar">
                            <ul className="nav flex-sm-column">
                                { componentExamples.map((example, index) => (
                                    <li key={index} className="nav-item">
                                        <a className="nav-link" href="./#" ref={example.caption} onClick={this.switchToComponentExample.bind(this, example.caption)}>
                                            { example.caption }
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
                            <div className="PageDesktop">
                                {this.pageContent}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;
