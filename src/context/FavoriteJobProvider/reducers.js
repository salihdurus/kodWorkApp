import {Alert} from 'react-native';
export default function (state, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      for (let index = 0; index < state.favoriteJobs.length + 1; index++) {
        try {
          if (state.favoriteJobs[index].id === action.payload.job.id) {
            Alert.alert('KodWork', 'Daha Önce Eklenmiş !');
            return state;
          } else {
            const newList = [...state.favoriteJobs, action.payload.job];
            Alert.alert('KodWork', 'Favorilere Eklendi');
            return {...state, favoriteJobs: newList};
          }
        } catch (err) {
          const newList = [...state.favoriteJobs, action.payload.job];
          Alert.alert('KodWork', 'Favorilere Eklendi');
          return {...state, favoriteJobs: newList};
        }
      }
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favoriteJobs: [
          ...state.favoriteJobs.filter(job => job !== action.payload.job),
        ],
      };
    default:
      return state;
  }
}
