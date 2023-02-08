export const setToken = value => dispatch => {
  dispatch({
    type: 'TOKEN',
    payload: value,
  });
};

export const setOwner = value => dispatch => {
  dispatch({
    type: 'OWNER',
    payload: value,
  });
};

export const setPopup = value => dispatch => {
  dispatch({
    type: 'POPUP',
    payload: value,
  });
};

export const setProjectApi = value => dispatch => {
  dispatch({
    type: 'PROJECT',
    payload: value,
  });
};

export const setUser = value => dispatch => {
  dispatch({
    type: 'USER',
    payload: value,
  });
};

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

export const addFavorites = value => dispatch => {
  dispatch({
    type: 'ADDFAVORITES',
    payload: value,
  });
};

export const setShared = value => dispatch => {
  dispatch({
    type: 'SHARED',
    payload: value,
  });
};

export const AddShareData = value => dispatch => {
  dispatch({
    type: 'ADDTOSHARE',
    payload: value,
  });
};

export const AddRecentData = value => dispatch => {
  dispatch({
    type: 'ADDTORECENT',
    payload: value,
  });
};

export const setRestoreShared = value => dispatch => {
  dispatch({
    type: 'RESTORESHARED',
    payload: value,
  });
};

export const setRecent = value => dispatch => {
  dispatch({
    type: 'RECENT',
    payload: value,
  });
};

export const setRestoreRecent = value => dispatch => {
  dispatch({
    type: 'RESTORERECENT',
    payload: value,
  });
};

export const setDeleted = value => dispatch => {
  dispatch({
    type: 'DELETED',
    payload: value,
  });
};

export const AddDeleted = value => dispatch => {
  dispatch({
    type: 'SETDELETED',
    payload: value,
  });
};

export const Restore = value => async dispatch => {
  dispatch({
    type: 'RESTORE',
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
