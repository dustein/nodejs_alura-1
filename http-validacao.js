const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

function handleError(erro) {
    throw new Error(erro.message);
}

async function checkStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise.all(arrayURLs.map(async (url) => {
            const resp = await fetch(url)
            console.log(`${resp.status} - ${resp.statusText}`);
            return `${resp.status} - ${resp.statusText}`;
        }))
        return arrayStatus
    } catch (erro) {
        handleError(erro)
    }
}

function geraArrayDeURLs(arrayLinks) {
    console.log(arrayLinks.map(objetoLink => Object.values(objetoLink).join()))
    return arrayLinks.map(objetoLink => Object.values(objetoLink).join());
}

async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checkStatus(links);
    
    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto,
        status: statusLinks[indice]
    }))

    return resultados;
};

export { validaURLs };

