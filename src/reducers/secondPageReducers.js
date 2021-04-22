const initialState = {
    generatedArray: null,
    isValidWords: true,
    passedCounter: null,
    failedCounter: null,
};

export default function secondPageReducers (state = initialState, action) {

    switch (action.type) {
        case 'GENERATE_ARRAY_NEW_WORDS':
            return {...state, generatedArray: action.payload }
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
        default:
            return state;
    }

}