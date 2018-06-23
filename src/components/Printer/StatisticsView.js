import React from 'react';

const PrinterStatisticsView = ({color, bw}) => (
    <ul>
        <li>Number of color printers: {color}</li>
        <li>Number of black and white printers: {bw}</li>
    </ul>
);

export default PrinterStatisticsView;