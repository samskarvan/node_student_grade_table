import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {addtoDoItem} from '../actions';

class AddItem extends Component {
    async handleAddItem(values){
        try{
            await this.props.addtoDoItem(values);
            this.props.history.push('/');
        }catch(err){
            console.warn(err.message);
        }
        console.log('Form Values:', values);
       }
    
    renderInput({label, input, meta: {touched, error}}){
        return(
            <div>
                <label>{label}</label>
                <input type="text" {...input}/>
                <p className="red-text">{touched&&error}</p>
            </div>
        )
    }

    render(){
        const {handleSubmit} = this.props;
        return(
            <div className="center">
             <h1>add to do item</h1>
            <div className="row right-align">
           
            <Link to="/" className="btn magenta lighten-2">View List</Link>
            <div className="row">
            <form onSubmit={handleSubmit(this.handleAddItem.bind(this))} className="col s2 m8 offset-m2">
                <Field name="title" label="Item Title"component={this.renderInput}/>
                <Field name="details" label="Item Details" component={this.renderInput}/>
                <button className="btn purple lighten-2">Add Item</button>
            </form>
            </div>
            </div>    
            </div>
        )
    }
}

function validate({title, details}){
    const errors = {};

    if(!title){
        errors.title='please enter a task';
    }

    if(!details){
        errors.details='please enter task details';
    }

    return errors;
};


AddItem = reduxForm({
    form:'addItem',
    validate
})(AddItem);

export default connect(null, {addtoDoItem})(AddItem);