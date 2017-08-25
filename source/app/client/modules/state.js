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
        listData : undefined,
        errorMessage : ""
    },
    serve : {
        listData : undefined,
        errorMessage : ""
    },
    international : {
        listData : undefined,
        errorMessage : ""
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

const setData = (_type, _response) => ({
    type : _type,
    listData : _response.listData,
    errorMessage : _response.errorMessage
});

export const setPageType = (_pageType) => ({
    type : SET_PAGE_TYPE,
    pageType : _pageType
});

export const setListData = (_type) => (_dispatch, _getState) => {
    let currentListData;

    switch(_type) {
        case SET_ACTIVITY_LIST :
            currentListData = _getState().activity;
            break;
        case SET_SERVE_LIST :
            currentListData = _getState().serve;
            break;
        case SET_INTERNATIONAL_LIST :
            currentListData = _getState().international;
            break;
    }

    // Start loading
    _dispatch(setLoadingState(true));

    return requestData(_type).then(
        (_response) => {
            if (_response.errorMessage) {
                _dispatch(
                    setData(
                        _type,
                        {
                            listData : currentListData,
                            errorMessage : _response.errorMessage
                        }
                    )
                );
            } else {
                _dispatch(
                    setData(
                        _type,
                        {
                            listData : _response.data.response.body[0],
                            errorMessage : ""
                        } 
                    )
                );
            }

            // Stop loading
            _dispatch(setLoadingState(false));
        }
    ).catch(
        (_error) => {
            _dispatch(
                setData(
                    _type,
                    {
                        listData : currentListData,
                        errorMessage : _error
                    }
                )
            );

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
                    console.log(_action.type);
            return Object.assign({}, _state, {
                listData : _action.listData,
                errorMessage : _action.errorMessage
            });
        default :
            return _state;
    }
};

const serve = (_state = initData.serve, _action) => {
    switch (_action.type) {
        case SET_SERVE_LIST :
            console.log(_action.type);
            return Object.assign({}, _state, {
                listData : _action.listData,
                errorMessage : _action.errorMessage
            }); 
        default :
            return _state;
    }
};

const international = (_state = initData.international, _action) => {
    switch (_action.type) {
        case SET_INTERNATIONAL_LIST :
            return Object.assign({}, _state, {
                listData : _action.listData,
                errorMessage : _action.errorMessage
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