import { api } from "../../config/config"
import { Fetch } from "../fetch"
import helper from "../helper"

export const setAuthToken = async (user_name: string , password: string ) => {
    let url = api.setAuthToken.url

    try {
        const body = {
            user_name,
            password,
        }
        const response = await Fetch.Post<{ token: string }>(url, body)

        if (response?.code === 200) {
            return response?.data
        } else {
            if (response?.code_message) throw response?.code_message_value
            else throw response?.message
        }
    } catch (error) {
        helper.log("setAuthToken", error)
        throw error
    }
}