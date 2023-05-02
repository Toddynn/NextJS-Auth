import { HttpClient } from "../../infra/HttpClient/HttpClient";
import { tokenService } from "./tokenService";

export const authService = {
    async login ({username, password}){
        const body = {username, password}
        return await fetch(`http://localhost:4000/api/login`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: `${body}`
        })
        .then((res) => {
            console.log(res)
           /*  if(!res.json){
                throw new Error('Usuário ou senha inválidos')
            }
            console.log(res)
            tokenService.save(res.body.access_token) */
        })
    }
}