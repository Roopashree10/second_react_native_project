const storage = {
  projects: [],
  titles: 'Home',
  isFavorites: [],
  shared: [],
  recent: [],
  isDeleted: [],
};

const reducer = (state = storage, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'SET':
      return {...state, projects: [...action.payload]};
    case 'TITLE':
      return {...state, titles: action.payload};
    case 'FAVORITES':
      return {...state, isFavorites: [...state.isFavorites, action.payload]};
    case 'SHARED':
      return {...state, shared: [...action.payload]};
    case 'RECENT':
      return {...state, recent: [...action.payload]};
    case 'ADD':
      const projects = state.projects.filter(
        item => item.id !== action.payload.id,
      );

      const afterduplicates = [...projects, action.payload];
      return {
        ...state,
        projects: afterduplicates,
      };

    case 'DELETED':
      return {...state, isDeleted: [...state.isDeleted, action.payload]};

    case 'DELETE':
      const storedata = state.projects;
      storedata.map(data => {
        if (data.id === payload.id) {
          const index1 = storedata.indexOf(data);
          return storedata.splice(index1, 1);
        }
      });

      return {...state, projects: [...storedata]};

    default:
      return state;
  }
};

export default reducer;
