import { HAREMS } from '../constants';

const haremReducer = (
    state = { loading: false, harems: [], err: null },
    action,
) => {
    switch (action.type) {
        case HAREMS.LOADING:
            return { ...state, loading: true }; // luôn phải để ...state ở đầu thì mới ghi đè được

        case HAREMS.LOADING_SUCCESS:
            return {
                ...state, // luôn phải để ...state ở đầu thì mới ghi đè được
                loading: false,
                harems: [...state.harems, ...action.harems],
            };

        case HAREMS.LOADING_ERROR:
            return { ...state, loading: false, err: action.err }; // luôn phải để ...state ở đầu thì mới ghi đè được

        default:
            return state;
    }
};

export default haremReducer;
