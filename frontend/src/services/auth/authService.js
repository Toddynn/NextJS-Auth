import axios from "axios";
import { tokenService } from "./tokenService";

const baseURL = 'http://localhost:4000'

export const authService = {
    async login ({username, password}){
        const data = {username, password};
        return axios.post(`${baseURL}/api/login`, data)
            .then((res) => {
                if(res.status === 200){
                    const body = res.data
                    tokenService.save(body.data.access_token)
                } else {
                    throw new Error('Usuário ou senha inválidos')
                }
            })
    },
    async getSession(ctx = null){
        const token = tokenService.get(ctx)
        if(token){
            return axios.get(`${baseURL}/api/session`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((response) => {
                if(response.status === 200){
                    return response.data
                }else{
                    throw new Error('Falha na autenticação')
                }
            })
        }
        
    },
    async logout(){
        tokenService.remove()
    }
}