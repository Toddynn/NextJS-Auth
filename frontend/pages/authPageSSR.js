export function pageSSR(){
    return(
        <pre>
            {
                JSON.stringify(values, null, 2)
            }
        </pre>
    )
}