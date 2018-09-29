// React;
import React from 'react';
// Files;
import DiamondAngleLeft from '../shapes/DiamondAngleLeft.jsx';
import DiamondAngleRight from '../shapes/DiamondAngleRight.jsx';
import DiamondHorizontal from '../shapes/DiamondHorizontal.jsx';

const BottomLeftContainerColumn = (props) => {
    const col = [1, 2, 3, 4].map((ele, ind) => {
        return (
            <div className={"content"}>
                {/* <Diamond id={ele} /> */}
                {/* <DiamondSide id={ele} /> */}
            </div>
        );
    });
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