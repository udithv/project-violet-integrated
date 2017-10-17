import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactJson from 'react-json-view';
import _ from 'lodash';
import { fetchFileTree } from '../actions/index';

import TreeView from '../components/TreeView/TreeView';

class TreeContainer extends Component {
    componentDidMount(){
        this.props.fetchFileTree();
    }

    renderFileTree(filetree){
        return <TreeView treedata={filetree} />;
    }

    render() {
        const { filetree } = this.props;
        
        if(!filetree){
            return <div>Loading....</div>;
        }

        return (
            <div>
               {this.renderFileTree(filetree)}
            </div>
        );
    }
}

function mapStateToProps({ filetree }) {
    return { filetree }
}

export default connect(mapStateToProps, { fetchFileTree })(TreeContainer);
