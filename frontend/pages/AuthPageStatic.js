import { withSessionHOC } from "../src/services/auth/session";

function AuthPageStatic(props){
    return(
        <>
            <h1>Auth Page Static</h1>
            <pre>
                {
                    JSON.stringify(props, null, 2)
                }
            </pre>
        </>
    )
}

export default withSessionHOC(AuthPageStatic);
