const ACCESS_TOKEN_KEY = 'ACCESS_TOKEN_KEY'

export const tokenService = {
    save(access_token){
        localStorage.setItem(ACCESS_TOKEN_KEY, access_token);
        sessionStorage.setItem(ACCESS_TOKEN_KEY, access_token)
    },
    get(){
        return localStorage.getItem(ACCESS_TOKEN_KEY) || sessionStorage.getItem(ACCESS_TOKEN_KEY)
    },
    delete(){
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        sessionStorage.removeItem(ACCESS_TOKEN_KEY)
    }
}