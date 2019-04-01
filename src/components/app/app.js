import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import SortList from '../sort/sort';
import TodoListItemAdd from '../todo-list-item-add/todo-list-item-add';
import TodoList from '../todo-list/todo-list';

import './app.css'


const App = () => {
    return (
        <div className='todo-block'>

            <div className="d-flex filter-panel">
                <SearchPanel/>
            </div>
            <AppHeader/>
            <TodoListItemAdd/>
            <SortList/>
            <TodoList/>
            <div className="search-panel d-flex">
            </div>
        </div>
    );
};

export default App;