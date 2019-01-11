import React from 'react';

const Pageheader = props => (
    <header>
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
)

export default Pageheader;