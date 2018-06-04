import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getListData} from '../actions';
import {Link} from 'react-router-dom';


class List extends Component {
    componentDidMount(){
        this.props.getListData();
    }
    render(){
        const {listData} = this.props;
        if(!listData.length){
            return <h3 className="text-center">Loadin'</h3>;
        }
        const listItems = listData.map((item, index)=>{
            console.log(item);
            return(
            <li className="collection-item" key={index}>
            <Link to={`/item/${item._id}`}>{item.title}</Link>
            </li>
            )
        })
        return(
            <div>
                <h1 className="center">Quehaceres</h1>
                <div className="row right-align">
                <Link className="btn green lighten-3" to="/add-item">Add Item></Link>
                </div>
            <ul className="collection">
            {listItems}
            </ul>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {
        listData: state.list.all
    }
}
export default connect(mapStateToProps, {getListData})(List);