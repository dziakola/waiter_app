import { API_URL } from '../config';

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const ADD_TABLE = createActionName('ADD_TABLE');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');

// action creators
export const updateTables = payload => ({type: UPDATE_TABLES, payload });
export const addTable = payload => ({type: ADD_TABLE, payload});
export const removeTable = payload => ({type: REMOVE_TABLE, payload});

export const fetchTables = () => {
  return (dispatch) => {
  fetch(`${API_URL}/tables`)
    .then((res) => res.json())
    .then((tables) => dispatch(updateTables(tables)));
  }
};
export const removeTableRequest = (id) => {
  return (dispatch) =>{
    const options = {
      method: 'DELETE',
    };
    fetch(`${API_URL}/tables/${id}`, options)
    .then(response=>response.json())
    .then(()=>dispatch(removeTable(id)));
  }
}
export const addTableRequest = (newTable) => {
  return (dispatch) =>{
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTable),
    };
    fetch(`${API_URL}/tables`, options)
    .then(()=>dispatch(addTable(newTable)));
  }
}
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES: 
      return [...action.payload]
    case ADD_TABLE:
      return [...statePart, {...action.payload}]
    case REMOVE_TABLE:
      return statePart.filter(table=>table.id !== action.payload);
    default:
      return statePart;
  };
};
//selectors
export const getAllTables = state => state.tables;


export default tablesReducer;