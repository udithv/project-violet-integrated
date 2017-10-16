import React, { Component } from 'react';
import { connect } from 'react-redux';

class FileTree extends Component {
    render() {
        console.log(this.props.filetree.pop());
        return (
            <div>
                FileTree
            </div>
        );
    }
}

function mapStateToProps({ filetree }) {
    return { filetree }
}

export default connect(mapStateToProps)(FileTree);
