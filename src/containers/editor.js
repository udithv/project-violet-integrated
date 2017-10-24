import React, { Component } from 'react';
import { connect } from 'react-redux';
import SplitPane from 'react-split-pane';
import TreeContainer from './tree';
import ContentExplorer from './contentexplorer';
import EditorPane from './editor-pane';
import Footer from './footer';

//import 'font-awesome/css/font-awesome.min.css';

class Editor extends Component {
 
    renderHome() {
        return (
            <div style={{height: '100%',width: '100%'}}>
                UltraViolet Editor
            </div>
        );
    }  
    
    renderEditorPane(){
        return (
            <div style={{height: '100%',width: '100%'}}>
                <EditorPane />
                <ContentExplorer /> 
            </div>
        );
    }
    render() {
        return (
            <div>
                <SplitPane split="vertical" defaultSize={200}>
                    <div>
                        <TreeContainer />
                    </div>
                    {this.props.isHome ? this.renderHome() : this.renderEditorPane()}
                </SplitPane>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state){
    const isHome = state.chosen.length == 0 ? true : false;

    return { isHome };
}


export default connect(mapStateToProps)(Editor);