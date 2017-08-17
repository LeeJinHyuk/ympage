import { combineReducers } from 'redux';
import axios from 'axios';

/**
 * init value
 */
const initData = {
    state : {
        pageType : undefined,
        isLoading : false
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

/**
 * private logic function
 */
const requestData = (_type) => {
    let result;

    switch(_type) {
        case SET_ACTIVITY_LIST :
            result = axios.get("https://kytza9xk2k.execute-api.ap-northeast-1.amazonaws.com/content/list/getCertiProgrmList/10");
            break;
        case SET_SERVE_LIST :
            result = axios.get("https://kytza9xk2k.execute-api.ap-northeast-1.amazonaws.com/content/list/getVolProgrmList/10");
            break;
        case SET_INTERNATIONAL_LIST :
            result = axios.get("https://kytza9xk2k.execute-api.ap-northeast-1.amazonaws.com/content/list/getYngbgsIntrlExchgProgrmList/10");
            break;
    }

    return result;
};

/**
 * Actions (private, public)
 */
const SET_LOADING_STATE = "app/modules/state/SET_LOADING_STATE";
export const SET_PAGE_TYPE = "app/modules/state/SET_PAGE_TYPE";
export const SET_ACTIVITY_LIST = "app/modules/state/SET_ACTIVITY_LIST";
export const SET_SERVE_LIST = "app/modules/state/SET_SERVE_LIST";
export const SET_INTERNATIONAL_LIST = "app/modules/state/SET_INTERNATIONAL_LIST";

/**
 * Action Creators (private, public)
 */
const setLoadingState = (_isLoading) => ({
    type : SET_LOADING_STATE,
    isLoading : _isLoading
});

export const setPageType = (_pageType) => ({
    type : SET_PAGE_TYPE,
    pageType : _pageType
});

export const setListData = (_type) => (_dispatch) => {
    

    _dispatch(setLoadingState(true));

    return requestData(_type).then(
        (_response) => {
            console.log(_response);
            _dispatch(setLoadingState(false));
        }
    ).catch(
        (_error) => {
            console.log(_error);
            _dispatch(setLoadingState(false));
        }
    );
};

/**
 * Reducers
 */
const state = (_state = initData.state, _action) => {
    let state;

    switch (_action.type) {
        case SET_PAGE_TYPE :
            state = Object.assign({}, _state, {
                pageType : _action.pageType
            });
            break;
        case SET_LOADING_STATE :
            state = Object.assign({}, _state, {
                isLoading : _action.isLoading
            }); 
            break; 
        default :
            state = _state;
            break;
    }

    return state;
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
    state : state,
    activity : activity,
    serve : serve,
    international : international
});