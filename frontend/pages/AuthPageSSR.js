import { tokenService } from "../src/services/auth/tokenService"
import nookies from 'nookies';

export default function AuthPageSSR(props){
    return(
        <>
            <h1>AuthPageSSR</h1>
            <pre>
                {
                    JSON.stringify(props, null, 2)
                }
            </pre>
        </>
    )
}

export async function getServerSideProps(ctx){
    return {
        props: {
            token: tokenService.get(ctx),
        }
    }
}