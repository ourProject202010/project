export type FormsValuesType = {
    email: string
    phone: string
    password: string
    repassword?: string
}

export type FormsErrorsType = {
    email?: string
    phone?: string
    password?: string
    repassword?: string
}

export type GetParamsType = {
    path: string
    data: any
}