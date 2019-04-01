import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import './sort.css';

class SortList extends React.Component {
    LabelInDate = (label) => {
        return label.split('.').reverse().join('-');
    };

    dateSortUp = (taskBlockA, taskBlockB) => {
        return new Date(this.LabelInDate(taskBlockA.date)) - new Date(this.LabelInDate(taskBlockB.date));
    };

    dateSortDown = (taskBlockA, taskBlockB) => {
        return new Date(this.LabelInDate(taskBlockB.date)) - new Date(this.LabelInDate(taskBlockA.date));
    };

    textSortUp = (taskBlockA, taskBlockB) => {
        if (taskBlockA.label.toUpperCase() < taskBlockB.label.toUpperCase()) return 1;
    };

    textSortDown = (taskBlockA, taskBlockB) => {
        if (taskBlockA.label.toUpperCase() > taskBlockB.label.toUpperCase()) return 1;
    };


    sortTextUpMethod = () =>{
        const sortArray = this.props.newArr.slice(0);
        sortArray.sort(this.textSortUp);
        this.props.sortTextUp(sortArray);
    };


    sortTextDownMethod = () =>{
        const sortArray = this.props.newArr.slice(0);
        sortArray.sort(this.textSortDown);
        this.props.sortTextDown(sortArray);
    };


    sortDateUpMethod = () =>{
        const sortArray = this.props.newArr.slice(0);
        sortArray.sort(this.dateSortUp);
        this.props.sortDateUp(sortArray);
    };


    sortDateDownMethod = () =>{
        const sortArray = this.props.newArr.slice(0);
        sortArray.sort(this.dateSortDown);
        this.props.sortDateDown(sortArray);
    };


    render() {
        return (
            <div className='sort'>

                <div className='sort-list_date'>
                    <div className='sort-list_up'  onClick={this.sortDateUpMethod}> </div>
                    <div className='sort-list_down' onClick={this.sortDateDownMethod}> </div>
                </div>

                <div className='sort-list_text'>
                    <div className='sort-list_up' onClick={this.sortTextUpMethod}> </div>
                    <div className='sort-list_down' onClick={this.sortTextDownMethod}>  </div>
                </div>

            </div>
        )
    }


}

const mapStateToProps = (state) =>{
  return {
      newArr: state.todoData
  }
};

export default connect(mapStateToProps, actions)(SortList);