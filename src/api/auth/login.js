import axios from "../../utils/axios";
// 获取信息
export function userInfo(id, token) {
    return axios({
        url: "/admin/auth/login/userInfo",
        method: "get",
        params: { id, token }
    });
}

export function loginName(userName, pwd) {
    return axios({
        url: "/api/user/login/",
        data: { userName, pwd }
    });
}

export function logout(uid, token) {
    return axios({
        url: "/admin/auth/login/out",
        method: "post",
        data: { uid, token }
    });
}

export function password(data) {
    return axios({
        url: "/admin/auth/login/password",
        method: "post",
        data: data
    });
}