import React, { Component } from 'react';
import { connect } from 'react-redux';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    componentDidMount() {
        
    }

    render() {

        return (
           <div>
               <h1>خوش آمدید</h1>
           </div>
        );
    }
}

const mapStateToProps = state => ({
    
});

export default connect(mapStateToProps)(Main);