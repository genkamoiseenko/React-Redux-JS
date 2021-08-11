const initialState = {
    generatedArray: null,
    generatedArrayPack: null,
    isValidWords: true,
    passedCounter: 0,
    failedCounter: 0,
};

export default function secondPageReducers (state = initialState, action) {

    switch (action.type) {
        case 'GENERATE_ARRAY_NEW_WORDS':
            return {
                ...state,
                generatedArray: action.payload.array,
                generatedArrayPack: action.payload.packOfArrays
            }
        case 'CHECK_USER_ANSWER':
            return {...state, isValidWords: action.payload}
        case 'RESET_IS_VALID_WORDS':
                return {...state, isValidWords: action.payload }
        case 'PASSED_COUNT':
            return {...state, passedCounter: action.payload }
        case 'FAILED_COUNT':
            return {...state, failedCounter: action.payload }
        case 'FAILED_AGAIN':
            return {...state,  failedCounter: action.payload }
        case 'RESET_COUNTERS':
            return {
                ...state,
                passedCounter: action.payload,
                failedCounter: action.payload
            }
        case 'ZERO_PASSED_COUNTER_AFTER_CHECK_ALL_PACK':
            return {...state, passedCounter: action.payload}
        case 'ZERO_FAILED_COUNTER_AFTER_CHECK_ALL_PACK':
            return {...state, failedCounter: action.payload }
        default:
            return state;
    }

}