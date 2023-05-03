import nookies from 'nookies';
import { HttpClient } from '../../src/infra/HttpClient/HttpClient';
import { tokenService } from '../../src/services/auth/tokenService';

const baseURL_BACK_END = 'http://localhost:4000';
const baseURL_FRONT_END = 'http://localhost:3000';
const REFRESH_TOKEN_KEY = 'REFRESH_TOKEN_KEY';

const controllers = {
    async storeRefreshToken(req, res) {
        const ctx = { req, res }; 
        nookies.set(ctx, REFRESH_TOKEN_KEY, req.body.refresh_token, {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
        })

        res.json({
            data: {
                message: 'Stored with success'
            }
        })
    },
    async displayCookies(req, res){
        const ctx = { req, res };

        res.json({
            data:{
                cookies: nookies.get(ctx)
            }
        })
    },
    async regenerateTokens(req, res){
        const ctx = { req, res };
        const cookies = nookies.get(ctx);
        const refresh_token = cookies[REFRESH_TOKEN_KEY] || req.body.refresh_token;

        const refreshResponse = await HttpClient(`${baseURL_BACK_END}/api/refresh`, {
            method: 'POST',
            body: { refresh_token }
        })

        
        if(!refreshResponse.ok){
            res.json({
                status: 401,
                message: 'Não autorizado',
            })
        }else{
            const body = refreshResponse.body
            nookies.set(ctx, REFRESH_TOKEN_KEY, body.data.refresh_token, {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
            });

            tokenService.save(body.data.access_token, ctx);
        
            res.json({
                status: 200,
                message: 'Token regenerado com sucesso',
                body: body.data
            })
        }
    }
} 

const controllerBy = {
    POST: controllers.storeRefreshToken,
    GET: controllers.regenerateTokens,
    PUT: controllers.regenerateTokens,
    DELETE: (req,res)=>{
        const ctx = {req, res};
        nookies.destroy(ctx, REFRESH_TOKEN_KEY, {
            httpOnly: true,
            sameSite: 'lax',
            path: '/',
        })

        res.json({
            data:{
                status: 200,
                message: 'Token deleted successfully'
            }
        })
    }
}

export default function handler(request, response){
    if(controllerBy[request.method]){
        const requestMethod = request.method;
        return controllerBy[requestMethod](request, response);
    }else{
        response.status(404).json({
            status: 404,
            message: 'Not found'
        })
    }
}