import { IHeader } from "../../model"
// [NAME_CONSTRANT] = '@@[namespace]/[NAME_CONSTRANT]',
// ex: FETCH_SUCCESS = '@@header/FETCH_SUCCESS',
export enum HeaderActionTypes {
    CHANGE_TITLE_ACTION = '@@header/CHANGE_TITLE_ACTION',
    CHANGE_TITLE = '@@header/CHANGE_TITLE',
    CHANGE_SEARCH_ACTION = '@@header/CHANGE_SEARCH_ACTION',
    CHANGE_SEARCH = '@@header/CHANGE_SEARCH',
    CHANGE_IS_SEARCH_ACTION = '@@header/CHANGE_IS_SEARCH_ACTION',
    CHANGE_IS_SEARCH = '@@header/CHANGE_IS_SEARCH',
    CHANGE_IS_MOBILE_ACTION = '@@header/CHANGE_IS_MOBILE_ACTION',
    CHANGE_IS_MOBILE = '@@header/CHANGE_IS_MOBILE',
}

export interface HeaderState {
    readonly loading: boolean
    readonly data: Array<IHeader>
    readonly searchText: string
    readonly currentTab: string
    readonly isSearch: boolean
    readonly isMobile: boolean
}
