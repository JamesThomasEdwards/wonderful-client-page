// React;
import React, { Component } from 'react';
// Files;
import BottomLeftColumn from '../components/bottom-left-shape-grid/BottomLeftColumn.jsx';

export default class BottomLeftShapeContainer extends Component {
    state = {
        animate: false
    };
    render() {
        return (
            <div>
                <BottomLeftColumn />
            </div>
        );
    };
};