import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSingleItem} from '../actions';
import {Link} from 'react-router-dom';

class SingleItem extends Component{
    componentDidMount(){
        console.log('single propz:', this.props);
        this.props.getSingleItem(this.props.match.params.id);
    }

    render(){
        console.log('single propz:', this.props);
        const {title, details, created} = this.props.item;
        console.log(this.props.item);

        const time = new Date(parseInt(created));
        console.log(time.toDateString());
        // console.log(created.toString());
        // created = new Date (parseInt(created));
        // const time = new Date(1526343989774);
        // console.log(time[0]);
        

        return( 
        <div>
            <h1 className="center">{title}</h1>
            <div className="row right-align">
                <Link to="/" className="btn pink lighten-1">View Full List</Link>
            </div>
            <h4>{title}</h4>
            <p>Created: {time.toUTCString()} at {time.toLocaleTimeString()}</p>
            <p>{details}</p>
        </div>)
    }
}

function mapStateToProps(state){
    return{
        item: state.list.single
    }
}
export default connect(mapStateToProps, {getSingleItem})(SingleItem);