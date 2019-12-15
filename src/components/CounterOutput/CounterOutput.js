import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
        {props.label}: {props.value}
    </div>
);

export default counterOutput;