import { combineReducers } from 'redux';

// Actions
const SET_PAGE_TYPE = "app/modules/state/SET_PAGE_TYPE";
const SET_ACTIVITY_LIST = "app/modules/state/SET_ACTIVITY_LIST";
const SET_SERVE_LIST = "app/modules/state/SET_SERVE_LIST";
const SET_INTERNATIONAL_LIST = "app/modules/state/SET_INTERNATIONAL_LIST";

// Init value
const initData = {
    state : {
        pageType : undefined
    },
    activity : {
        listData : undefined
    },
    serve : {
        listData : undefined
    },
    international : {
        listData : undefined
    }
};

const pageType = (_state = initData.state, _action) => {
    switch (_action.type) {
        case SET_PAGE_TYPE :
            return Object.assign({}, _state, {
                pageType : _action.pageType
            });
        default :
            return _state;
    }
};

const activity = (_state = initData.activity, _action) => {
    switch (_action.type) {
        case SET_ACTIVITY_LIST :
            return Object.assign({}, _state, {
                listData : _action.listData
            });
        default :
            return _state;
    }
};

const serve = (_state = initData.serve, _action) => {
    switch (_action.type) {
        case SET_SERVE_LIST :
            return Object.assign({}, _state, {
                listData : _action.listData
            });
        default :
            return _state;
    }
};

const international = (_state = initData.international, _action) => {
    switch (_action.type) {
        case SET_INTERNATIONAL_LIST :
            return Object.assign({}, _state, {
                listData : _action.listData
            });
        default :
            return _state;
    }
};

export default combineReducers({
    state : pageType,
    activity : activity,
    serve : serve,
    international : international
});

// Action Creators
export const setPageType = (_pageType) => ({
    type : SET_PAGE_TYPE,
    pageType : _pageType
});

export const setActivityListData = (_listData) => ({
    type : SET_ACTIVITY_LIST,
    listData : _listData
});

export const setServeListData = (_listData) => ({
    type : SET_SERVE_LIST,
    listData : _listData
});

export const setInternationalListData = (_listData) => ({
    type : SET_INTERNATIONAL_LIST,
    listData : _listData
});