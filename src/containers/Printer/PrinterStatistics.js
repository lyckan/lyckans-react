import React, { Component } from 'react';

import PrinterStatisticsView from '../../components/Printer/StatisticsView';

class PrinterStatistics extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        let numOfColorPrinters = this.props.printers.filter((printer) => printer.color === "true").length;
        let numOfbwPrinters = this.props.printers.filter((printer) => printer.color === "false").length;

        return (
            <div>
                <PrinterStatisticsView color={numOfColorPrinters} bw={numOfbwPrinters}/> 
            </div>
        );
    }
}


export default PrinterStatistics;