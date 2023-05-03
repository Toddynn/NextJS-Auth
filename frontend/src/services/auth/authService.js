import axios from "axios";
import { tokenService } from "./tokenService";

const baseURL_BACK_END = 'http://localhost:4000';

export const authService = {
    async login ({username, password}){
        const data = {username, password};
        return axios.post(`${baseURL_BACK_END}/api/login`, data)
            .then((res) => {
                if(res.status === 200){
                    const body = res.data;

                    tokenService.save(body.data.access_token);

                    return body;
                } else {
                    throw new Error('Usuário ou senha inválidos')
                }
            })
            .then(async ({data})=>{
                const refresh_token = data.refresh_token;

                await axios.post(`http://localhost:3000/api/refresh`, {refresh_token})
                .then((res)=>{
                    console.log(res.data)
                })
            }) 
    },
    async getSession(ctx = null){
        const token = tokenService.get(ctx)
        if(token){
            return axios.get(`http://localhost:4000/api/session`, {
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
        }else{
            alert('Falha na autenticação');
        }
    },
    async logout(){
        tokenService.delete()
    }
}