
import React from 'react';

const SearchPrinter = ({action}) => (
    <div>
        <p>Printer search</p><input onChange={action} />
    </div>
);

export default SearchPrinter;