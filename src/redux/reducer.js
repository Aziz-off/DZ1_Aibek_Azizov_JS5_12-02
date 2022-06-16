export const reducer = (state= {count: []}, action) => {

    if (action.type === 'CREATE_NUMBERS') {
        return {
            ...state, count: [...state.count + +action.payload]
        }
    }
    else {
        return state;
    }

}