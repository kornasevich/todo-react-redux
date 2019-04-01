export const addTask = (payload) =>{
  return {type: 'ADD_TASK', payload};
};

export const checkTask = (payload) =>{
  return {type: 'CHECK_TASK', payload};
};

export const deleteTask = (payload) =>{
  return {type: 'DELETE_TASK', payload};
};

export const sortTextUp = (payload) =>{
  return {type: 'SORT_TEXT_LIST_UP', payload};
};

export const sortTextDown = (payload) =>{
  return {type: 'SORT_TEXT_LIST_DOWN', payload};
};

export const sortDateUp = (payload) =>{
  return {type: 'SORT_DATE_LIST_UP', payload};
};

export const sortDateDown = (payload) =>{
  return {type: 'SORT_DATE_LIST_DOWN', payload};
};

export const filterDateMinValue = (payload) =>{
  return {type: 'FILTER_DATE_MIN_VALUE', payload};
};

export const filterDateMaxValue = (payload) =>{
  return {type: 'FILTER_DATE_MAX_VALUE', payload};
};

export const filterSearchPanel = (payload) =>{
  return {type: 'SEARCH_PANEL', payload};
};
