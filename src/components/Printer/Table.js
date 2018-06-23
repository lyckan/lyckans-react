
import React from 'react';

const PrinterTable = ({data, tableName}) => (
    <table className={tableName}>
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Color</th>
                <th>Tags</th>
            </tr>
        </thead>
        <tbody>
            {data.map((printer, i) => 
                <tr key={printer.id}>
                    <td>{printer.id}</td>
                    <td>{printer.name}</td>
                    <td>{printer.color}</td>
                    <td>
                        { printer.tags.map((tag, index) => 
                            <span key={index + printer.id}>{tag} </span>
                        )}
                    </td>   
                </tr>
            )}
        </tbody>
    </table>
);

export default PrinterTable;