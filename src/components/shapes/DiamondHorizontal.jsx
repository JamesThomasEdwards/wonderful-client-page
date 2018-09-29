// React;
import React from 'react';

const DiamondHorizontal = (props) => {
    return (
        <div className={props.styleColor ? props.styleColor : "diamond-horizontal"}>
            <div className={props.styleImage}>
            </div>
        </div>
    );
};

export default DiamondHorizontal;
