import React, { Component } from 'react';

//import PrinterTable from '../../components/Printer/Table';

class PrinterListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    concat(...args) {
        return args.reduce((acc, val) => [...acc, ...val]);
      }

    render() {
        let tags = [].concat(...this.props.data.map((printer => {
            return printer.tags.map((tag) => {
                return tag;
            });
        })));
        
        let a = tags.reduce(function (acc, curr) {
            acc[curr] ? acc[curr]++ : acc[curr] = 1;
            return acc;
            }, {});
         

        let uniqTags = [...new Set(tags)];
        
        return (
                <ul>
                    {uniqTags.slice(0, 3).map((tag, index) => 
                        <li key={tag + index}>{tag} {a[tag]}</li>
                    )}
                </ul>
        );
    }
}


export default PrinterListPage;