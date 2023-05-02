export async function HttpClient (fetchUrl, fetchOptions){
    return await fetch(fetchUrl, {
        ...fetchOptions,
        headers:{
            ...fetchOptions.headers,
            'Content-Type': 'application/json',
        },
        body: fetchOptions.body && JSON.stringify(fetchOptions.body),
    })
    .then(async (respostaServidor) => {
        console.log(JSON.stringify(respostaServidor.body))
        return {
            ok: respostaServidor.ok,
            body: JSON.stringify(respostaServidor.body),
            access_token: respostaServidor.body.access_token
        }
        
    })  
}