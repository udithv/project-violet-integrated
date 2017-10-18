import React, { Component } from 'react';
import SplitPane from 'react-split-pane';
import TreeContainer from './tree';
import ContentExplorer from './contentexplorer';

//import 'font-awesome/css/font-awesome.min.css';

class Editor extends Component {
 
    
    render() {
        return (
            <div>
                <SplitPane split="vertical" defaultSize={200}>
                    <div>
                        <TreeContainer />
                    </div>
                    <div style={{height: '100%',width: '100%'}}>
                       <ContentExplorer /> 
                    </div>
                </SplitPane>
               
            </div>
        );
    }
}



export default Editor;