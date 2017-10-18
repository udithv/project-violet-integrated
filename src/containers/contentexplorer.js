import React, { Component } from 'react';
import { connect } from 'react-redux';
import AceEditor from 'react-ace';

import brace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/github';
import 'brace/theme/solarized_dark';

class ContentExplorer extends Component {
    render() {
        return (
            <div style={styles.editorStyle}>
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

function mapStateToProps({ filedata }){
    return { fdata: filedata.fdata };
}

export default connect(mapStateToProps)(ContentExplorer);