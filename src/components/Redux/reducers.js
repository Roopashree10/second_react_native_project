const storage = {
  owner: '',
  projects: [],
  projectsApi: [],
  token: '',
  titles: 'Home',
  isFavorites: [],
  shared: [],
  recent: [],
  isDeleted: [],
  users: [],
  popup: false,
};

const reducer = (state = storage, action) => {
  console.log('state', state);
  const {type, payload} = action;
  switch (type) {
    case 'TOKEN':
      const token = JSON.parse(JSON.stringify(action.payload));
      console.log(token);
      return {...state, token: token};
    case 'OWNER':
      const owner = JSON.parse(JSON.stringify(action.payload));
      return {...state, owner: owner};
    case 'POPUP':
      const popup = JSON.parse(JSON.stringify(action.payload));
      return {...state, popup: popup};
    case 'PROJECT':
      const newValue = JSON.parse(
        JSON.stringify([...state.projectsApi, action.payload]),
      );
      return {
        ...state,
        users: [],
        projectsApi: newValue,
      };
    case 'USER':
      return {...state, users: [...state.users, action.payload]};
    case 'SET':
      return {...state, projects: action.payload};
    case 'TITLE':
      return {...state, titles: action.payload};
    case 'FAVORITES':
      return {...state, isFavorites: [...state.isFavorites, ...action.payload]};
    case 'ADDFAVORITES':
      const updatedFavorites = state.isFavorites.filter(item => {
        if (item.id !== action.payload.id) {
          return item;
        }
      });
      const newArray = [...updatedFavorites, action.payload];
      return {...state, isFavorites: JSON.parse(JSON.stringify(newArray))};
    case 'SHARED':
      return {...state, shared: action.payload};

    case 'ADDTOSHARE':
      const sharedData = JSON.parse(JSON.stringify(state.shared));
      sharedData.map(item => {
        if (item.id === action.payload.id) {
          const index = sharedData.indexOf(item);
          sharedData.splice(index, 1, action.payload);
        }
      });

      const updatedSharedData = [...sharedData];
      return {
        ...state,
        shared: JSON.parse(JSON.stringify(updatedSharedData)),
      };
    case 'RECENT':
      return {...state, recent: [...action.payload]};

    case 'ADDTORECENT':
      const recentData = JSON.parse(JSON.stringify(state.recent));
      recentData.map(item => {
        if (item.id === action.payload.id) {
          const index = recentData.indexOf(item);
          recentData.splice(index, 1, action.payload);
        }
      });

      const updatedRecentData = [...recentData];
      return {
        ...state,
        recent: JSON.parse(JSON.stringify(updatedRecentData)),
      };
    case 'ADD':
      const projects = JSON.parse(JSON.stringify(state.projects));
      projects.map(item => {
        if (item.id === action.payload.id) {
          const index = projects.indexOf(item);
          projects.splice(index, 1, action.payload);
        }
      });
      return {
        ...state,
        projects: [...projects],
      };

    case 'DELETED':
      return {...state, isDeleted: [...action.payload]};

    case 'SETDELETED':
      const setIsDeleted = JSON.parse(
        JSON.stringify([...state.isDeleted, action.payload]),
      );
      return {...state, isDeleted: setIsDeleted};

    case 'RESTORE':
      const deleted = JSON.parse(JSON.stringify(state.isDeleted));
      deleted.map(item => {
        if (item.id === action.payload.id) {
          const index = deleted.indexOf(item);
          deleted.splice(index, 1);
        }
      });
      const updatedDeleteArray = JSON.parse(
        JSON.stringify([...state.projects, action.payload]),
      );
      return {
        ...state,
        projects: updatedDeleteArray,
        isDeleted: [...deleted],
      };

    case 'RESTORESHARED':
      const sharedDeleted = JSON.parse(JSON.stringify(state.isDeleted));
      sharedDeleted.map(item => {
        if (item.id === action.payload.id) {
          const index = sharedDeleted.indexOf(item);
          sharedDeleted.splice(index, 1);
        }
      });

      const updatedSharedArray = JSON.parse(
        JSON.stringify([...state.shared, action.payload]),
      );
      return {
        ...state,
        shared: updatedSharedArray,
        isDeleted: [...sharedDeleted],
      };

    case 'RESTORERECENT':
      const recentDeleted = JSON.parse(JSON.stringify(state.isDeleted));
      recentDeleted.map(item => {
        if (item.id === action.payload.id) {
          const index = recentDeleted.indexOf(item);
          recentDeleted.splice(index, 1);
        }
      });

      const updatedRecentArray = JSON.parse(
        JSON.stringify([...state.recent, action.payload]),
      );
      return {
        ...state,
        recent: updatedRecentArray,
        isDeleted: [...recentDeleted],
      };

    case 'DELETE':
      const storedata = state.projects;
      storedata.map(data => {
        if (data.id === payload.id) {
          const index1 = storedata.indexOf(data);
          return storedata.splice(index1, 1);
        }
      });
      const newArrays = JSON.parse(JSON.stringify([...storedata]));

      return {...state, projects: newArrays};

    default:
      return state;
  }
};

export default reducer;
