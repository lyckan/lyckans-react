import React, { Component } from 'react';

import PrinterTable from '../../components/Printer/Table';
import PrinterSearch from '../../components/Printer/Search';
import PrinterStatistics from './PrinterStatistics';
import Tags from './Tags';
import './Printer.css';

class PrinterListPage extends Component {

    constructor() {
        super();
    
        this.state = {
            printers: [
                {id:1, name:'printer 1', color: 'true', tags:['Sthlm','Devroom']},
                {id:2, name:'printer 2', color: 'true', tags:['Sthlm','PrinterRoom']},
                {id:3, name:'printer 3', color: 'false', tags:['Sthlm','Devroom']},
                {id:4, name:'printer 4', color: 'true', tags:['Sthlm','DevOp']},
                {id:5, name:'printer 5', color: 'false', tags:['Sthlm','Devroom']},
                {id:6, name:'printer 6', color: 'true', tags:['Sthlm','Unknown']},
                {id:7, name:'ukprinter 1', color: 'true', tags:['Sthlm','Unknown']},
                {id:8, name:'ukprinter 2', color: 'true', tags:['Sthlm','Unknown']},
                {id:9, name:'ukprinter 3', color: 'false', tags:['Sthlm','Unknown']},
                {id:10, name:'ukprinter 4', color: 'true', tags:['Sthlm','Unknown']},
                {id:11, name:'ukprinter 5', color: 'true', tags:['Sthlm','Unknown']},
                {id:12, name:'ukprinter 6', color: 'true', tags:['Sthlm','Unknown']},
                {id:13, name:'ukprinter 7', color: 'false', tags:['Sthlm','Unknown']},
                {id:14, name:'ukprinter 8', color: 'true', tags:['Sthlm','Unknown']},
                {id:15, name:'ukprinter 9', color: 'true', tags:['Sthlm','Unknown']}
            ],
            search: 'printer'
            
        }
        
        for(var i = 16; i < 500; i++) {
            this.state.printers.push({id:i, name:'ukprinter ' + i, color: 'true', tags:['Sthlm','Unknown']});
        }

        


        this.updatePrinters = this.updatePrinters.bind(this);
        //this.homePageClick = this.homePageClick.bind(this);
    }

    updatePrinters(e) {
        this.setState({search:e.target.value})
        
    }


    render() {
        let printers = this.state.printers.filter((printer) => {
                return printer.name.indexOf(this.state.search) !== -1;
            }
        );
        
        return (
            <div className="row">
                <div className="col-md-9">
                    <PrinterSearch action={this.updatePrinters} />
                    <div>Search word: {this.state.search}</div>
                    <PrinterTable data={printers} tableName="printer-table"/>
                </div>
                <div className="col-md-3">
                    <div className="tags-box">
                        <b>Tags for all printers</b>
                        <Tags data={this.state.printers}/>
                    </div>
                    <div className="tags-box">
                        <b>Tags for searched printers</b>
                        <Tags data={printers}/>
                    </div>
                    <div className="tags-box">
                        <b>Statistics for all printers</b>
                        <PrinterStatistics printers={this.state.printers}/>
                    </div>
                    <div className="tags-box">
                        <b>Statistics for searched printers</b>
                        <PrinterStatistics printers={printers}/>
                    </div>
                </div>
            </div>
        );
    }
}


export default PrinterListPage;