export function pageStatic(){
    return(
        <pre>
            {
                JSON.stringify(values, null, 2)
            }
        </pre>
    )
}