import React, { Component } from 'react';
import Papa from 'papaparse';
import BaderBoard from "./BaderBoard"
import Card from "../../Cards/Card"
import items from "./data"


function addItems(parent, items)
{
    var result = []
    items.forEach( function (item, index) {
        let itemCard = new Card(parent.ref + "/" + index, item.caption, item.description)
        result.push(itemCard)
        if (item.getchildren && item.getchildren.length > 0) {
            addItems(itemCard, item.getchildren)
        }
    })
    if (parent && result.length) {
        parent.children = result
    }
    return result
}


export default class csvReader extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            csvData: []
        }
        this.getData = this.getData.bind(this);
    }

    componentDidMount() {
        /* Reads input CSV data */
        this.getCsvData()
    }

    getData (result) {
        console.log('getData', result)
        this.setState({
            isLoading: false,
            csvData: result.data
        });
    }

    fetchCsv() {
        console.log('fetching Csv data...')
        let inputFileName = './ResultsValidation.csv'
        //inputFileName = "./NmetPrincipProcesniModelTvorbyZTM.csv"
        return fetch(inputFileName).then(function (response) {
            let reader = response.body.getReader();
            let decoder = new TextDecoder('utf-8');

            return reader.read().then(function (result) {
                return decoder.decode(result.value);
            });
        });
    }

    async getCsvData() {
        console.log("getCsvData")
        let csvData = await this.fetchCsv();

        Papa.parse(csvData, { complete: this.getData });
    }


    renderAsCSVRows(){
        let buildRow = function(rowData) {
            return rowData.map((item, index) => <td>{item}</td>)
        }

        return (
            <div>
                <table>
                    <tbody>
                    {this.state.csvData.map((rowData, index) => <tr key={"row_" + index}>{buildRow(rowData)}</tr>)}
                    </tbody>
                </table>
            </div>
        )

    }

    renderAsMindMapItems() {
        let items = this.state.csvData.filter((rowData, index) => rowData[1] === 'Circle')
        items = items.map(function(rowData) { return { id: rowData[0], caption: rowData[10], getchildren: [] } })

        let lines = this.state.csvData.filter(rowData => rowData[1] === 'Line' && rowData[6] !== rowData[7])
        lines = lines.map(function(rowData) { return { startId: rowData[6], endId: rowData[7] } })

        let getItemById = function(id) {
            return items.filter(item => item.id === id)[0]
        }

        for (var line of lines) {
            let startItem = getItemById(line.startId)
            let endItem = getItemById(line.endId)
            startItem.getchildren.push(endItem)
        }

        console.log("items.length", items.length)
        console.log("lines.length", lines.length)
        console.log("items", items)

        let generalizationCards = new Card("Generalization", "Generalization")
        addItems(generalizationCards, items)
        items = generalizationCards.getchildren()

        return <BaderBoard items={items}/>
    }

    render() {
        let result
        if (this.state.isLoading) {
            result = <div>Is loading...</div>
        }
        else {
            result = this.renderAsMindMapItems()
        }
        return result
    }
}
