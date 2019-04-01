import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

import './search-panel.css';


 class SearchPanel extends React.Component{

     filterDateMinValueMethod = (event) =>{
       this.props.filterDateMinValue(event.target.value);
     };
     filterDateMaxValueMethod = (event) =>{
       this.props.filterDateMaxValue(event.target.value);
     };
     filterSearchPanelMethod = (event) =>{
       this.props.filterSearchPanel(event.target.value);
     };


    render() {
        return (
            <form className="search-input">
                <div className='item-status'>
                    <input type="date" className="form-control todo-task-date-filter min-date" onChange={this.filterDateMinValueMethod}/>
                    <input type="date" className="form-control todo-task-date-filter max-date" onChange={this.filterDateMaxValueMethod}/>

                </div>

                <input
                    className='search-panel form-control' onChange={this.filterSearchPanelMethod}
                />
            </form>
        )
    }

}

const mapStateToProps = (state) =>{
     return {
         newArr: state.todoData
     }
};

export default connect(mapStateToProps, actions)(SearchPanel);
