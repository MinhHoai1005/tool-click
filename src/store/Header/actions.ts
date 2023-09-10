import { IHeader } from "../../model"
import { HeaderActionTypes } from "./types"

export function changeHeaderTitle(data: IHeader[]) {
    return { type: HeaderActionTypes.CHANGE_TITLE_ACTION, payload: data }
}

export function changeSearch(data: string, action: string) {
    return { type: HeaderActionTypes.CHANGE_SEARCH_ACTION, payload: { data, action } }
}

export function changeIsSearch(isSearch: boolean) {
    return { type: HeaderActionTypes.CHANGE_IS_SEARCH_ACTION, payload: isSearch }
}

export function changeIsMobile(isMobile: boolean) {
    return { type: HeaderActionTypes.CHANGE_IS_MOBILE_ACTION, payload: isMobile }
}
