import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
};

const result = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                //action.result * 2 kimi emeliyyatlar burada meslehet gorulur, cunki stateler burada update olunur.
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
            return {
                ...state,
                results: state.results.filter(result => result.id !== action.resultId)
            }
        default:
            return state;        
    }
};

export default result;