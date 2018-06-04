import React, {Component} from 'react';
import {connect} from 'react-redux';
import {clearDeletedItem, getSingleItem, toggleCompleteItem, deleteItem} from '../actions';
// import * as actions from '../actions';
import {Link} from 'react-router-dom';


class SingleItem extends Component{
    componentDidMount(){
        console.log('single propz:', this.props);
        this.props.getSingleItem(this.props.match.params.id);
    }

    componentWillUnmount(){
        this.props.clearDeletedItem();
    }

        handleToggleComplete(){
            this.props.toggleCompleteItem(this.props.match.params.id);
        }

        async handleDeleteButton(){
           await this.props.deleteItem(this.props.match.params.id);
           this.props.history.push('/');
        }
    render(){
        console.log('single propz:', this.props);
        const {title, details, complete, created, completed} = this.props.item;
        console.log(this.props.item);

        const created_time = new Date(parseInt(created));
        const completed_time = new Date(parseInt(completed));
        console.log(created_time.toDateString());
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
            <p>Created: {created_time.toString()} at {created_time.toLocaleTimeString()}</p>
            <p>{details}</p>
            <p>{complete ? `Completed ${completed_time.toUTCString()}` : 'Item is incomplete'}</p>
            <button onClick={this.handleToggleComplete.bind(this)} className={`btn ${complete ? 'green darken-1' : 'blue'}`}>Mark as {complete ? 'incomplete' : 'complete'}</button>
            <button onClick={this.handleDeleteButton.bind(this)} className="btn red darken-2 align-right">Delete item</button>
        </div>)
    }
}

function mapStateToProps(state){
    return{
        item: state.list.single
    }
}
export default connect(mapStateToProps, {getSingleItem, deleteItem, toggleCompleteItem, clearDeletedItem})(SingleItem);