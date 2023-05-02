import { withSession } from "../src/services/auth/session"

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

export const getServerSideProps = withSession((ctx)=>{
    return {
        props: {
            session: ctx.req.session
        }
    }
})
