import React, { Component } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import SampleActionsComponent from "./SampleActionsComponent.js"

// https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html


function previewFormatter(cell, row) {
  if (cell) {
      return <img alt={"Preview image for " + cell} className="FrammedImage" src={"./Samples/" + cell} />
  }

  return "";
}


function descriptionFormatter(cell, row) {
    return <div>{cell} <SampleActionsComponent/> </div>
}


class SamplesList extends Component {
  render() {
      const products = [
            { id: 1, name: "Church 01",     description: "Church without tower | CZ::Kostel bez věže", preview: "Church 01_400x900.png" },
            { id: 2, name: "Church 02",     description: "Church with one tower | CZ::Kostel s jednou věží", preview: "Church 02_400x900.png" },
            { id: 3, name: "Church 03",     description: "Church with two or more towers | CZ::Kostel se dvěma nebo více věžemi", preview: "Church 03_400x900.png" },
            { id: 4, name: "Church 05.1",   description: "Church with two towers at the frontage", preview: "Church 05.1_400x900.png" },
            { id: 5, name: "FerryVysehrad", description: "FerryVysehrad", preview: "FerryVysehrad_400x900.png" }
        ]

        const columns = [
            { dataField: 'id',          text: 'Id' },
            { dataField: 'name',        text: 'Name' },
            { dataField: 'description', text: 'Description', formatter: descriptionFormatter },
            { dataField: 'preview',     text: 'Preview' , formatter: previewFormatter }
        ];

    return (
      <BootstrapTable
        keyField='id' data={ products } columns={ columns } striped hover condensed
      />
    )
  }
}

export default SamplesList;