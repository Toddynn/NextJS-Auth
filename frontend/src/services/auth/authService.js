import axios from "axios";
import { tokenService } from "./tokenService";

export const authService = {
    async login ({username, password}){
        const data = {username, password};
        return axios.post(`http://localhost:4000/api/login`, data)
            .then((res) => {
                if(res.status === 200){
                    const body = res.data
                    tokenService.save(body.data.access_token)
                } else {
                    throw new Error('Usuário ou senha inválidos')
                }
            })
    }
}