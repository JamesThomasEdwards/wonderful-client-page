// React;
import React from 'react';
// Props;
import PropTypes from 'prop-types';

const propTypes = {
    styleColor: PropTypes.string,
    styleImage: PropTypes.string,
};

const DiamondAngleRight = (props) => {
    return (
        <div className={props.styleColor ? props.styleColor : "diamond-angle-right"}>
            <div className={props.styleImage}>
            </div>
        </div>
    );
};

DiamondAngleRight.propTypes = propTypes;

export default DiamondAngleRight;
