export type User = {
    email: string;
    name: string;
    token: string;
}

export type UserReq = {
    name: string;
    email: string;
    password: string;
}

export type UserLoginReq = Omit<UserReq, 'name'>

export type CurrentUser = User & { _id: string };