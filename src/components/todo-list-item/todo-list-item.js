import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js';

import './todo-list-item.css';

class TodoListItem extends React.Component {

   checkTaskMethod = (event) =>{
       const idx = this.props.newArr.findIndex((el) => el.id === this.props.item.id);
       const lcArray = this.props.newArr;
       lcArray[idx].check = !lcArray[idx].check;
       this.props.checkTask(lcArray);
       if(event.currentTarget.parentElement.className === 'todo-list-item'){
           event.currentTarget.parentElement.className += ' done';
           event.currentTarget.parentElement.parentElement.parentElement.className += ' check-task';
       } else{
           event.currentTarget.parentElement.className = 'todo-list-item';
           event.currentTarget.parentElement.parentElement.parentElement.classList = 'todo-list-item-block form-control';
       }
       localStorage.setItem('Tasks', JSON.stringify(this.props.newArr));

   };
   deleteTaskMethod = () =>{
       const idx = this.props.newArr.findIndex((el) => el.id === this.props.item.id);
       const lcArray = [...this.props.newArr.slice(0, idx), ...this.props.newArr.slice(idx + 1)];
       this.props.deleteTask(lcArray);
       localStorage.setItem('Tasks', JSON.stringify(this.props.newArr));
   };


    render() {
        const {date, label, check} = this.props.item;

        let classNames = 'todo-list-item';
        let classNamesBlocks = 'todo-list-item-block form-control';


        if (check) {
            classNames += ' done';
            classNamesBlocks += ' check-task'
        }

        return (
            <div className={classNamesBlocks}>
                <div className='todo-list-item-content '>
                 <span
                     className={classNames}>

                <span className='todo-task-date'>{date}</span>

                    <span className='todo-task-text'>{label}</span>

                <span className='btn btn-outline-danger complete-task'
                      onClick={this.checkTaskMethod}>
                  <i className="fas fa-check"> </i>
                </span>

                 <span className='btn btn-outline-danger delete-task'
                       onClick={this.deleteTaskMethod}>
                     <i className="far fa-trash-alt"> </i>
                     </span>

                  </span>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        newArr: state.todoData
    }
};
export default connect(mapStateToProps, actions)(TodoListItem);