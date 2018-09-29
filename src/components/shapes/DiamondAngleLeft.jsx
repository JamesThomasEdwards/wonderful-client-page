// React;
import React from 'react';

const DiamondAngleLeft = (props) => {
    return (
        <div className={props.styleColor ? props.styleColor : "diamond-angle-left"}>
            <div className={props.styleImage}>
            </div>
        </div>
    );
};

export default DiamondAngleLeft;
