// React;
import React, { Component } from 'react';
// Files;
import TopMiddleShapeContainer from './containers/TopMiddleShapeContainer.jsx';
import LeftShapeContainer from './containers/LeftShapeContainer.jsx';
import AboutProfileCardContainer from './containers/AboutProfileCardContainer.jsx';
import BottomLeftShapeContainer from './containers/BottomLeftShapeContainer.jsx';

export default class App extends Component {
    state = {};
    render() {
        return (
            < div>
                <TopMiddleShapeContainer />
                <AboutProfileCardContainer />
                <LeftShapeContainer />
                <BottomLeftShapeContainer />
            </div >
        );
    };
};
