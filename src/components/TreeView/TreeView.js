import React, { Component } from 'react';
import axios from 'axios';

//SubComponents
import RootDir from './RootDir';

class TreeView extends Component {
   
    render() {
        return (
            <div>
                <RootDir data={this.props.treedata} />
            </div>
        );
    }
}

export default TreeView;
