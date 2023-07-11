import {BUSCAR_NAME_POKEMON,GET_ALL,CREATE_POKEMON,FILTER,ORDER,NEXT_PAGE,PREV_PAGE} from "./action-types"


const initialState = {
    allCharacters: [],
    numPage:1,
  };
  
  const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case NEXT_PAGE:
        return{...state, 
          numPage:state.numPage +1
      }

      case PREV_PAGE:
        return {...state,
        numPage:state.numPage-1}


      case GET_ALL:
        return {
          ...state,
          allCharacters: payload
        };
        case BUSCAR_NAME_POKEMON:
          return {...state,allCharacters:payload};
  
      default:
        return {...state};
    }
  };
  
  export default reducer;