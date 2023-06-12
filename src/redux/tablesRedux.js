import { API_URL } from '../config';

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

// action creators
export const updateTables = payload => ({type: UPDATE_TABLES, payload });

export const fetchTables = (dispatch) => {
  fetch(`${API_URL}/tables`)
    .then((res) => res.json())
    .then((tables) => dispatch(updateTables(tables)));
};

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES: 
      return [...action.payload]
    default:
      return statePart;
  };
};
//selectors
export const getAllTables = state => state.tables;


export default tablesReducer;