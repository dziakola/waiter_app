import { API_URL } from '../config';

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const ADD_TABLE = createActionName('ADD_TABLE');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');
const EDIT_TABLE = createActionName('EDIT_TABLE');

//selectors
export const getAllTables = (state) => state.tables;
// action creators
export const updateTables = payload => ({ type: UPDATE_TABLES, payload });
export const addTable = payload => ({ type: ADD_TABLE, payload });
export const removeTable = (payload) => ({ type: REMOVE_TABLE, payload });
export const editTable = payload => ({ type: EDIT_TABLE, payload });

//requests
export const fetchTables = () => {
  return (dispatch) => {
    fetch(`${API_URL}/tables`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        else return res.json()
      })
      .then((tables) => dispatch(updateTables(tables)));
  }
};

export const addTableRequest = (newTable) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newTable),
    };
    fetch(`${API_URL}/tables`, options)
    .then((res)=> {
      if(!res.ok) {
        throw new Error('Something went wrong');
      }
      res.json().then((data)=>dispatch(addTable(newTable)))
    })
    .catch(error => console.log("Error: ", error));
  }
}

/* export const removeTableRequest = (id) => {
  return (dispatch) => {
    const options = {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({"id":id}),
    };
    fetch(`${API_URL}/tables/${id}`, options)
    .then((res)=> {
      if(!res.ok) {
        throw new Error('Something went wrong');
      }
      else {
        return res.json()
      }
    }).then(dispatch(removeTable(id)))
    .catch(error => console.log("Error: ", error));

  }
} */
export const removeTableRequest = (id) => {
  return (dispatch) => {
    const removedId = {id};

    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(removedId),
    }
    fetch(`${API_URL}/tables/${id}`, options)
      .then((res) => res.json())
      //.then((data) => console.log('data', data));
      .then((table) => dispatch(removeTable(table.id)));
  };
};

export const changeTableRequest = (editedTable) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ ...editedTable }),
    };
    fetch(`${API_URL}/tables/${editedTable.id}`, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        return dispatch(editTable(editedTable))
      })
      .catch(error => console.log("Error: ", error));
  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return [...action.payload]
    case ADD_TABLE:
      return [...statePart, { ...action.payload }]
    case REMOVE_TABLE:
      return statePart.filter((table) => table.id !== action.payload);
    case EDIT_TABLE:
      return statePart.map((table) =>
        table.id === action.payload.id ? { ...table, ...action.payload } : table
      );
    default:
      return statePart;
  };
};

export default tablesReducer;