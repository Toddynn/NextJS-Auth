import { useRouter } from "next/router";
import { authService } from "./authService";
import { useState, useEffect, React } from "react";

export function withSession(funcao){
    return async (ctx) => {
        try{
            const session = await authService.getSession(ctx);
            const ctxModified = {
                ...ctx,
                req: {
                    ...ctx.req,
                    session: session
                }
            }
            return funcao(ctxModified)
        } catch (err) {
            return {
                redirect: {
                    permanent: false,
                    destination: '/?error=401'
                }
            }
        }
    }
}


export function useSession(){
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        authService.getSession()
        .then((userSession)=>{
            setSession(userSession);
        })
        .catch((err)=>{
            setError(err);
        })
        .finally(()=>{
            setLoading(false);
        })
    },[]);

    return {
        loading,
        error,
        data: {session},
    }
}

export function withSessionHOC(Component){
    return function Wrapper(props){
        const session = useSession();
        const router = useRouter();
        
        if(session.error && !session.loading){
            router.push('/?error=401');
        }

        const modifiedProps = {
            ...props,
            session: session.data.session,
        }
        return(
            <Component {...modifiedProps}></Component>
        )
    }
}