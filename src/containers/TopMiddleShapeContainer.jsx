// React;
import React, { Component } from 'react';
// Files;
import DiamondAngleLeft from '../components/shapes/DiamondAngleLeft.jsx';
import DiamondAngleRight from '../components/shapes/DiamondAngleRight.jsx';

export default class TopMiddleShapeContainer extends Component {
    state = {
        animate: false
    };
    render() {
        return (
            <div className="top-middle-shape-container">
                <DiamondAngleLeft
                    styleImage="diamond-angle-left__man-with-beard" />
                <DiamondAngleRight
                    styleImage="diamond-angle-right__girl-with-darkhair" />
            </div>
        );
    };
};