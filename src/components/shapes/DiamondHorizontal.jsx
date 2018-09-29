// React;
import React from 'react';
// Props;
import PropTypes from 'prop-types';

const propTypes = {
    styleColor: PropTypes.string,
    styleImage: PropTypes.string,
};

const DiamondHorizontal = (props) => {
    return (
        <div className={props.styleColor ? props.styleColor : "diamond-horizontal"}>
            <div className={props.styleImage}>
            </div>
        </div>
    );
};

DiamondHorizontal.propTypes = propTypes;

export default DiamondHorizontal;
