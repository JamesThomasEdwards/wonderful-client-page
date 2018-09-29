// React;
import React from 'react';
// Files;
import DiamondAngleLeft from '../shapes/DiamondAngleLeft.jsx';
import DiamondAngleRight from '../shapes/DiamondAngleRight.jsx';
import DiamondHorizontal from '../shapes/DiamondHorizontal.jsx';

// was going to attempt to make columns in the;
// BottomLeftShapeContainer, but temporaily made this into a row;
// so I could see work on the shapes without scolling down;
const BottomLeftContainerColumn = () => {
    return (
        <div className="bottom-left-shape-rows">
            <DiamondAngleLeft
                styleColor="diamond-angle-right__deep-dark-blue" />
            <DiamondAngleRight
                styleImage="diamond-angle-right__man-with-glasses" />
            <DiamondAngleRight
                styleColor="diamond-angle-right__deep-dark-blue" />
            <DiamondHorizontal
                styleColor="diamond-horizontal__grey-blue" />
            <DiamondAngleLeft
                styleColor="diamond-angle-left__dark-pale-blue" />
            <DiamondHorizontal
                styleImage="diamond-horizontal__girl-bw-image" />
        </div>
    );
};

export default BottomLeftContainerColumn;