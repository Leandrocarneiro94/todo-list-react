type Request = {
    method?: string,
    headers?: {
        [key: string]: string
    },
    body?: {
        [key: string]: unknown
    }
}

const request = async (url: string, {method, headers, body}: Request ) => {
    const resposta = await fetch(url, {
        method,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...headers
        },
        body: JSON.stringify(body)
    }) 
    const dados = await resposta.json()

    if (resposta.ok){
        return dados
    } 

    throw new Error('erro')
}

export default request
