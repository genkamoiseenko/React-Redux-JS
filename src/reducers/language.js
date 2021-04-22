const initialState = {
    language: null
};
export default function language (state = initialState, action) {

    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {...state, language: action.payload }
        default:
            return state;
    }
}
