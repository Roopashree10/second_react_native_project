export const SetData = value => dispatch => {
  dispatch({
    type: 'SET',
    payload: value,
  });
};

export const setTitle = value => dispatch => {
  dispatch({
    type: 'TITLE',
    payload: value,
  });
};

export const setFavorite = value => dispatch => {
  dispatch({
    type: 'FAVORITES',
    payload: value,
  });
};

export const setShared = value => dispatch => {
  dispatch({
    type: 'SHARED',
    payload: value,
  });
};

export const setRecent = value => dispatch => {
  dispatch({
    type: 'RECENT',
    payload: value,
  });
};

export const setDeleted = value => dispatch => {
  dispatch({
    type: 'DELETED',
    payload: value,
  });
};

export const AddProduct = value => async dispatch => {
  dispatch({
    type: 'ADD',
    payload: value,
  });
};

export const RemoveProduct = value => async dispatch => {
  dispatch({
    type: 'DELETE',
    payload: value,
  });
};
