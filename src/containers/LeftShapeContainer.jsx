// React;
import React, { Component } from 'react';
// Files;
import DiamondAngleRight from '../components/shapes/DiamondAngleRight.jsx';

export default class LeftShapeContainer extends Component {
    state = {
        animate: false
    };
    render() {
        return (
            <div className="left-shape-container">
                <DiamondAngleRight
                    styleColor="diamond-angle-right__off-white-grey" />
            </div>
        );
    };
};