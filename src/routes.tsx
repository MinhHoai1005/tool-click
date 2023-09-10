import React from "react"
import { Route, Routes } from "react-router-dom"

import { connect } from "react-redux"
import { IPermissionCheckList, IUser } from "./model"
import {Home} from "../src/pages/Home"


interface RoutesProps {
    user?: IUser
    permission?: IPermissionCheckList
}

class RoutesIndex extends React.PureComponent<RoutesProps, {}> {
    render() {
        const { user, permission } = this.props
        return (
            <Routes>
                <Route path="/home" element= {<Home />} />
                {/* <Route exact name="Login" path="/login" component={Login} />
                <Route exact name="Authorize" path="/authorize" component={Authorize} />

                
                <PrivateRoute exact name="Order" path="/order" component={Order} isAllow={true} />
                <PrivateRoute exact name="Orders" path="/orders-processing" component={OrdersProcessing} isAllow={true} />
                <PrivateRoute exact name="Orders" path="/client" component={Client} isAllow={true} />
                <Route exact name="UnAuthorized" path="/401" component={PageUnauthorized} />
                <Route exact name="Forbidden" path="/403" component={PageForbidden} />
                <Route exact name="Error" path="/error" component={PageError} />

                <Redirect exact from="/" to="/home" />
                <Route component={PageNotFound} /> */}
            </Routes>
        )
    }
}

// const mapStateToProps = (state: { auth: { user: any; permission: any } }) => {
//     return {
//         user: state.auth.user,
//         permission: state.auth.permission,
//     }
// }

export default connect(null, null)(RoutesIndex)
