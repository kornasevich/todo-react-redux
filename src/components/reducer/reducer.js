const reducer = (
    state = {
        todoData: JSON.parse(localStorage.getItem("Tasks")) || [],
        term: '',
        valueMin: '',
        valueMax: '',
    }
    , action) => {
    switch (action.type) {
        case 'ADD_TASK':
            const newArr = [...state.todoData, action.payload];
            return {
                ...state,
                todoData: newArr
            };

        case 'CHECK_TASK':
            return {
                ...state,
                todoData: action.payload
            };


        case 'DELETE_TASK':
            return {
                ...state,
                todoData: action.payload
            };


        case 'SORT_TEXT_LIST_UP':
            return {
                ...state,
                todoData: action.payload
            };


        case 'SORT_TEXT_LIST_DOWN':
            return {
                ...state,
                todoData: action.payload
            };


        case 'SORT_DATE_LIST_UP':
            return {
                ...state,
                todoData: action.payload
            };


        case 'SORT_DATE_LIST_DOWN':
            return {
                ...state,
                todoData: action.payload
            };


        case 'FILTER_DATE_MIN_VALUE':
            return {
                ...state,
                valueMin: action.payload
            };


        case 'FILTER_DATE_MAX_VALUE':
            return {
                ...state,
                valueMax: action.payload
            };


        case 'SEARCH_PANEL':
            return {
                ...state,
                term: action.payload
            };

        default:
            return state;
    }
};

export default reducer;