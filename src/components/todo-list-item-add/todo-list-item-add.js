import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js';


import './todo-list-item-add.css';


class TodoListItemAdd extends React.Component {
    addTaskMethod = (event) => {
        event.preventDefault();
        const text = document.querySelector('.todo-task-text-add').value;
        const date = document.querySelector('.todo-task-date').value;

        if (date !== '' && text !== '') {
            document.querySelector('.todo-task-text-add').style.border = '1px solid #ced4da';
            document.querySelector('.todo-task-date').style.border = '1px solid #ced4da';

            const dateLC = date.split('-').reverse().join('.');
            const newItem = {
                date: dateLC,
                label: text,
                id: Math.random(),
                check: false
            };

            this.props.addTask(newItem);
            localStorage.setItem('Tasks', JSON.stringify(this.props.todoArr));

        } else if (date === '' && text === '') {
            document.querySelector('.todo-task-text-add').style.border = '1px solid red';
            document.querySelector('.todo-task-date').style.border = '1px solid red';
        } else if (date === '') {
            document.querySelector('.todo-task-date').style.border = '1px solid red';
            document.querySelector('.todo-task-text-add').style.border = '1px solid #ced4da';
        } else if (text === '') {
            document.querySelector('.todo-task-date').style.border = '1px solid #ced4da';
            document.querySelector('.todo-task-text-add').style.border = '1px solid red';
        }
    };

    render() {
        return (
            <form className='todo-list-item-add' onSubmit={this.addTaskMethod}
            >

                <input
                    className='form-control todo-task-date'
                    type='date' />
                <input
                    className='form-control todo-task-text-add'
                    type='text' placeholder='Add task'/>

                <button className='btn btn-info btn-add'>Add</button>
            </form>
        );
    }

}

const mapStateToProps = (state) =>{
    return {
        todoArr: state.todoData
    }
};

export default connect(mapStateToProps, actions)(TodoListItemAdd);