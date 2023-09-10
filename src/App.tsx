import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { configureStore } from "./store"
import Routes from "./routes"

const store = configureStore()

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Routes />
            </Provider>
        </BrowserRouter>
    )
}

export default App
