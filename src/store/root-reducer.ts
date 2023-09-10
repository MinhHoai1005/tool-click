import { combineReducers } from "redux"
// import { authReducer } from "./Auth/reducer"
// import { AuthState } from "./Auth/types"
import { headerReducer } from "./Header/reducer"
import { HeaderState } from "./Header/types"
// import { sidebarReducer } from "./SideBar/reducer"
// import { SideBarState } from "./SideBar/types"

export interface StateReducer {
    // auth: AuthState
    header: HeaderState
    // sidebar: SideBarState
}

export const rootReducer = combineReducers<StateReducer>({
    // auth: authReducer,
    header: headerReducer,
    // sidebar: sidebarReducer
})
