import React, { Component } from 'react';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';


//Assets
import '../components/TreeView/assets/themes';
import '../components/TreeView/assets/modes';



class ContentExplorer extends Component {

    renderEditor() {
 
        return (
                <AceEditor
                    mode="javascript"
                    theme="solarized_dark"
                    value={this.props.fdata}
                    height="100%"
                    width="100%"
                    onChange={() => console.log('change')}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{$blockScrolling: true}}
                />
            
        );
    }

    render(){
        return(
            <div style={styles.editorStyle}>
                {this.renderEditor()}
            </div>
        );
       
    }
}

const styles = {
    editorStyle: {
        height: '100%',
        width: '100%'
    }
};

function mapStateToProps({ filedata}){
    return { fdata: filedata.fdata };
}

export default connect(mapStateToProps)(ContentExplorer);