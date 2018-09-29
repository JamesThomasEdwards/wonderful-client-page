// React;
import React, { Component } from 'react';
// Files;
import BottomLeftColumn from '../components/bottom-left-shape-grid/BottomLeftColumn.jsx';

export default class BottomLeftShapeContainer extends Component {
    state = {
        animate: false
    };
    render() {
        // const columns = [1, 2, 3, 4].map((columns, index) => {
        //     return (<div className="something-column">
        //         <BottomLeftColumn id={columns} />
        //     </div>)
        // });
        return (
            <div>
                {/* {columns} */}
                <BottomLeftColumn />
            </div>
        );
    };
};