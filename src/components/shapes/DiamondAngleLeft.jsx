// React;
import React from 'react';
// Props;
import PropTypes from 'prop-types';

const propTypes = {
    styleColor: PropTypes.string,
    styleImage: PropTypes.string,
};

const DiamondAngleLeft = (props) => {
    return (
        <div className={props.styleColor ? props.styleColor : "diamond-angle-left"}>
            <div className={props.styleImage}>
            </div>
        </div>
    );
};

DiamondAngleLeft.propTypes = propTypes;

export default DiamondAngleLeft;
