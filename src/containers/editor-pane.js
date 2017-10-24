import React, { Component } from 'react';
import _ from 'lodash';
import Tabs from "react-draggable-tabs";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFileData, removeFileData, replaceFileData } from '../actions/index';

class EditorPane extends Component {
    constructor(props){
        super(props);
        this.selectTab = this.selectTab.bind(this);
        this.closeTab = this.closeTab.bind(this);
    }

    closeTab(removedIndex, removedID){
        
        this.props.removeFileData(removedID);

        if(this.props.chosen.length >= 2){
            const id = this.props.chosen[removedIndex - 1].id;
            this.props.replaceFileData(
                this.props.filecache[id]
            );
        }
   
    }

    selectTab(selectedIndex, selectedID) {
         const file = this.props.chosen.filter((file) => {
             return file.id == selectedID;
         });
       

         this.props.setFileData(file[0]);
        
      }

    render() {
        return (
            <Tabs
                tabs={this.props.chosen}
                closeTab={this.closeTab}
                selectTab={this.selectTab}
            />
            
        );
    }
}

function mapStateToProps({ chosen, filecache }){
    return { chosen, filecache };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ setFileData, removeFileData, replaceFileData}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(EditorPane);