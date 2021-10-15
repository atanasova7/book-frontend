import { GET_BOOKS } from '../actions/types';

const initialState = {
  all: []
};

export default function(state = initialState, action) {
    console.log(action)
    switch (action.type) {      
    case GET_BOOKS:
      return {
        ...state,
        all: action.payload
      };
    default:
      return state;
  }
}
