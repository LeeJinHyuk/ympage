// Actions
const CHANGE_TAB = "app/modules/state/CHANGE_TAB";

// Init value
const init_value = {
    tab_index : "0"
};

// Action Creators
export const changeTab = (_index) => ({
    type : CHANGE_TAB,
    tab_index : _index
});

// Reducer
export default reducer = (_state = init_value, _action) => {
    switch(_action.type) {
        case CHANGE_TAB :
            return Object.assign({}, _state, {
                tab_index : _state.tab_index
            });
        default :
            return state;
    }
};