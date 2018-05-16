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
        const {title, details} = this.props.item;

        return( 
        <div>
            <h1 className="center">{title}</h1>
            <div className="row right-align">
                <Link to="/" className="btn pink lighten-1">View Full List</Link>
            </div>
            <h4>{title}</h4>
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