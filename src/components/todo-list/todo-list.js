
import React from 'react'
import {connect} from 'react-redux';

import TodoListItem from '../todo-list-item/todo-list-item.js';
import './todo-list.css';


class TodoList extends React.Component {

    getElements = (item) => {
        return (
            <TodoListItem key={item.id}
                          item={item}
            />
        );
    };

    LabelInDate = (label) => {
        return label.split('.').reverse().join('-');
    };

    filter = (items, term = '', valueMin = '', valueMax = '') => {
        if (term.length === 0 && valueMin === '' && valueMax === '') {
            return items;
        }
        if (valueMin === '') {
            valueMin = "2000-01-01";
        }

        if (valueMax === '') {
            valueMax = '3000-01-01';
        }
        return items.filter((item) => {
            return item.label.toUpperCase().indexOf(term.toUpperCase()) > -1
                && +new Date(valueMin) <= +new Date(this.LabelInDate(item.date))
                && +new Date(this.LabelInDate(item.date)) <= +new Date(valueMax);
        })
    };

    render() {
        const visibleItems = this.filter(this.props.todoArr , this.props.term, this.props.valueMin , this.props.valueMax);
        return (
            <div className='list-group todo-list '>
                {visibleItems.map(this.getElements)}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todoArr: state.todoData,
        term: state.term,
        valueMin: state.valueMin,
        valueMax: state.valueMax
    }
};


export default connect(mapStateToProps, {})(TodoList);

