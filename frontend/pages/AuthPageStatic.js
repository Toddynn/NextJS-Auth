export default function AuthPageStatic(props){
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