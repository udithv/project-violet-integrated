import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//Containers
import FileTree from './filetree';
//Actions 
import { fetchFileTree } from '../actions/index';

class Editor extends Component {
    componentWillMount() {
        this.props.fetchFileTree();
    }
    
    render() {
        return (
            <div>
                <FileTree />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchFileTree }, dispatch);
}

export default connect(null, mapDispatchToProps)(Editor);