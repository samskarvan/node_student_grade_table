import React, {Component} from 'react';
import {studentData} from '../actions';
import {connect} from 'react-redux';


class Test extends Component{
    componentDidMount(){
        this.props.studentData();
    }

    render(){
        return(<div>
            <h1>helloooo world</h1>
        </div>
        )
    }
}

export default connect(null, {studentData})(Test);