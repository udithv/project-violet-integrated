import React, { Component } from 'react';
import Select from 'react-select';

class Footer extends Component {

    

    render(){
        return (
            <div style={styles.footerStyle} >
                Footer
            </div>
        );
    }
}



const styles = {
    footerStyle: {
        height: 25,
        backgroundColor: 'blue',
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',
        color: 'white',
        zIndex: 4
    }

};

export default Footer;