export interface IUser {
    acting_title_ids: number[]
    department_id: number
    full_name: string
    is_off: boolean
    main_title_id: number
    phone: string
    user_id: number
    is_manager: boolean
}
export interface IClientInfo {
    account_number: string
    bank_id: number
    branch_name: string
    client_id: number
    client_name: string
    err_msg: string
    holder_name: string
}
export interface IJobTitle {
    _id: number
    org_id: number
    name: string
    other_name: string
    short_name: string
    code: string
    report_to_id: number
    level_id: number
    level_name: string
    level_code: string
    status: number
    created_at: Date
    timestamp: number
    action_at: Date
}
export interface IConfigFile {
    _id: string
    ref_file_id: string
    type: string
    file_name: string
    status: string
    total: number
    num_success: number
    note: string
    created_employee: number
    created_date: Date
}

export interface IUserName {
    employee_id: number
    full_name: string
    is_off?: boolean
    name: string
    is_team?: boolean
    region_name: string
}
export interface IHeaderMenu {
    _id: string
    image_id: string
    name: string
    command: string
    url: string
}


export interface IHeader {
    title: string
    link?: string
    state?: any
    className?: string
}

export interface IPermissionCheckList {
    client_detail: boolean
    webhook_update: boolean
    webhook_create: boolean
    webhook_detail: boolean
    client_update_phone: boolean
    client_update_status: boolean
    config_permisson: boolean
    repush_callbacklog_list: boolean
    switch_status_list: boolean
    update_order_code_list: boolean
    order_code_list: boolean
    switch_status_action_list: boolean
    view_callbacklog: boolean
    repush_callbacklog: boolean
    switch_status: boolean
    update_order_code: boolean
    order_code: boolean
    partial_return: boolean
    switch_status_action: boolean

}

export interface IFile {
    _id: string
    bucket: string
    source: string
    file_name: string
    file_path: string
    public_file_path: string
    content_type: string
    size: string
    status: string
}
export interface IFile {
    _id: string
    bucket: string
    source: string
    file_name: string
    file_path: string
    public_file_path: string
    content_type: string
    size: string
    status: string
}
export interface IPublicFile {
    file_id: string
    file_name: string
    content_type: string
}
export interface OrderCode {
    client_id: number
    created_client: number
    shop_id: number
    status: string
    order_code: string
    pods: Pod[]
}
export interface Pod {
    type: string
    time: Date
    urls: any
    file_ids: string[]
}

export interface ICalllog {
    createdAt: string
    data: Calllog[]
}
export interface Calllog {
    _id: string
    type: string
    identities: string[]
    action: string
    info: CalllogInfo
    status: string
    createdAt: Date
    partitionTime: Date
}

export interface CalllogInfo {
    client_id: number
    description: string
    order_code: string
    request: CalllogRequest
    response: string
    source: string
    url: string
}
export interface CalllogRequest {
    CODAmount: number
    CODTransferDate: any
    ClientOrderCode: string
    ConvertedWeight: number
    Description: string
    Fee: any
    Height: number
    IsPartialReturn: boolean
    Length: number
    OrderCode: string
    PartialReturnCode: string
    PaymentType: number
    Reason: string
    ReasonCode: string
    ShipperName: string
    ShipperPhone: string
    ShopID: number
    Status: string
    Time: Date
    TotalFee: number
    Type: string
    Warehouse: string
    Weight: number
    Width: number
}

export interface ResponseSwitchStatus {
    order_code: string
    result: boolean
    current_status: string
    message: string
}
export interface Reason {
    reasonCode: string
    reason: string
}
export interface RepushResponse {
    fail: Fail[]
    susses: Susses[]
}
export interface Fail {
    order_code: string
    message: string
}
export interface Susses {
    order_code: string
    message: string
}
export interface SwitchStausListResponse {
    fail: Fail[]
    susses: Susses[]
}

//Client
export interface ClientDetail {
    client_id: number
    ekyc: {
        config: {
            updated_date: Date
        }
    }
    email: string
    name: string
    permission: any
    phone: string
    status: number
}

//Webhook
export interface WebhookDetail {
    Id: number
    Name: string
    WebHookConfig: Config[]
    CallbackTypes: string[]
    Timeout: number
    NumRetry: number
    Status: number
    Permissions: string[]
}
export interface Config {
    WebHookType: string
    Setting: {
        Url: string
        Method: string
        Headers: any
        Authorization: any
    }
}

export interface ResultsGeneral{
    code:number
    data:any
    message:string
}