import Link from "next/link";
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
            <Link href='/logout'>LogOut</Link>
        </>
    )
}

export default withSessionHOC(AuthPageStatic);
