import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFileData } from '../../actions/index';

class File extends Component {
     
    fileicon() {
        return <i className="fa fa-file-text" aria-hidden="true"></i>;
    }

    onClickHandler(){
        this.props.fetchFileData(this.props.file);
    }

    render() {
        
        return (
            <li onClick={this.onClickHandler.bind(this)}>
                {this.fileicon()} {this.props.file.name}
            </li>
        );
    }
}

 export default connect(null, { fetchFileData })(File);