import axios from 'axios';
import nookies from 'nookies'
import { tokenService } from '../../src/services/auth/tokenService';

const controllers = {
    async storeRefreshToken(req, res) {
        const ctx = { req, res }; 
        nookies.set(ctx, "REFRESH_TOKEN_KEY", req.body.refresh_token, {
            httpOnly: true,
            sameSite: 'lax',
        })

        res.json({
            data: {
                message: 'Stored with success'
            }
        })
    },
    async getCookies(req, res){
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
        const refreshToken = cookies["REFRESH_TOKEN_KEY"];

        const baseURL ='http://localhost:4000'
        const refreshResponse = await fetch(`${baseURL}/api/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${refreshToken}`
            },
        });

        if(refreshResponse.ok){
            nookies.set(ctx, "REFRESH_TOKEN", refreshResponse.headers.data.refresh_token, {
                httpOnly: true,
                sameSite: 'lax',
            });

            tokenService.save(body.data.refresh_token, ctx);
        
            res.json({
                refreshResponse
            })
        }
        else{
            res.json({
                status: 401,
                message: 'Não autorizado',
            })
        }
    } 
}

const controllerBy = {
    POST: controllers.storeRefreshToken,
    GET: controllers.regenerateTokens
}

export default function handler(req, res){
    if(controllerBy[req.method]){
        return controllerBy[req.method](req, res)
    }else{
        res.status(404).json({
            status: 404,
            message: 'Not found'
        })
    }
}