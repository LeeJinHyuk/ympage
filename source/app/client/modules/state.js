import { combineReducers } from 'redux';

// Actions
export const SET_ACTIVITY_LIST = "app/modules/state/SET_ACTIVITY_LIST";
export const SET_SERVE_LIST = "app/modules/state/SET_SERVE_LIST";
export const SET_INTERNATIONAL_LIST = "app/modules/state/SET_INTERNATIONAL_LIST";

// Init value
const init_activity = {
    listData : undefined
};

const init_serve = {
    listData : undefined
};

const init_international = {
    listData : undefined
};

const activity = (_state = init_activity, _action) => {
    switch (_action.type) {

        default :
            return _state;
    }
};

const serve = (_state = init_serve, _action) => {
    switch (_action.type) {

        default :
            return _state;
    }
};

const international = (_state = init_international, _action) => {
    switch (_action.type) {

        default :
            return _state;
    }
};

export default combineReducers({
    activity : activity,
    serve : serve,
    international : international
});

// Action Creators
export const setActivityListData = (_data) => ({
    type : SET_ACTIVITY_LIST,
    listData : _data
});

export const setServeListData = (_data) => ({
    type : SET_SERVE_LIST,
    listData : _data
});

export const setInternationalListData = (_data) => ({
    type : SET_INTERNATIONAL_LIST,
    listData : _data
});