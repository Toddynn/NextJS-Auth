import { useRouter } from "next/router";
import { tokenService } from "../src/services/auth/tokenService"
import {useEffect} from 'react';
import { HttpClient } from "../src/infra/HttpClient/HttpClient";

export default function LogOutPage(){
    const router = useRouter();

    useEffect(async()=>{
        try{
            await HttpClient('http://localhost:3000/api/refresh', {
                method: 'DELETE',
            })
            tokenService.delete();
            router.push("/");
        } catch (err){
            console.log(err);
        }
    });

    return(
        <div>
            <h1>Loging Out...</h1>
        </div>
    )
}