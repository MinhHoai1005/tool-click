import { Reducer } from "redux"
import { HeaderState, HeaderActionTypes } from "./types"

// Type-safe initialState!
const initialState: HeaderState = {
    loading: false,
    data: [],
    searchText: "",
    currentTab: "",
    isSearch: false,
    isMobile: false,
}

export const headerReducer: Reducer<HeaderState> = (state = initialState, { type, payload }) => {
    switch (type) {
        case HeaderActionTypes.CHANGE_TITLE:
            return { ...state, data: payload }
        case HeaderActionTypes.CHANGE_SEARCH:
            return { ...state, searchText: payload.data, currentTab: payload.action }
        case HeaderActionTypes.CHANGE_IS_SEARCH:
            return { ...state, isSearch: payload }
        case HeaderActionTypes.CHANGE_IS_MOBILE:
            return { ...state, isMobile: payload }

        default:
            return state
    }
}
