import { ITEMS_HAS_ERRORED, ITEMS_IS_LOADING, ITEMS_FETCH_DATA_SUCCESS } from "../constants/index";


export function search(state = [], action) {
    switch (action.type) {
        case ITEMS_HAS_ERRORED:
            return action.hasErrored;
        
        case ITEMS_IS_LOADING:
            return action.isLoading;
        
        case ITEMS_FETCH_DATA_SUCCESS:
            return action.items;
        
        default:
            return state;
    }
}

export default search