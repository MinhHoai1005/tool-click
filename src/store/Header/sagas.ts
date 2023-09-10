import { takeEvery, put, select } from 'redux-saga/effects'
import { HeaderActionTypes } from './types'
import { setParamFromURL } from '../../utils'
import { StateReducer } from '../root-reducer'

const getPhone = (state: StateReducer) => state.header.searchText
const getCurrentTab = (state: StateReducer) => state.header.currentTab

export function* changeHeaderTitle(data: { payload: any }) {
    yield put({ type: HeaderActionTypes.CHANGE_TITLE, payload: data.payload })
}

export function* changeHeaderSearch(data: { payload: any }) {
    yield put({ type: HeaderActionTypes.CHANGE_SEARCH, payload: data.payload })
}

export function* changeHeaderIsSearch(data: { payload: boolean }) {
    if (data.payload === true) {
        const phone  = yield select(getPhone)
        const currentTab = yield select(getCurrentTab)
        setParamFromURL("phone", phone)

        if (currentTab)
            setParamFromURL("tab", currentTab)
    }
    
    yield put({ type: HeaderActionTypes.CHANGE_IS_SEARCH, payload: data.payload })
}

export function* changeHeaderIsMobile(data: { payload: any }) {
    yield put({ type: HeaderActionTypes.CHANGE_IS_MOBILE, payload: data.payload })
}

export function* headerWatcher() {
    yield takeEvery(HeaderActionTypes.CHANGE_TITLE_ACTION, changeHeaderTitle)
    yield takeEvery(HeaderActionTypes.CHANGE_SEARCH_ACTION, changeHeaderSearch)
    yield takeEvery(HeaderActionTypes.CHANGE_IS_SEARCH_ACTION, changeHeaderIsSearch)
    yield takeEvery(HeaderActionTypes.CHANGE_IS_MOBILE_ACTION, changeHeaderIsMobile)
}
