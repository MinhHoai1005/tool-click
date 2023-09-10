import { all, fork } from "redux-saga/effects"
// import { setAuthWatcher } from "./Auth/sagas"
// import { sidebarWatcher } from "./SideBar/sagas"
import { headerWatcher } from "./Header/sagas"


export default function* rootSagas() {
    yield all([
        // `fork()` any other store sagas down here...
        // fork(setAuthWatcher),
        // fork(sidebarWatcher),
        fork(headerWatcher),
    ])
}
