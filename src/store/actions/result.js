import * as actionTypes from './actionTypes';

export const saveResult = res => {
    //res * 2 kimi emeliyyat burada meslehet gorulmur.
    return {
        type: actionTypes.STORE_RESULT,
        result: res 
    }
}

export const storeResult = res => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(res))
        }, 2000)
    }
}

export const deleteResult = resId => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: resId
    }
}